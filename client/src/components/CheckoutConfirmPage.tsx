import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CheckoutConfirmPage = ({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
        city: "",
        country: ""
    });

    const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value
        }));
    };

    const checkoutHandler=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        console.log(input);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogTitle>Review your order</DialogTitle>
                <DialogDescription className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laboriosam excepturi at accusantium, voluptatibus soluta ipsam eaque blanditiis dolores molestias architecto illum nam et ducimus enim maiores facilis tempore unde.
                </DialogDescription>
                <form onSubmit={checkoutHandler} className="md:grid grid-cols-2 gap-2 space-y-1 md:space-y-0">
                    <div >
                        <div>
                            <Label htmlFor="name">Fullname</Label>
                            <Input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={input.name} 
                                onChange={changeEventHandler} 
                            />
                        </div>
                        <div>
                            <Label>Email</Label>
                            <Input 
                                type="email" 
                               
                                name="email" 
                                value={input.email} 
                                onChange={changeEventHandler} 
                            />
                        </div>
                        <div>
                            <Label >Contact</Label>
                            <Input 
                                type="text" 
                               
                                name="contact" 
                                value={input.contact} 
                                onChange={changeEventHandler} 
                            />
                        </div>
                        <div>
                            <Label >Address</Label>
                            <Input 
                                type="text" 
                             
                                name="address" 
                                value={input.address} 
                                onChange={changeEventHandler} 
                            />
                        </div>
                        <div>
                            <Label >City</Label>
                            <Input 
                                type="text" 
                                id="city" 
                                name="city" 
                                value={input.city} 
                                onChange={changeEventHandler} 
                            />
                        </div>
                        <div>
                            <Label >Country</Label>
                            <Input 
                                type="text" 
                               
                                name="name" 
                                value={input.country} 
                                onChange={changeEventHandler} 
                            />
                        </div>
                    </div>
                   
            <DialogFooter className="col-span-2 pt-5">
                <Button className="bg-orange-500 hover:bg-orange-500">Continue to payment</Button>
            </DialogFooter>
                </form>
                </DialogContent>
           
        </Dialog>
    );
}

export default CheckoutConfirmPage;
