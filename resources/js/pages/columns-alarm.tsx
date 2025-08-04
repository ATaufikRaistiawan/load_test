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
export type alarmHistory = {
id: number
timestamp: string
alarm: string
active: boolean
}

export const columnsAlarm: ColumnDef<alarmHistory>[] = [
    {
    accessorKey: "id",
    header: "ID",
    },
    {
    accessorKey: "timestamp",
    header: "Date Time",
    },
    // {
    // accessorKey: "updatedTime",
    // header: "Reset Time",
    // },
    {
    accessorKey: "alarm",
    header: "Alarm",
    cell: ({ row }) => {
    const alarm = row.original.active

    if (alarm) {
    return(
    <span className="text-xs px-2 py-1 rounded bg-red-600 text-white">
        {row.original.alarm}
        </span>)
    } else if (!alarm) {
    return <span className="text-xs px-2 py-1 rounded bg-green-600 text-white">
        {row.original.alarm}
        </span>
    } else {
    return <span className="text-xs px-2 py-1 rounded bg-gray-500 text-white">
        -
    </span>
    }
    },
    },

    ]
