"use client"

import React from 'react'
import TheatreForm from "@/app/admin/(authenticated)/theaters/form";

const Page = () => {
    return (
        <div className="container p-4 space-y-4">
            <div>
                <h2>Add Theater</h2>
                <p> Here add new theater config </p>
            </div>

            <TheatreForm
                defaultValues={
                    { name: '', description: '', city: '', address: '', phone: '', email: '', latitude: null, longitude: null }
                }
            />
        </div>
    )
}
export default Page
