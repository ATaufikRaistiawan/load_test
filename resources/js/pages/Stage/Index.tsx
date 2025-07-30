"use client"

import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type leftStageData, rightStageData } from '@/types'

import {
Table,
TableBody,
TableCaption,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "@/components/ui/table"

export default function Index({ leftData, rightData }: {leftData: leftStageData[], rightData: rightStageData[]}) {
return (
<AppLayout>

    <Head title="Machine Data" />
    <div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead className="w-[100px]">DATE TIME</TableHead>
                    <TableHead className="w-[100px]">RPM</TableHead>
                    <TableHead className="w-[100px]">REV</TableHead>
                    <TableHead className="w-[100px]">LOAD</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {rightData.map((left)=>(
                <TableRow key={left.id}>
                    <TableCell>{left.id}</TableCell>
                    <TableCell>{left.timestamp}</TableCell>
                    <TableCell>{left.rpm}</TableCell>
                    <TableCell>{left.rev}</TableCell>
                    <TableCell>{left.load}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
</AppLayout>
);
}
