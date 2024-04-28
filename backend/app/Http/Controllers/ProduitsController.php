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
        $form = $request->all();
        $form['image'] = $request->file('image')->store('produit','public');
        return Produits::create( $form );
    }

    /**
     * Display the specified resource.
     */
    public function show($produits )
    {
        $produit = Produits::find($produits);
        return response()->json([
            'produits' => $produit
        ]);
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
    public function update(Request $request, Produits $produit)
    {
        $attributes = $request->validate([
            'name' => "string",
            'description' => "string",
            'quantite' => "integer",
            'prix' => "numeric",
            'image' => "image",
            'categories_id' => "exists:categories,id"
        ]);

        $produit->update($attributes);

        return response()->json([
            'produit' => $produit
        ]);

    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy($produits)
    {
        $produit = Produits::find($produits);

        if(!$produit) {
            return response()->json([
                'error' => 'Produit not found :('
            ], 404);
        }

        $produit->delete();

        return response()->json([
            'message' => 'Suppression successful',
            'id' => $produit->id
        ]);
    }

}
