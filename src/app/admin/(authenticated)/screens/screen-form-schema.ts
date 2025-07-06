import { z } from "zod"
import special_formats from "@/_lib/special_formats";

const spformats = special_formats.map(el => el.value);

const specialFormatsSchema = z.object({
    format: z.string()
        .refine(val => spformats.includes(val), {
            message: 'Invalid special formats'
        }),
    custom_format: z.boolean(),
    custom_format_name: z.string().optional()
});

const screenSchema = z.object({
    name: z.string(),
    order: z.number(),
    formats: z.array(specialFormatsSchema).min(1, 'Atleast one format is required'),
    status: z.string()
})

export type screenSchemaType = z.infer<typeof screenSchema>
export default screenSchema