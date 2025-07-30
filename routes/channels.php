<?php

use App\Models\MachineLeftData;
use Carbon\Traits\Serialization;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Broadcast;
use PhpParser\Node\Scalar\MagicConst\Class_;
use function PHPUnit\Framework\returnArgument;

Broadcast::channel('machineData', function () {
    return auth()-> check();
});

