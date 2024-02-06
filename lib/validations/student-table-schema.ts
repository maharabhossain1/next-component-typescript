import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const studentTableSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    programName: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    status: z.string(),
    action: z.string(),
})

export type studentTableSchema = z.infer<typeof studentTableSchema>