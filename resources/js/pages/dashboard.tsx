"use client"

import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type leftStageData, rightStageData,  latestLeftStageData} from '@/types'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import wheel from './images/wheel.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"




import {
Activity,
Wind,
Weight,
MapPin,
Cpu,
type LucideIcon,
RefreshCw,
} from "lucide-react"

import {
Card,
CardAction,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import {
ResizableHandle,
ResizablePanel,
ResizablePanelGroup,
} from "@/components/ui/resizable"


import {
Carousel,
CarouselContent,
CarouselItem,
CarouselNext,
CarouselPrevious,
} from "@/components/ui/carousel"


import {
Table,
TableBody,
TableCaption,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "@/components/ui/table"



export default function Dashboard({
    latestLeftData, leftData, rightData,
}: {
    latestLeftData: latestLeftStageData,
    leftData: leftStageData[],
    rightData: rightStageData[]
})
{
return (

<AppLayout>


    <Head title="Dashboard" />
    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="border-b border-slate-700/50 pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-slate-100 flex items-center">
                            Left Stage
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                            <Badge variant="outline"
                                className="bg-slate-800/50 text-cyan-400 border-cyan-500/50 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-1 animate-spin"></div>
                                RUNNING
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="justify-between">
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                        <div>
                            <MetricCard title="Speed" value={latestLeftData.rpm} icon={Wind} color="cyan" detail={latestLeftData.rpm_target}
                                suffix='rpm' />
                            <div className='p-3'></div>
                            <MetricCard title="Load" value={latestLeftData.load} icon={Weight} color="cyan" detail={latestLeftData.load_target}
                                suffix='kN' />
                            <div className='p-3'></div>
                            <MetricCard title="Revolution" value={latestLeftData.rev} icon={MapPin} color="cyan" detail={latestLeftData.rev_target}
                                suffix='rev' />
                        </div>
                        <div>
                            {/* {latestLeftData.rpm} */}
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="border-b border-slate-700/50 pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-slate-100 flex items-center">
                            Right Stage
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                            <Badge variant="outline"
                                className="bg-slate-800/50 text-cyan-400 border-cyan-500/50 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-1 animate-pulse"></div>
                                RUNNING
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* <CarouselPlugin /> */}
                        <MetricCard title="Speed" value={1000} icon={Wind} color="cyan" detail="5000" suffix='rpm' />
                        <div>
                            {/* <img className='animate-spin' src={wheel} alt="react logo" /> */}
                        </div>
                        <MetricCard title="Load" value={1000} icon={Weight} color="cyan" detail="5000" suffix='kN' />
                        <div></div>
                        <MetricCard title="Revolution" value={1000} icon={MapPin} color="cyan" detail="5000"
                            suffix='rev' />
                    </div>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    </div>
</AppLayout>
);
}


function MetricCard({
title,
value,
icon: Icon,
color,
detail,
suffix,
}: {
title: string
value: number
icon: LucideIcon
color: string
detail: number
suffix: string
}) {
// Ensure value is a number
const numericValue = Number(value) || 0

const getColor = () => {
switch (color) {
case "cyan":
return "from-cyan-500 to-blue-500 border-cyan-500/30"
case "green":
return "from-green-500 to-emerald-500 border-green-500/30"
case "blue":
return "from-blue-500 to-indigo-500 border-blue-500/30"
case "purple":
return "from-purple-500 to-pink-500 border-purple-500/30"
default:
return "from-cyan-500 to-blue-500 border-cyan-500/30"
}
}

return (
<div className={`bg-slate-800/50 rounded-lg border ${getColor()} p-4 relative overflow-hidden`}>
    <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-slate-400">{title}</div>
        <Icon className={`h-5 w-5 text-${color}-500`} />
    </div>
    <div className="text-2xl font-bold mb-1 bg-gradient-to-r bg-clip-text text-transparent from-slate-100 to-slate-300">
        {numericValue} {suffix}
    </div>
    <div className="text-xs text-slate-500">/{detail}</div>
    <div
        className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r opacity-20 blur-xl from-cyan-500 to-blue-500">
    </div>
</div>
)
}
