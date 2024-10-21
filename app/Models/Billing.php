<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Billing extends Model
{
    use HasFactory;
    protected $table = 'billing';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id',
        'reading_id',
        'additional_fees_id',
        'rate_id',
        'prev_readings',
        'current_readings',
        'is_paid',
        'due_id'
    ];
}
