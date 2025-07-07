import React from 'react'
import {useFieldArray} from "react-hook-form";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ArrowRight, Plus, Trash} from "lucide-react";
import {useSeatLayout} from "@/context/SeatLayoutContext";

const Section = () => {
    const {form, moveToNextStep, activeDivision} = useSeatLayout();
    const {fields: sectionFields, append: sectionAppend, remove: sectionRemove} = useFieldArray({
        control: form.control,
        name: 'sections'
    })

    return (
        <>
            <div className={`space-y-2 p-4 ${activeDivision === 0 ? 'block' : 'hidden'}`}>
                {
                    sectionFields.map((el, index) => {
                        return (
                            <div key={el.id} className="space-y-2">
                                <h6>Section {index + 1}</h6>

                                <div className="pl-4">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <FormField
                                            control={form.control}
                                            name={`sections.${index}.name`}
                                            render={({field}) => (
                                                <FormItem className="min-w-[30%]">
                                                    <FormLabel>Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Section name" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name={`sections.${index}.section_number`}
                                            render={({field}) => (
                                                <FormItem className="min-w-[30%]">
                                                    <FormLabel>Section No</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" placeholder="Section No" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name={`sections.${index}.price`}
                                            render={({field}) => (
                                                <FormItem className="min-w-[30%]">
                                                    <FormLabel>Price</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" placeholder="Section price" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name={`sections.${index}.number_of_rows`}
                                            render={({field}) => (
                                                <FormItem className="min-w-[30%]">
                                                    <FormLabel>Number of rows</FormLabel>
                                                    <FormControl>
                                                        <Input type="number"
                                                               placeholder="Now of rows per section" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />

                                        {/*<FormField*/}
                                        {/*    control={form.control}*/}
                                        {/*    name={`sections.${index}.number_of_columns_for_the_section`}*/}
                                        {/*    render={({field}) => (*/}
                                        {/*        <FormItem className="min-w-[30%]">*/}
                                        {/*            <FormLabel>Number of columns that section contain</FormLabel>*/}
                                        {/*            <FormControl>*/}
                                        {/*                <Input type="number" placeholder="Section name" {...field} />*/}
                                        {/*            </FormControl>*/}
                                        {/*            <FormMessage/>*/}
                                        {/*        </FormItem>*/}
                                        {/*    )}*/}
                                        {/*/>*/}

                                        {/*<FormField*/}
                                        {/*    control={form.control}*/}
                                        {/*    name={`sections.${index}.max_seats_that_column_contains`}*/}
                                        {/*    render={({field}) => (*/}
                                        {/*        <FormItem className="min-w-[30%]">*/}
                                        {/*            <FormLabel>Maximum seats that column contains</FormLabel>*/}
                                        {/*            <FormControl>*/}
                                        {/*                <Input placeholder="Section name" {...field} />*/}
                                        {/*            </FormControl>*/}
                                        {/*            <FormMessage/>*/}
                                        {/*        </FormItem>*/}
                                        {/*    )}*/}
                                        {/*/>*/}

                                        <div>
                                            <h6>Columns Customization</h6>

                                            {
                                                el.columns.map((el, columnIndex) => {
                                                    return (
                                                        <div>
                                                            <p>Customize column for the section</p>
                                                            <FormField
                                                                control={form.control}
                                                                name={`sections.${index}.columns.${columnIndex}.number_of_columns_that_section_contains`}
                                                                render={({field}) => (
                                                                    <FormItem className="min-w-[30%]">
                                                                        <FormLabel>Name</FormLabel>
                                                                        <FormControl>
                                                                            <Input type="number"
                                                                                   placeholder="Section name" {...field} />
                                                                        </FormControl>
                                                                        <FormMessage/>
                                                                    </FormItem>
                                                                )}
                                                            />

                                                            <FormField
                                                                control={form.control}
                                                                name={`sections.${index}.columns.${columnIndex}.max_seats_that_column_contains`}
                                                                render={({field}) => (
                                                                    <FormItem className="min-w-[30%]">
                                                                        <FormLabel>Maximum seats that column contains</FormLabel>
                                                                        <FormControl>
                                                                            <Input type="number"
                                                                                   placeholder="Section name" {...field} />
                                                                        </FormControl>
                                                                        <FormMessage/>
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    {
                                        sectionFields.length === index + 1 && (
                                            <Button
                                                type="button"
                                                variant="link"
                                                onClick={() => sectionAppend({
                                                    id: index + 1,
                                                    name: '',
                                                    price: 0,
                                                    section_number: index + 2,
                                                    number_of_rows: 0,
                                                    columns: []
                                                })}
                                            >

                                                <Plus/>
                                            </Button>
                                        )
                                    }

                                    {
                                        index > 0 && (
                                            <Button
                                                type="button"
                                                variant="link"
                                                onClick={() => sectionRemove(index)}
                                            >
                                                <Trash/>
                                            </Button>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="text-right">
                <Button type="button" variant="link" onClick={moveToNextStep}>
                    Next
                    <ArrowRight />
                </Button>
            </div>
        </>
    )
}
export default Section
