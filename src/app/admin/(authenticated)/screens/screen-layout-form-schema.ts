import { z } from "zod"

const sectionSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    section_number: z.number(),
    number_of_rows: z.number()
});

const columnSchema = z.object({
    section_id: z.number(),
    number_of_columns_for_the_section: z.number(),
    max_seats_that_filled_by_column: z.number()
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
    columns: z.array(columnSchema),
})

export type screenLayoutFormSchemaType = z.infer<typeof screenLayoutFormSchema>;

export default screenLayoutFormSchema;