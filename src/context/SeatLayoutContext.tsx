import { UseFormReturn } from "react-hook-form"
import {screenLayoutFormSchemaType} from "@/app/admin/(authenticated)/screens/screen-layout-form-schema";
import React, {createContext, useContext} from "react";

type SeatLayoutContextType = {
    form: UseFormReturn<screenLayoutFormSchemaType>
    seatRows: string[]
    divisions: string[]
    activeDivision: number
    moveToNextStep: () => void
}

const SeatLayoutContext = createContext<SeatLayoutContextType | null>(null);

export const useSeatLayout = () => {
    const context = useContext(SeatLayoutContext)
    if(!context) {
        throw new Error('useSeatLayout must be used within SeatLayoutProvider')
    }

    return context
}

export const SeatLayoutProvider = (
    {children, value}: {children: React.ReactNode, value: SeatLayoutContextType}
) => {
    return (
        <SeatLayoutContext.Provider value={value}>
            {children}
        </SeatLayoutContext.Provider>
    )
}
