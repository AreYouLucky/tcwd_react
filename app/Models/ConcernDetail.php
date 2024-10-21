<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConcernDetail extends Model
{
    use HasFactory;
    protected $table = 'concerns_msg';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id',
        'concern_id',
        'msg',
        'is_img'
    ];
}
