import { z } from "zod"

const columnSchema = z.object({
    max_seats_that_column_contains: z.number()
});

const sectionSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    section_number: z.number(),
    number_of_rows: z.number(),
    number_of_columns_that_section_contains: z.number(),
    columns: z.array(columnSchema)
});

const rowSchema = z.object({
    section_id: z.number(),
    column_id: z.number(),
    starting_row_value: z.string(), // like "A"
    ending_row_value: z.string(), // like "Z"
    number_of_seats: z.number(),
})

const screenLayoutFormSchema = z.object({
    sections: z.array(sectionSchema),
})

export type screenLayoutFormSchemaType = z.infer<typeof screenLayoutFormSchema>;

export default screenLayoutFormSchema;