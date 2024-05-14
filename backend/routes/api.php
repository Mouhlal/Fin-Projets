<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ProduitsController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('produits',ProduitsController::class);
Route::apiResource('users',UserController::class);
//Route::apiResource('categories',CategorieController::class);
