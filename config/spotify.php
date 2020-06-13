<?php

return [
    'auth_redirect' => '/spotify-auth-result',
    'client_id' => env('SPOTIFY_CLIENT_ID', null),
    'client_secret' => env('SPOTIFY_CLIENT_SECRET', null),
    'scopes' => [
        // 'user-library-read',
        // 'user-top-read',
        // 'user-read-recently-played',
        'user-read-private',
    ],
    'auth_url' => env('SPOTIFY_AUTH_URL', 'https://accounts.spotify.com/authorize'),
    'api_token_url' => env('SPOTIFY_API_TOKEN_URL', 'https://accounts.spotify.com/api/token'),
];
