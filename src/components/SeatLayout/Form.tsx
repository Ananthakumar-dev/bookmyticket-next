import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {
    Form
} from "@/components/ui/form"

import { Separator } from "@/components/ui/separator"

import screenLayoutFormSchema, {screenLayoutFormSchemaType} from "@/app/admin/(authenticated)/screens/screen-layout-form-schema";
import Section from "@/components/SeatLayout/Section";
import {SeatLayoutProvider} from "@/context/SeatLayoutContext";

const seatRows = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',' M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z' ];
const divisions = ['sections', 'columns', 'rows'];
const SeatLayoutForm = (
    {defaultValues}: {defaultValues: screenLayoutFormSchemaType}
) => {
    const [ activeDivision, setActiveDivision ] = useState(0);
    const form = useForm<screenLayoutFormSchemaType>({
        resolver: zodResolver(screenLayoutFormSchema),
        defaultValues: defaultValues
    })

    const onSubmit = (defaultValues: screenLayoutFormSchemaType) => {
        console.log(defaultValues)
    }

    const moveToNextStep = () => {
        setActiveDivision((division) => division + 1);
    }

    return (
        <SeatLayoutProvider value={{ form, seatRows, divisions, activeDivision, moveToNextStep }}>
            <div className="p-4 h-full overflow-y-auto relative">
                <div className="flex items-center justify-between text-sm">
                    {
                        divisions.map((el, index) => (
                            <div className={`flex items-center gap-1 ${activeDivision === index ? 'active' : ''}`} key={el} onClick={() => setActiveDivision(index)}>
                                <span className="p-2 border rounded-full text-capitalize">{index + 1}</span>
                                {el}

                                {index+1 !== divisions.length && (
                                    <Separator orientation="vertical" />
                                )}
                            </div>
                        ))
                    }
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <Section />
                    </form>
                </Form>
            </div>
        </SeatLayoutProvider>
    )
}
export default SeatLayoutForm
