"use client"

import { ColumnDef } from "@tanstack/react-table";

export type Screen = {
    id: number;
    name: string;
    type: string;
    total_seats: number;
    status: string;
}

export const columns: ColumnDef<Screen>[] = [
    {
        accessorKey: 'id',
        header: 'Id'
    },
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'type',
        header: 'Type'
    },
    {
        accessorKey: 'total_seats',
        header: 'Total Seats'
    },
    {
        accessorKey: 'status',
        header: 'Status'
    }
]

export default columns;