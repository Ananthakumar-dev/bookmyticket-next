import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import DataTable from "@/components/data-table";
import {columns} from "@/app/admin/(authenticated)/movies/columns";
import {Movie} from "@/app/admin/(authenticated)/movies/columns";

async function getData(): Promise<Movie[]> {
    return [
        {
            id: 1,
            title: "Leo",
            description: "Leo movie by thalapathy vijay",
            duration: 150,
            language: 'tamil',
            genre: 'commercial',
            certification: 'u',
            status: 'upcoming',
            release_date: new Date(2025, 7, 15),
        }
    ];
}

const Page = async () => {
    const data = await getData();

    return (
        <div className="container p-4 space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2>Movies</h2>
                    <p> Here you can manage all the movies config </p>
                </div>

                <div>
                    <Button variant="link">
                        <Link href="/admin/movies/add">
                            Add
                        </Link>
                    </Button>
                </div>
            </div>


            <DataTable columns={columns} data={data}/>
        </div>
    )
}
export default Page
