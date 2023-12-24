<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function randomUser(): Response
    {
        $randomUser = User::inRandomOrder()->first();

        return Inertia::render('Public/About', [
            'randomUser' => Inertia::lazy(fn () => $randomUser),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Inertia::render('Public/About', [
            "message" => "Se guardo el usario {$request->input('name')}",
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        return Inertia::render('Public/About', [
            "message" => "Se actualizo el usario {$id} por el nombre {$request->input('name')}",
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            throw new Exception("No se puede borrar el id {$id}");
        } catch (\Exception $e) {
            return Inertia::render('Public/About', [
                "message" => $e->getMessage(),
            ]);
        }
    }
}
