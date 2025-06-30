"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Theater = {
    id: number
    name: string
    city: string
    address: string
}

export const columns: ColumnDef<Theater>[] = [
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'city',
        header: 'City'
    },
    {
        accessorKey: 'address',
        header: 'Address'
    }
]