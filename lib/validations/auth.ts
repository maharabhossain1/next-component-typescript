import * as z from "zod"

export const authSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z
        .string()
        .min(8, {
            message: "Password must be at least 8 characters long",
        })
        .max(100)
    ,
})

export const checkEmailSchema = z.object({
    email: authSchema.shape.email,
})


export const resetPasswordSchema = z
    .object({
        password: authSchema.shape.password,
        confirmPassword: authSchema.shape.password,
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    })