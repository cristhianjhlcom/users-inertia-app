<?php

namespace App\Http\Controllers\public;

use App\Models\User;
use Inertia\{Inertia, Response};
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(Request $request): Response
    {
        $users = User::all()->map(fn ($user) => [
            'email' => $user->email,
            'firstName' => $user->profile->first_name,
            'lastName' => $user->profile->last_name,
        ]);

        $randomUser = User::inRandomOrder()->first();

        $search = User::query()->when($request->search, function ($query, $search) {
            $query->where(function ($subquery) use ($search) {
                $subquery->where('email', 'like', "%{$search}%");
            });
        })
        ->first();

        return Inertia::render('Public/Index', [
            'users' => fn () => $users,
            'randomUser' => Inertia::lazy(fn () => $randomUser),
            'search' => Inertia::lazy(fn () => $search),
        ]);
    }

    public function store(Request $request)
    {
        dd("This is POST method {$request}");
    }
}
