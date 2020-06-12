<?php

namespace App\Util;

use Illuminate\Support\Facades\Http;

class Spotify
{
    private array $config;

    public function __construct(array $config)
    {
        $this->config = $config;
    }

    public function getAuthUrl()
    {
        return $this->config['auth_url'] . '?' . http_build_query([
            'client_id' => $this->config['client_id'],
            'response_type' => 'code',
            'redirect_uri' => $this->getRedirectUri(),
            'scopes' => implode('+', $this->config['scopes']),
        ]);
    }

    public function getRedirectUri()
    {
        return env('APP_URL') . '/' . ltrim($this->config['auth_redirect'], '/');
    }

    public function getAuthHeader()
    {
        $clientId = $this->config['client_id'];
        $clientSecret = $this->config['client_secret'];

        return 'Basic ' . base64_encode("$clientId:$clientSecret");
    }

    public function getAccessTokens(string $code)
    {
        return Http::asForm()
            ->withHeaders([
                'Authorization' => $this->getAuthHeader(),
            ])
            ->post($this->config['api_token_url'], [
                'grant_type' => 'authorization_code',
                'code' => $code,
                'redirect_uri' => $this->getRedirectUri(),
            ])
            ->json();
    }
}
