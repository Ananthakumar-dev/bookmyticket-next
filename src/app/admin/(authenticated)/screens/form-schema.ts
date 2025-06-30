import { z } from "zod"

const screenSchema = z.object({
    name: z.string(),
    type: z.string(),
    total_seats: z.number(),
    status: z.string()
})

export type screenSchemaType = z.infer<typeof screenSchema>
export default screenSchema