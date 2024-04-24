<?php

namespace App\Http\Controllers;

use App\Models\Produits;
use Illuminate\Http\Request;

class ProduitsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $produits = Produits::with('categories')->get();
        return response()->json([
            'produits' => $produits
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
        /* $request->validate([
            'nom' => 'required',
            'image' => 'required|image',
            'description' => 'required',
            'prix' => 'required',
            'quantite' => 'required|int',
            'categories_id' => 'required',
        ]);
       $request->file('image')->store('produits','public');
        Produits::create($request->all());
        return response()->json([
            'message' => "Add with success",
        ]); */
        $form = $request->all();
        $form['image'] = $request->file('image')->store('produit','public');
        return Produits::create( $form ) ;
    }

    /**
     * Display the specified resource.
     */
    public function show(Produits $produits)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produits $produits)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Produits $produits)
    {
        $formup = $request->all();
        if($request->hasFile('image')){
            $formup['image'] = $request->file('image')->store('books','public');
        }
        $produits->fill($formup)->save();
        return $produits;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produits $produits)
    {
        $produits->delete();
        return response()->json([
            'message' => 'Suppression with succees',
            'id' => $produits->id
        ]);
    }
}
