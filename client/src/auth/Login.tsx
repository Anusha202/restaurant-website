import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Loader, Loader2, LockKeyhole, Mail } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";

// type loginInputState={
//     email:string;
//     password:string;
    
// }
const Login = () => {
    const [input,setInput]=useState<LoginInputState>({
        email:"",
        password:"",
    });
    const [errors,setErrors]=useState<Partial<LoginInputState>>({});
    const changeEventHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;
        setInput({...input,[name]:value});
    }

    const loginSubmitHandler =(e:FormEvent)=>{
        e.preventDefault();//no page refreshing
        const result=userLoginSchema.safeParse(input);
        if(!result.success){
            const fieldErrors=result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<LoginInputState>);
            return;
        }
        console.log(input);
    }

    const loading =false;


    return (
        <div className="flex items-center justify-center h-screen min-h-screen">
            <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md md:border border-gray-200 rounded-lg mx-4">

                <div className="mb-4">
                    <h1 className="font-bold text-2xl">Anusha Eats</h1>
                </div>
                <div className="mb-4">

                    <div className="relative">
                        <Input type="email" placeholder="Email" name="email" value={input.email} onChange={changeEventHandler}className="pl-10 focus-visible:ring-0   " />
                        <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" /> {
        errors && <span className="text-sm text-red-500">{errors.email}</span>
    }
                    </div>


                </div>


                <div>
                    <div className="relative">
                        <Input type="password" placeholder="Password" name="password" value={input.password} onChange={changeEventHandler} className="pl-10 focus-visible:ring-0   " />
                        <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" /> {
        errors && <span className="text-sm text-red-500">{errors.password}</span>
    }
                    </div>
                </div>


                <div className="mt-4">
                    {
                        loading ?(

                         <Button  disabled className="w-full bg-orange-500 hover:bg-hoverOrange">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait</Button>

                        ):(
                            <Button type="submit" className="w-full bg-orange-300 hover:bg-hoverOrange">Login</Button>

                        )}
                        <div className="mt-4 text-blue-500">
                        <Link to="/forgot-password" className="hover:text-blue-500 hover:underline">Forgot Password</Link>
                        </div>
                   
                </div>

                <Separator/>
                <p className="mt-2">Don't have account?{" "}
                <Link to="/signup" className="text-blue-500">Signup</Link>
                </p>






            </form>
        </div>
    )
}

export default Login;