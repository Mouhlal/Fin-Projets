<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Produits extends Model
{
    use HasFactory , SoftDeletes;

    protected $fillable=['name','image','description','prix','quantite','categories_id'];

    public function Categories(){
        return $this->belongsTo(Categorie::class);
    }
    public function Clients(){
        return $this->hasMany(Clients::class);
    }
}
