<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\{Inertia, Response};

class UserController extends Controller
{
    public function index(): Response
    {
        $users = UserResource::collection(User::all());

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
        ]);
    }

    public function show(User $user): Response
    {
        $user = new UserResource($user);

        return Inertia::render('Admin/Users/Show', compact('user'));
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Users/Create');
    }

    public function edit(User $user): Response
    {
        return Inertia::render('Admin/Users/Edit', compact('user'));
    }
}
