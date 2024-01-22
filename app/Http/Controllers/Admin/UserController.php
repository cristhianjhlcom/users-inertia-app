<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\RedirectResponse;
use Inertia\{Inertia, Response};
use App\Models\{User, Company, Job};
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\UserResource;
use App\Http\Requests\Admin\StoreUserRequest;
use App\Http\Requests\Admin\UpdateUserRequest;

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

    public function store(StoreUserRequest $request): RedirectResponse
    {
        sleep(5);
        $user = User::create([
            'email' => $request->input('email'),
        ]);

        $profile = [
            'first_name' => $request->input('firstName'),
            'last_name' => $request->input('lastName'),
            'phone' => $request->input('phone'),
            'address' => $request->input('address'),
            'job_id' => $request->input('job'),
            'company_id' => $request->input('company'),
        ];

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/profiles');
            $profile['image'] = '/storage/profiles/' . basename($imagePath);
        }

        $user->profile()->create($profile);

        return to_route('admin.users.index');
    }

    public function edit(User $user): Response
    {
        $user = new UserResource($user);

        $jobs = Job::all()->map(fn ($job) => [
            'label' => $job->name,
            'value' => $job->id,
        ]);

        $companies = Company::all()->map(fn ($company) => [
            'label' => $company->name,
            'value' => $company->id,
        ]);

        return Inertia::render('Admin/Users/Edit', [
            'user' => $user,
            'companies' => $companies,
            'jobs' => $jobs,
        ]);
    }

    public function update(UpdateUserRequest $request, User $user): RedirectResponse
    {
        sleep(4);
        $user->email = $request->input('email');
        $user->save();
        $profile = $user->profile;

        if ($profile) {
            $profile->update([
                'first_name' => $request->input('firstName'),
                'last_name' => $request->input('lastName'),
                'phone' => $request->input('phone'),
                'address' => $request->input('address'),
                'job_id' => $request->input('job'),
                'company_id' => $request->input('company'),
            ]);
        }

        return to_route('admin.users.index');
    }
}
