import {z} from "zod";

export const restaurantFromSchema =z.object({
    restaurantName:z.string().nonempty({message:"Restaurant name is required"}),
        city:z.string().nonempty({message:"Country is required"}),
        country:z.string().nonempty({message:"Country is required"}),
        deliveryTime:z.number().min(0,{message:"Delivery time cant be negative"}),
        cuisines:z.array(z.string()),
        imageFile:z.instanceof(File).optional().refine((file)=>file?.size !=0,{message:"Image is required"})

    
});

export type restaurantFromSchema=z.infer<typeof restaurantFromSchema>;