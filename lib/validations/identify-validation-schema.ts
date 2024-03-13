import { z } from "zod";

export const identifyValidationSchema = z.object({
    first_name: z.string().min(1, {
        message: "Please enter your First name.",
    }),
    middle_name: z.string().optional(),
    last_name: z.string().min(1, {
        message: "Please enter your  Last name.",
    }),

    ssn: z.string().length(9, {
        message: 'Social Security Number must be 9 digits',
    }),
    confirm_ssn: z.string(),

    day: z.string().min(1, {
        message: 'Day is required',
    }).refine(value => {
        const day = Number(value);
        return !isNaN(day) && day >= 1 && day <= 31;
    }, {
        message: 'Invalid day'
    }),
    month: z.string().min(1, {
        message: 'Month is required',
    }).refine(value => {
        const month = Number(value);
        return !isNaN(month) && month >= 1 && month <= 12;
    }, {
        message: 'Invalid month'
    }),
    year: z.string().min(1, {
        message: 'Year is required',
    }).refine(value => {
        const year = Number(value);
        return !isNaN(year);
    }, {
        message: 'Invalid month'
    }),

    address: z.string().min(1, {
        message: 'Address is required',
    }),

    city: z.string().min(1, {
        message: 'City is required',
    }),
    state: z.string(),
    zip_code: z.string()
}).refine((data) => data.ssn === data.confirm_ssn, {
    message: 'SSNs do not match',
    path: ['confirm_ssn']
})