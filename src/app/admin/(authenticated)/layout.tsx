import React from 'react'
import AppSidebar from "@/app/admin/_components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar"
import Header from "@/app/admin/_components/Header";

const Layout = (
    {children}: {children: React.ReactNode}
) => {
    return (
        <SidebarProvider>
            <AppSidebar />

            <main className="flex-grow-1 w-4/5">
                <Header />

                {children}
            </main>
        </SidebarProvider>
    )
}
export default Layout
