import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import { useState } from "react"
// import EditMenu from "./EditMenu";


const AddMenu = () => {
    const [open, setOpen] = useState<boolean>(false);
    // const[SelectedMenu,setSelectedMenu]=useState<any>();
    const loading = false;
    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="flex justify-between">
                <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">Available Menus</h1>


                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger>
                        <Button className="bg-orange-400 hover:bg-orange-500">
                            <Plus className="mr-2" />
                            Add Menus
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Add a new menu
                            </DialogTitle>
                            <DialogDescription>
                                Create a menu that will make your restaurant stand out.
                            </DialogDescription>
                        </DialogHeader>
                        <form action="" className="space-y-4">
                            <div>
                                <Label>Name</Label>
                                <Input type="text" name="name" placeholder="Enter menu name" />

                            </div>
                            <div>
                                <Label>Description</Label>
                                <Input type="text" name="description" placeholder="Enter menu description" />

                            </div>
                            <div>
                                <Label>Price in (Rupees)</Label>
                                <Input type="text" name="price" placeholder="Enter menu price" />

                            </div>
                            <div>
                                <Label>Upload Menu Image</Label>
                                <Input type="file" name="image" placeholder="Enter menu name" />

                            </div>
                            <DialogFooter className="mt-5">
                                {loading ? (
                                    <Button disabled className="bg-orange-500 hover:bg-orange-500">
                                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                        Please wait
                                    </Button>
                                ) : (
                                    <Button className="bg-orange-500 hover:bg-orange-500">
                                        Submit
                                    </Button>
                                )}
                            </DialogFooter>

                        </form>
                    </DialogContent>

                </Dialog>
            </div>
            <div className="mt-6 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
                    <img src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=" alt=""
                    className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
                    />
                    <div className="flex-1">
                        <h1 className="text-lg font-semibold text-gray-700">Biryani</h1>
                        <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quasi odio reprehenderit. Cumque sapiente consequuntur incidunt sit quam dolorum, error fuga, ratione quod rem quaerat repellendus aliquam illo impedit voluptas.</p>
                        <h2 className="text-md font-semibold mt-2">
                            Price:<span className="text-[#D19254]">80</span>
                        </h2>
                    </div>
                    <Button size={'sm'} className="bg-orange-500 hover:bg-orange-500 mt-2">Edit</Button>
                </div>

            </div>
            {/* <EditMenu selectedMenu ={selectedMenu}/> */}


        </div>
    )
}

export default AddMenu
