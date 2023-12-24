<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Public\AboutController;
use App\Http\Controllers\Public\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);
Route::post('/', [HomeController::class, 'store']);
Route::post('/example', function () {
    dd('This is a POST in example');
});
Route::get('/about', [AboutController::class, 'randomUser']);
Route::post('/about', [AboutController::class, 'store']);
Route::put('/about/{user}', [AboutController::class, 'update']);
Route::delete('/about/{user}', [AboutController::class, 'destroy']);

Route::inertia('/contact', 'Public/Contact');

Route::resource('/admin/users', UserController::class)->only(['index', 'show', 'create', 'edit', 'store', 'update', 'destroy']);
