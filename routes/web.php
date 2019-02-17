<?php

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

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('angularjs');
})->name("angularjs");

Route::get('/angular', function () {
    return view('angular');
})->name("angular");

Route::get('/react', function () {
    return view('react');
})->name("react");
