<?php

use App\Http\Controllers\EntryController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::view('/get-started', 'get-started')->name('get-started');
Route::get('/spotify-auth-result', [EntryController::class, 'spotifyAuthResult']);
Route::get('/{path?}', [EntryController::class, 'homepageController'])->where('path', '.*')->name('home');
