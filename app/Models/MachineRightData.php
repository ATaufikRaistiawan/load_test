<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MachineRightData extends Model
{
    use HasFactory;

    /**
     * fillable
     *
     * @var array
     */
    protected $fillable = [
        'rpm',
        'rev',
        'load',
        'rpm_target',
        'rev_target',
        'load_target',
        'alarm',
        'isRunning',
    ];
}
