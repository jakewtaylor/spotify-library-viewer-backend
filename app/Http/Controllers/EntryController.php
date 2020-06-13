<?php

namespace App\Http\Controllers;

use App\Util\Spotify;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Http;

class EntryController extends Controller
{
    public function homepageController()
    {
        if (Auth::check()) {
            return view('app');
        }

        return view('home');
    }

    public function spotifyAuthResult(Spotify $spotify, Request $request)
    {
        if ($request->error) {
            return back()->withError('You need to authorize us with spotify!');
        }

        $res = $spotify->getAccessTokens($request->code);

        if (array_key_exists('error', $res)) {
            return view('spotify-connection-failed');
        }

        if (app()->environment('local')) {
            return redirect(env('APP_URL') . ':3000/?' . http_build_query(
                $this->getTokenData($res)
            ));
        }

        foreach ($this->getTokenData($res) as [$key, $val]) {
            Cookie::queue($key, $val, 10);
        }

        return redirect()->route('home');
    }

    protected function getTokenData(array $response): array
    {
        return [
            'accessToken' => $response['access_token'],
            'tokenType' => $response['token_type'],
            'expiresIn' => $response['expires_in'],
            'refreshToken' => $response['refresh_token'],
        ];
    }
}
