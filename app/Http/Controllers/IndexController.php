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
        return Inertia::render('Dashboard', [
            'leftData' => MachineLeftData::all(),
            'rightData' => MachineRightData::all(),
        ]);
    }
}
