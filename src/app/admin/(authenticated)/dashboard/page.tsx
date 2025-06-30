import React from 'react'
import {Flower, Heart, Pin, Ticket} from "lucide-react";

const Page = () => {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="border rounded-md p-4 flex items-center justify-between min-w-[300px]">
                <div>
                    <p className="text-red-500 text-xl">122</p>
                    <p>Total movies</p>
                </div>
                <span className="rounded-full p-1">
                    <Flower size={14}/>
                </span>
            </div>

            <div className="border rounded-md p-4 flex items-center justify-between min-w-[300px]">
                <div>
                    <p className="text-red-500 text-xl">9M</p>
                    <p>Sold Tickets</p>
                </div>
                <span className="rounded-full p-1">
                    <Ticket size={14}/>
                </span>
            </div>

            <div className="border rounded-md p-4 flex items-center justify-between min-w-[300px]">
                <div>
                    <p className="text-red-500 text-xl">45</p>
                    <p>Venues</p>
                </div>
                <span className="rounded-full p-1">
                    <Pin size={14}/>
                </span>
            </div>

            <div className="border rounded-md p-4 flex items-center justify-between min-w-[300px]">
                <div>
                    <p className="text-red-500 text-xl">23M</p>
                    <p>Likes</p>
                </div>
                <span className="rounded-full p-1">
                    <Heart size={14}/>
                </span>
            </div>
        </div>
    )
}
export default Page
