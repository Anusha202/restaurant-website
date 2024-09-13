import { Lamp,  Loader2, Menu, Moon, ShoppingCart, Sun } from "lucide-react"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

import { Label } from "./ui/label"; // Adjust the path according to your project structure

import { Input } from "./ui/input";
import { Link } from "react-router-dom";


const Navbar = () => {
    const admin = true;
    const loading=false;
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-14">
                <Link to="/">
                    <h1 className="font-bold md:font-extrabold text-2xl">Anusha Eats</h1>
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/order/status">Order</Link>
                    </div>
                    {
                        admin && (
                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger>
                                        Dashboard
                                    </MenubarTrigger>
                                    <MenubarContent>
                                        <Link to="/admin/restaurant"><MenubarItem>Restaurant</MenubarItem></Link>
                                        <Link to="/admin/menu"><MenubarItem>Menu</MenubarItem></Link>
                                        <Link to="/admin/orders"><MenubarItem>Order</MenubarItem></Link>
                                    </MenubarContent>


                                </MenubarMenu>

                            </Menubar>

                        )
                    }
                </div>
                <div className="flex items-center-gap-5">
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem >
                                Dark
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Link to="/cart" className="relative cursor-pointer">
                    <ShoppingCart/>
                    <Button size={'icon'} className="absolute-inset-y-3 left-2 text-xs rounded-full h-4 w-4 bg-red-500 hover:bg-red-500"></Button>
                    </Link>
            </div>
            <Avatar>
                <AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                </AvatarImage>
            </Avatar>
        </div>
        <div>{
            loading ?(
<Button className="bg-orange-400 hover:bg-orange-400">
<Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait
</Button>
            ):(
                <Button className="bg-orange-500 hover:bg-orange-500">Logout</Button>
            )
            }
            
        </div>
        <div className="md:hidden lg:hidden">
          
            <MobileNavbar/>

        </div>
        </div>
        

    );
};

export default Navbar;

const MobileNavbar=()=>{
    return(
        <Sheet>
      <SheetTrigger asChild>
        <Button  size={'icon'} className="rounded-full bg-gray-200 text-black hover:bg-gray-300">
            <Menu/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
            {/* {
                user ?(
                   <>
                   <div className="flex flex-row items-center gap-2">
                    <Avatar>
                        <AvatarImage/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                   </div>
                   </> 
                ):(

                    <Button>logout</Button>
                )
            } */}
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    )
}
