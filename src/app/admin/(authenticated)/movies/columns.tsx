"use client"

import { ColumnDef } from "@tanstack/react-table";

export type Movie = {
    id: number;
    title: string;
    description: string;
    duration: number; // in minutes
    language: string;
    genre: string;
    certification: string; // like U/A, A, PG
    status: string; // upcoming/ now showing/ expired
    release_date: Date;
}

export const columns: ColumnDef<Movie>[] = [
    {
        accessorKey: "id",
        header: 'Id'
    },
    {
        accessorKey: "title",
        header: 'Title'
    },
    {
        accessorKey: "description",
        header: 'Description'
    },
    {
        accessorKey: "duration",
        header: 'Duration'
    },
    {
        accessorKey: "language",
        header: 'Language'
    },
    {
        accessorKey: "genre",
        header: 'Genre'
    },
    {
        accessorKey: "certification",
        header: 'Certification'
    },
    {
        accessorKey: "status",
        header: 'Status'
    },
    {
        accessorKey: "release_date",
        header: 'Release Date'
    },
]

export default columns;