"use client"

import * as XLSX from "xlsx"
import { saveAs } from "file-saver"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData extends { timestamp?: string; alarm?: number; alarmMessage?: string  }, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [fromDateTime, setFromDateTime] = useState("")
  const [toDateTime, setToDateTime] = useState("")
  const [onlyAlarm, setOnlyAlarm] = useState(false)

  const filteredData = useMemo(() => {
    let filtered = data

    if (fromDateTime && toDateTime) {
      const from = new Date(fromDateTime)
      const to = new Date(toDateTime)

      filtered = filtered.filter((item) => {
        if (!item.timestamp) return false
        const itemDate = new Date(item.timestamp)
        return itemDate >= from && itemDate <= to
      })
    }

    if (onlyAlarm) {
      filtered = filtered.filter((item) => item.alarm && item.alarm > 0)
    }

    return filtered
  }, [data, fromDateTime, toDateTime, onlyAlarm])

const handleExport = () => {
  const exportData = filteredData.map((item) => ({
  ID: item.id,
  Timestamp: item.timestamp,
  RPM: item.rpm,
  Revolution: item.rev,
  Load: item.load,
  // Alarm: item.alarm,
  // Alarm: item.alarmMessage ?? "-", // ⬅️ pake alarmMessage buat export
}))


  const worksheet = XLSX.utils.json_to_sheet(exportData)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1")

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  })

  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  })

  saveAs(blob, "machine_history.xlsx")
}
  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="">
      {/* Filter */}
      <div className="flex flex-wrap gap-4 items-center my-4">
        <div>
          <label className="px-4 text-sm text-white">From:</label>
          <input
            type="datetime-local"
            className="bg-slate-700 text-white px-2 py-1 rounded"
            value={fromDateTime}
            onChange={(e) => setFromDateTime(e.target.value)}
          />
        </div>
        <div>
          <label className="px-4 text-sm text-white">To:</label>
          <input
            type="datetime-local"
            className="bg-slate-700 text-white px-2 py-1 rounded"
            value={toDateTime}
            onChange={(e) => setToDateTime(e.target.value)}
          />
        </div>
      </div>

      {/* Tabel */}
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon />
        </Button>
        <div className="text-white text-sm">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  )
}

