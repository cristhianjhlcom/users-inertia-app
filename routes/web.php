<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Public/Index', [
        'name' => 'Cristhian',
        'age' => 29,
    ]);
});

Route::inertia('/about', 'Public/About');
Route::inertia('/contact', 'Public/Contact');
