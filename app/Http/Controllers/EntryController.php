<?php

namespace App\Http\Controllers;

use App\Util\Spotify;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class EntryController extends Controller
{
    public function spotifyAuthResult(Spotify $spotify, Request $request)
    {
        if ($request->error) {
            return back()->withError('You need to authorize us with spotify!');
        }

        $res = $spotify->getAccessTokens($request->code);

        if (array_key_exists('error', $res)) {
            return view('spotify-connection-failed');
        }

        return view('spotify-connected')->with(['accessTokens' => $res]);
    }
}
