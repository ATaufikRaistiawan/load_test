"use client"

import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

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

function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    },
    ]
    }

    export default function History() {
    const data = getData()
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

                    {/* <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-cyan-500 mr-1"></div>
                            CPU
                        </div>
                        <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-purple-500 mr-1"></div>
                            Memory
                        </div>
                        <div className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-blue-500 mr-1"></div>
                            Network
                        </div>
                    </div> */}
                </div>

                <TabsContent value="left" className="mt-0">
                    <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">

                        <div className="container mx-auto py-10">
                            <DataTable columns={columns} data={data} />
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="right" className="mt-0">
                    <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">
                        second tab
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
