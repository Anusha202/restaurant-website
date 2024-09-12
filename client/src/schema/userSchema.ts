import {z} from "zod";

export const userSignupSchema=z.object({
    fullname:z.string().min(1,"fullname is required"),
    email:z.string().email("invalid email address"),
    password:z.string().min(6,"password must be atleast 6 characters"),
    contact:z.string().min(10,"contact must be at least 10 digits")
});

export type SignupInputState=z.infer<typeof userSignupSchema>;




export const userLoginSchema=z.object({
    email:z.string().email("invalid email address"),
    password:z.string().min(6,"password must be atleast 6 characters"),
    
});
export type LoginInputState=z.infer<typeof userLoginSchema>;

