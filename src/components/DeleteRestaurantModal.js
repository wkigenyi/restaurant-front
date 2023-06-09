import { Dialog } from "@mui/material";
import DeleteRestaurantForm from "./DeleteRestaurantForm";

export default function DeleteRestaurantModal({restaurant,onClose,open}){
    
    return (
        <Dialog open={open} fullWidth maxWidth="sm">
            <DeleteRestaurantForm onClose={onClose} restaurant={restaurant}/>
        </Dialog>
    );
}