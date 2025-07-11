import React from 'react'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import SeatLayoutForm from "@/components/SeatLayout/Form";

const Layout = () => {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] rounded-lg border md:min-w-[450px]"
        >
            <ResizablePanel defaultSize={50}>
                <SeatLayoutForm
                    defaultValues={{
                        sections: [
                            {
                                id: 1,
                                name: '',
                                price: 0,
                                section_number: 1,
                                number_of_rows: 0,
                                number_of_columns_that_section_contains: 1,
                                columns: [
                                    {
                                        max_seats_that_column_contains: 2
                                    }
                                ]
                            }
                        ],
                    }}
                />
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Content</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
export default Layout
