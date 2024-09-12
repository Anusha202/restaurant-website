import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Link, Loader2, Mail } from "lucide-react"
import { useState } from "react"


const ForgotPassword = () => {
    const [email,setEmail]=useState<string>("");
    const loading=false;
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
<div className="text-center">
    <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
    <p className="text-sm text-gray-400">Enter your email yo reset your password</p>
</div>
<div className="relative w-full">
    <Input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter email " className="pl-10"/>
    <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none"/>
</div>
{
    loading ?(
      <Button disabled className="bg-orange-500"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>
    ):(
      <Button className="bg-orange-500 hover:bg-orange-400">Send reset link</Button>
    )

}

<span className="text-center">
  Back to{" "}
  <Link to="/login" className="text-blue-400">Login</Link>
</span>
      </form>
    </div>
  )
}

export default ForgotPassword
