import React from 'react'
import ScreenForm from "@/app/admin/(authenticated)/screens/form";

const Page = () => {
    return (
        <div className="container p-4 space-y-4">
            <div>
                <h2>Add Screen</h2>
                <p> Here add new screen for theater. you can add multiple screens for each theater </p>
            </div>

            <ScreenForm
                defaultValues={{
                    name: '',
                    order: 0,
                    formats: [
                        {
                            format: '',
                            custom_format: false,
                            custom_format_name: ''
                        }
                    ],
                    status: ''
                }}
            />
        </div>
    )
}
export default Page
