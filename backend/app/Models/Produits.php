<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Produits extends Model
{
    use HasFactory , SoftDeletes;

    protected $guarded=[];

    public function Categories(){
        return $this->belongsTo(Categorie::class);
    }
    public function Clients(){
        return $this->hasMany(Clients::class);
    }
}
