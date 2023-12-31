<?php

namespace App\Http\Controllers\Admin;

use Inertia\{Inertia, Response};
use App\Models\{User, Company, Job};
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\Admin\UserResource;
use App\Http\Requests\Admin\StoreUserRequest;

class UserController extends Controller
{
    public function index(): Response
    {
        $users = UserResource::collection(User::latest()->get());

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
        $jobs = Job::all()->map(fn ($job) => [
            'label' => $job->name,
            'value' => $job->id,
        ]);

        $companies = Company::all()->map(fn ($company) => [
            'label' => $company->name,
            'value' => $company->id,
        ]);

        return Inertia::render('Admin/Users/Create', [
            'jobs' => $jobs,
            'companies' => $companies,
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        $user = User::create([
            'email' => $request->input('email'),
        ]);

        $user->profile()->create([
            'first_name' => $request->input('firstName'),
            'last_name' => $request->input('lastName'),
            'phone' => $request->input('phone'),
            'address' => $request->input('address'),
            'job_id' => $request->input('job'),
            'company_id' => $request->input('company'),
        ]);

        return to_route('admin.users.index');
    }

    public function edit(User $user): Response
    {
        return Inertia::render('Admin/Users/Edit', compact('user'));
    }
}
