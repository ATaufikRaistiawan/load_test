<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MachineLeftData extends Model
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
    public function alarmDetail()
{
    return $this->belongsTo(AlarmList::class, 'alarm');
}

}

