<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\MachineLeftData;
use App\Models\MachineRightData;

class HistoryController extends Controller
{
    public function index()
    {
        // $leftHistory = MachineLeftData::all(); // atau paginate
        // $rightHistory = MachineRightData::all();

        $leftHistory = MachineLeftData::with('alarmDetail')->get();
        $rightHistory = MachineRightData::with('alarmDetail')->get();
    
        return Inertia::render('history', [
            'leftHistory' => $leftHistory,
            'rightHistory' => $rightHistory,
        ]);
    }
    
}
