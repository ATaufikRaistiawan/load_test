"use client"
import { useState } from "react"
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { type leftStageData, rightStageData} from '@/types'
import { DatePickerWithRange } from "@/components/date-picker-with-range"
import { DateRange } from "react-day-picker"


import {
Tabs,
TabsContent,
TabsList,
TabsTrigger
} from "@/components/ui/tabs"

import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

const breadcrumbs: BreadcrumbItem[] = [
{
title: 'History',
href: '/history',
},
];


export default function History({leftHistory, rightHistory}: {leftHistory: leftStageData[], rightHistory:
rightStageData[]}) {
console.log(leftHistory);

return (
<AppLayout>

    <Head title="History" />
    <div className="mt-8">
        <Tabs defaultValue="left" className="w-full">
            <div className="flex items-center justify-between mb-4">
                <TabsList className="bg-slate-800/50 p-1">
                    <TabsTrigger value="left"
                        className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400">
                        Left Stage
                    </TabsTrigger>
                    <TabsTrigger value="right"
                        className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400">
                        Right Stage
                    </TabsTrigger>
                    <TabsTrigger value="total"
                        className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400">
                        Total
                    </TabsTrigger>
                </TabsList>
            </div>

            <TabsContent value="left" className="mt-0">
                <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">

                    <div className="container mx-auto py-10">
                        <div className='text-center text-2xl p-5'>
                            LEFT STAGE HISTORY
                        </div>
                        {/*
                        <DatePickerWithRange date={dateRange} setDate={setDateRange} className="pb-5" /> */}
                        {/*
                        <DataTable columns={columns} data={leftHistory} /> */}
                        <DataTable columns={columns} data={(leftHistory || []).map((item)=> ({
                            id: item.id,
                            timestamp: item.timestamp,
                            rpm: item.rpm,
                            rev: item.rev,
                            load: item.load,
                            alarm: item.alarm, // ⬅️ still number for filtering
                            alarmMessage: item.alarm_detail?.message ?? "-", // ambil message alarm
                            }))}
                            />
                    </div>
                </div>
            </TabsContent>

            <TabsContent value="right" className="mt-0">
                <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">

                    <div className="container mx-auto py-10">
                        <div className='text-center text-2xl p-5'>
                            RIGHT STAGE HISTORY
                        </div>
                        {/*
                        <DataTable columns={columns} data={rightHistory} /> */}

                        <DataTable columns={columns} data={(rightHistory || []).map((item)=> ({
                            id: item.id,
                            timestamp: item.timestamp,
                            rpm: item.rpm,
                            rev: item.rev,
                            load: item.load,
                            alarm: item.alarmDetail?.message ?? "-", // ambil message alarm
                            }))}
                            />

                    </div>
                </div>
            </TabsContent>

            <TabsContent value="total" className="mt-0">
                <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">
                    third tab
                </div>
            </TabsContent>
        </Tabs>
    </div>
</AppLayout>
);
}
