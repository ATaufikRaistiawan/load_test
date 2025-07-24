<?php

namespace App\Http\Controllers;

use App\Models\MachineLeftData;
use App\Models\MachineRightData;

use Illuminate\Http\Request;
use Illuminate\View\View;

class IndexController extends Controller
{
    public function index():View{
        // get all machine data
        $leftLatest = MachineLeftData::latest()->paginate(10);
        $rightLatest = MachineRightData::latest()->paginate(10);

        return view('machine.index', compact('leftLatest','rightLatest'));
    }
}
