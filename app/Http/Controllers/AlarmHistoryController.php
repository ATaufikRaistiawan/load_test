<?php

namespace App\Http\Controllers;

use App\Models\alarm_history;
use Illuminate\Http\Request;
use App\Models\AlarmHistory;

class AlarmHistoryController extends Controller
{
    public function index()
    {
        $alarms = alarm_history::orderBy('timestamp')->take(50)->get(); // atau pake paginate()
        return response()->json($alarms);
    }
}
