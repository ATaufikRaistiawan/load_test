"use client"
import { useEffect, useState } from "react"
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { type leftStageData, rightStageData} from '@/types'
import { DatePickerWithRange } from "@/components/date-picker-with-range"
import { DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select";

import {
Tabs,
TabsContent,
TabsList,
TabsTrigger
} from "@/components/ui/tabs"

import { columns, Payment } from "./columns"
import { columnsAlarm, alarmHistory } from "./columns-alarm"
import { DataTable } from "./data-table"

const breadcrumbs: BreadcrumbItem[] = [
{
title: 'History',
href: '/history',
},
];


export default function History({leftHistory, rightHistory}: {leftHistory: leftStageData[], rightHistory:
rightStageData[]}) {
// console.log(leftHistory);
const [data, setData] = useState([]);
const [activeTab, setActiveTab] = useState("left");
const [alarmFilter, setAlarmFilter] = useState("all");


  useEffect(() => {
    // ini dijalanin SEKALI pas komponen muncul
  const fetchData = () => {
    fetch('/alarms')
      .then((res) => res.json())
      .then((json) => setData(json))
  }
  
  fetchData() // langsung jalan sekali
  const interval = setInterval(fetchData, 2000) // lalu jalan tiap 5 detik

  return () => clearInterval(interval) // bersihin interval pas komponen di-unmount

  }, []) // ← ini array kosong artinya "cuma jalan sekali"

return (
<AppLayout>

    <Head title="History" />
    <div className="mt-8">
        <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val)} className="w-full">
        {/* <Tabs defaultValue="left" className="w-full"> */}
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
                    <TabsTrigger value="history"
                        className="data-[state=active]:bg-slate-700 data-[state=active]:text-cyan-400">
                        Alarm History
                    </TabsTrigger>
                </TabsList>
                
            {/* 🟢 TOMBOL & FILTER CUMA MUNCUL DI TAB HISTORY */}
            {activeTab === "history" && (
              <div className="flex gap-2">
                <Select
                  value={alarmFilter}
                  onValueChange={(v) =>
                    setAlarmFilter(v as "all" | "alarm" | "normal")
                  }
                >
                  <SelectTrigger className="w-[150px] bg-slate-700 text-white">
                    <SelectValue placeholder="Filter Alarm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="alarm">Alarm Only</SelectItem>
                    <SelectItem value="normal">Normal Only</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  onClick={() => {
                    // Nanti lu bikin handleExport() di sini
                  }}
                  className="bg-green-700 text-white hover:bg-green-600"
                >
                  Export Excel
                </Button>
              </div>
            )}
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
                            alarm: item.alarm, // ⬅️ still number for filtering
                            alarmMessage: item.alarm_detail?.message ?? "-", // ambil message alarm
                            }))}
                            />

                    </div>
                </div>
            </TabsContent>

            <TabsContent value="history" className="mt-0">
                <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">
                    <DataTable columns={columnsAlarm} data={(data || []).map((item)=> ({
                        id: item.id,
                        timestamp: item.timestamp,
                        alarm: item.message,
                        active: item.active,
                        }))}
                        />
                </div>
            </TabsContent>
        </Tabs>
    </div>
</AppLayout>
);
}
