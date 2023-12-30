<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Public\AboutController;
use App\Http\Controllers\Public\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home.index');
Route::post('/', [HomeController::class, 'store'])->name('home.store');
Route::post('/example', fn () => dd('This is a POST in example'))->name('example');

Route::get('/about', [AboutController::class, 'index'])->name('about.index');
Route::post('/about', [AboutController::class, 'store'])->name('about.store');

Route::inertia('/contact', 'Public/Contact')->name('contact.index');

Route::resource('/admin/users', UserController::class)->only([
    'index',
    'show',
    'create',
    'edit',
    'store',
    'update',
    'destroy',
])->names('admin.users');
