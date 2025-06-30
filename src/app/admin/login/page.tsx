import React from 'react'
import {LoginForm} from "@/app/admin/_components/LoginForm";

const Page = () => {
    return (
        <div className="flex items-center min-h-screen w-full">
            {/* Left side */}
            <div className="w-1/2">
                <h1>Test</h1>
            </div>

            {/*Right side form*/}
            <div className="w-1/2 h-full flex flex-col gap-2">
                <h1 className="text-3xl">
                    Unleash the magic of movies
                </h1>

                <p>Enter the login details below to access</p>

                <LoginForm />
            </div>
        </div>
    )
}
export default Page
