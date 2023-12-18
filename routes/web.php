<?php

use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Public/Index');
Route::inertia('/about', 'Public/About');
Route::inertia('/contact', 'Public/Contact');

Route::resource('/admin/users', UserController::class)->only(['index', 'show', 'create', 'edit', 'store', 'update', 'destroy']);
