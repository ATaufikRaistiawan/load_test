"use client"

import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
}

from '@/components/ui/card'
import {
ChartConfig,
ChartContainer,
ChartTooltip,
ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
{ month: "January", desktop: 186, mobile: 80 },
{ month: "February", desktop: 305, mobile: 200 },
{ month: "March", desktop: 237, mobile: 120 },
{ month: "April", desktop: 73, mobile: 190 },
{ month: "May", desktop: 209, mobile: 130 },
{ month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
desktop: {
label: "Desktop",
color: "#3b82f6",
// color: "hsl(var(--chart-1))",
},
mobile: {
label: "Mobile",
color: "#ef4444",
// color: "hsl(var(--chart-2))",
},
} satisfies ChartConfig

const breadcrumbs: BreadcrumbItem[] = [
{
title: 'History',
href: '/history',
},
];

export default function History() {
return (
<AppLayout breadcrumbs={breadcrumbs}>

    <Head title="History" />
    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
            </div>
            <div
                className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                <PlaceholderPattern
                    className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
            </div>
            <div
                className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                <PlaceholderPattern
                    className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
            </div>
        </div>

        {/* <div
            className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
            <PlaceholderPattern
                className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                <Card>
                    <CardHeader>
                        <CardTitle>Area Chart - Axes</CardTitle>
                        <CardDescription>
                            Showing total visitors for the last 6 months
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <AreaChart accessibilityLayer data={chartData} margin={{
              left: -20,
              right: 12,
            }}>
                                <CartesianGrid vertical={false} />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8}
                                    tickFormatter={(value)=> value.slice(0, 3)}
                                    />
                                    <YAxis tickLine={false} axisLine={false} tickMargin={8} tickCount={3} />
                                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                                    <Area dataKey="mobile" type="natural" fill="var(--color-mobile)" fillOpacity={0.4}
                                        stroke="var(--color-mobile)" stackId="a" />
                                    <Area dataKey="desktop" type="natural" fill="var(--color-desktop)" fillOpacity={0.4}
                                        stroke="var(--color-desktop)" stackId="a" />
                            </AreaChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter>
                        <div className="flex w-full items-start gap-2 text-sm">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2 font-medium leading-none">
                                    Trending up by 5.2% this month
                                    <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                                    January - June 2024
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
        </div> */}
        
    </div>
</AppLayout>
);
}
