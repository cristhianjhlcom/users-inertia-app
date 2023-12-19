<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Public\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);
Route::post('/', [HomeController::class, 'store']);
Route::post('/example', function () {
    dd('This is a POST in example');
});

Route::inertia('/about', 'Public/About');
Route::inertia('/contact', 'Public/Contact');

Route::resource('/admin/users', UserController::class)->only(['index', 'show', 'create', 'edit', 'store', 'update', 'destroy']);
