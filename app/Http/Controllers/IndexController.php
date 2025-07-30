<?php

namespace App\Http\Controllers;

use App\Models\MachineLeftData;
use App\Models\MachineRightData;

use Illuminate\Http\Request;
use Illuminate\View\View;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index(){
        // dd(MachineLeftData::latest()->first()->toArray());

        return Inertia::render('dashboard', [
            'leftData' => MachineLeftData::all(),
            'rightData' => MachineRightData::all(),
            'latestLeftData' => MachineLeftData::latest()->first(),
            'latestRightData' => MachineRightData::latest()->first(),
        ]);
    }
    public function latestLeftData()
{
    return response()->json(
        \App\Models\MachineLeftData::latest()->first([
            'id',
            'rpm',
            'rpm_target',
            'rev',
            'rev_target',
            'load',
            'load_target',
            'timestamp',
            'isRunning',
        ])
    );
}

public function latestRightData()
{
    return response()->json(
        \App\Models\MachineRightData::latest()->first([
            'id',
            'rpm',
            'rpm_target',
            'rev',
            'rev_target',
            'load',
            'load_target',
            'timestamp',
            'isRunning',
        ])
    );
}

}

