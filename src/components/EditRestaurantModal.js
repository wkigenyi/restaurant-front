import { Dialog } from "@mui/material";
import EditRestaurantForm from "./EditRestaurantForm";


export default function EditRestaurantModal({restaurant,onClose,open}){
    
    return (
        <Dialog open={open} fullWidth maxWidth="sm">
            <EditRestaurantForm onClose={onClose} restaurant={restaurant}/>
        </Dialog>
    );
}