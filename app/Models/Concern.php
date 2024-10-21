<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Concern extends Model
{
    use HasFactory;
    use HasFactory;
    protected $table = 'concerns';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id',
        'concern_type',
        'concern_details',
        'concern_img'
    ];
}
