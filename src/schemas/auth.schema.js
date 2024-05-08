import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error:'Username is Required',
    }),
    email: z.string({
        required_error: 'Email is Required',
    }).email({
        message: 'Invalid Email',
    }),
    password: z.string({
        required_error: 'Password is Required',
    })
    .min(6, {
        message: 'Password must be at least 6 characters',
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is Required',
    }).email({
        message: 'Invalid Email',
    }),
    password:z.string({
        required_error: 'Password is Required',
    }).min(6,{
        message: 'Password must be at least 6 characters',
    }),
})