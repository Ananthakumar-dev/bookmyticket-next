import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import DataTable from "@/components/data-table";
import {columns} from "@/app/admin/(authenticated)/screens/columns";
import {Screen} from "@/app/admin/(authenticated)/screens/columns";

async function getData(): Promise<Screen[]> {
    return [
        {
            id: 1,
            name: "Screen 1",
            type: "IMAX",
            total_seats: 150,
            status: 'active',
        }
    ];
}

const Page = async () => {
    const data = await getData();

    return (
        <div className="container p-4 space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h2>Screens</h2>
                    <p> Here you can manage all the screens config for the particular theater </p>
                </div>

                <div>
                    <Button variant="link">
                        <Link href="/admin/screens/add">
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
