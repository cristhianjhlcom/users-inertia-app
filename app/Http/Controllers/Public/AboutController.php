<?php

namespace App\Http\Controllers\Public;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\{Inertia, Response};
use App\Http\Controllers\Controller;

class AboutController extends Controller
{
    public function index(): Response
    {
        sleep(3);
        $randomUser = User::inRandomOrder()->first();

        return Inertia::render('Public/About', [
            'randomUser' => Inertia::lazy(fn () => $randomUser),
        ]);
    }

    public function store(Request $request): void
    {
        dd("store method of about controller {$request}");
    }
}
