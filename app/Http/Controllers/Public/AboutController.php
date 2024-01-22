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
        $randomUser = User::inRandomOrder()->first();

        return Inertia::render('Public/About', [
            'randomUser' => Inertia::lazy(fn () => $randomUser),
            'name' => 'Cristhian Hernandez 💯',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices nunc lectus, ac accumsan arcu lobortis sed. Nam posuere mollis varius. Quisque ultricies, odio ut egestas elementum, turpis sem auctor ipsum, convallis aliquam diam metus et leo. Mauris feugiat felis vitae sollicitudin lobortis.',
        ]);
    }

    public function store(Request $request): void
    {
        dd("store method of about controller {$request}");
    }
}
