"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
id: number
timestamp: string
rpm: number
rev: number
load: number
alarm: string
}

export const columns: ColumnDef<Payment>[] = [
    {
    accessorKey: "id",
    header: "ID",
    },
    {
    accessorKey: "timestamp",
    header: "Date Time",
    },
    {
    accessorKey: "rpm",
    header: "Speed (rpm)",
    },
    {
    accessorKey: "rev",
    header: "Total Revolution",
    },
    {
    accessorKey: "load",
    header: "Load (kN)",
    },
    // {
    // accessorKey: "alarm",
    // header: "Alarm",
    // },
    {
    accessorKey: "alarmMessage",
    header: "Alarm",
    cell: ({ row }) => row.getValue("alarmMessage"),
    }

    ]
