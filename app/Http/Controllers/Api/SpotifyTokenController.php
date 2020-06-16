<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Util\Spotify;
use Illuminate\Http\Request;

class SpotifyTokenController extends Controller
{
    public function refresh(Spotify $spotify, Request $request)
    {
        $request->validate([
            'refresh_token' => 'required|string',
        ]);

        $res = $spotify->refreshToken($request->refresh_token);

        return response()->json($res);
    }
}
