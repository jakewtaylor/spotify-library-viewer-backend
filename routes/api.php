<?php

use App\Http\Controllers\Api\AlbumController;
use App\Http\Controllers\Api\SpotifyTokenController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/spotify/refresh-token', [SpotifyTokenController::class, 'refresh']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::resource('albums', 'Api\\AlbumController', [
        'except' => ['show', 'create', 'edit', 'update'],
    ]);
});
