<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reading extends Model
{
    use HasFactory;
    protected $table = 'readings';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id',
        'reading_amount',
    ];
}
