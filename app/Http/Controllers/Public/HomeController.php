<?php

namespace App\Http\Controllers\public;

use App\Models\User;
use Inertia\{Inertia, Response};
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function index(): Response
    {
        $users = User::all()->map(fn ($user) => [
            'email' => $user->email,
            'firstName' => $user->profile->first_name,
            'lastName' => $user->profile->last_name,
        ]);

        $randomUser = User::inRandomOrder()->first();

        return Inertia::render('Public/Index', [
            'users' => $users,
            'randomUser' => $randomUser,
        ]);
    }
}
