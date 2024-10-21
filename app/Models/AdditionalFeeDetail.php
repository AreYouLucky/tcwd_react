<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdditionalFeeDetail extends Model
{
    use HasFactory;
    protected $table = 'additional_fees_detail';
    protected $primaryKey = 'id';
    protected $fillable = [
        'additional_fees_id',
        'title',
        'amount',
        'description'
    ];
}
