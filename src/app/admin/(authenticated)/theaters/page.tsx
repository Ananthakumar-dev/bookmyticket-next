import React from 'react'
import DataTable from "@/components/data-table";
import {columns, Theater} from "@/app/admin/(authenticated)/theaters/columns";
import Link from "next/link";
import {Button} from "@/components/ui/button";

async function getData(): Promise<Theater[]> {
    return [
        {
            id: 1,
            name: 'Vetri Cinemas',
            city: 'Madurai',
            address: 'Villapuram'
        }
    ];
}

const Page = async () => {
    const data = await getData();

    return (
        <div className="container p-4 space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2>Theaters</h2>
                    <p> Here you can manage all the theaters config </p>
                </div>

                <div>
                    <Button variant="link">
                        <Link href="/admin/theaters/add">
                            Add
                        </Link>
                    </Button>
                </div>
            </div>


            <DataTable columns={columns} data={data} />
        </div>
    )
}
export default Page
