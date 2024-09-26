import { create } from "zustand";
import axios from "axios";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "sonner";

const API_END_POINT = "http://localhost:8000/api/v1/restaurant";
axios.defaults.withCredentials = true;

export const useRestaurantStore = create()(persist((set) => ({
    loading: false,
    createRestaurant: async (formData: FormData) => {
        try {
            set({ loading: true });
            const response = await axios.post(`${API_END_POINT}`,formData,{
               headers:{
                'Content-Type':'multipart/form-data'
               } 
            });
            if(response.data.success){
                toast.success(response.data.message);
                set({loading:false});
            }

        } catch (error) {

        }
    }
}), {
    name: 'restaurant-name',
    storage: createJSONStorage(() => localStorage)
}

))