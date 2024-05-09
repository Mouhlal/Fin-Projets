<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::all();
        return response()->json([
            'users' => $user
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return  User::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $belly = $request->validate([
            'name' => 'string',
            'image' => 'image',
            'cin' => 'string',
            'Date_Début_travail' => 'date',
            'salaries' => 'numeric',
            'email' => 'email',
        ]);

        $id = User::find($id);
        $id->update($belly);

        return response()->json([
            'message' => "L'utilisateur a bien été modifié",
            'user' => $id
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {

        $user->delete();
        return response()->json([
            'message' => 'User  deleted',
        ]);
    }
}
