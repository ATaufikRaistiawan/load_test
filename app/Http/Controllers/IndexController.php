<?php

namespace App\Http\Controllers;

use App\Models\MachineLeftData;
use App\Models\MachineRightData;

use Carbon\Traits\Timestamp;
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
        ]);
    }
    public function latestLeftData()
{
    return response()->json(
        MachineLeftData::latest('timestamp')->first()
    );
}

public function latestRightData()
{
    return response()->json(
        MachineRightData::latest('timestamp')->first()
    );
}

}

