
import { Image } from "@mui/icons-material";
import {  Box, Button, Stack, TextField, Typography } from "@mui/material";


import { useState } from "react";
import { useRestaurantsContext } from "../contexts/RestaurantContext";

export default function EditRestaurantForm({onClose,restaurant}){

  const [errors,setErrors] = useState(null)
  const [changes,setChanges] = useState({})  
  const [isSubmitting,setIsSubmitting] = useState(false);
  const {dispatch} = useRestaurantsContext();

  function addRestaurantData(){
    setIsSubmitting(true);
    
    if(changes.image){
        fetch(`/api/restaurants/`,
        {
            method:"POST", 
            body:JSON.stringify(changes),
            headers:{"Content-Type":"application/json"}
        }).then(
            res => res.json().then(data => {dispatch({payload:data,type:"CREATE_RESTAURANT"}); onClose()}),
            error => {setErrors(error); console.log(error); onClose()}
        )
    }
    
  }

  function updateRestaurant(){
    setIsSubmitting(true);
    fetch(`/api/restaurants/${restaurant._id}`,
    {
        method:"PATCH", 
        body:JSON.stringify(changes),
        headers:{"Content-Type":"application/json"}
    }).then(
        res => res.json().then(data => {dispatch({payload:data,type:"UPDATE_RESTAURANT"}); onClose()}),
        error => {setErrors(error); console.log(error); onClose()}
    )
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(restaurant){
        updateRestaurant()
    }else{
        addRestaurantData()
    }

  }

  
  return <Box
  sx={{
    backgroundColor: 'background.paper',
    flex: '1 1 auto',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }}
>
  <Box
    sx={{
      maxWidth: 550,
      px: 2,
      py: '50px',
      width: '100%'
    }}
  >
    <div>
      <Stack
        spacing={1}
        sx={{ mb: 2 }}
      >
        <Typography variant="h4">
          {restaurant ? "Edit Restaurant": "Add Restaurant"}
        </Typography>
        
      </Stack>
      
      
        <form
          
          onSubmit={handleSubmit}
        >
          <Stack spacing={3}>
            <TextField
              
              fullWidth
              label="Restaurant Name"
              name="name"
              required
              onChange={(e) =>setChanges({...changes,name: e.target.value})}
              value={restaurant ? changes.name || restaurant.name : changes.name?changes.name : "" }
              
            />
            <TextField
              fullWidth
              label="Location"
              name="location"
              required
              onChange={(e) =>setChanges({...changes,location: e.target.value})}
              value={restaurant ? changes.location || restaurant.location : changes.location?changes.location : "" }
              
            />
            <TextField
              fullWidth
              label="Cuisine"
              name="cuisine"
              required
              onChange={(e) =>setChanges({...changes,cuisine: e.target.value})}
              value={restaurant ? changes.cuisine || restaurant.cuisine : changes.cuisine?changes.cuisine : "" }
            />
            <Button variant="outlined" size="large" component="label" startIcon={<Image/>}>
                <input 
                type="file" 
                hidden 
                accept="image/*" 
                name="image" 
                onChange={(e) => {
                    if(e.target.files[0]){
                        setChanges({...changes,image: e.target.files[0].name})
                    }
                }}/> Browse for image
            </Button>
            
            
          </Stack>
          
          {errors && (
            <Typography
              color="error"
              sx={{ mt: 3 }}
              variant="body2"
            >
              {errors.message}
            </Typography>
          )}
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            disabled={isSubmitting }
            type="submit"
            variant="contained"
          >
            {isSubmitting? "Updating Data .. , Please wait": restaurant? "Update Restaurant":"Add New Restaurant"}
          </Button>
          <Button
            fullWidth
            disabled={isSubmitting }
            size="large"
            onClick={onClose}
            sx={{ mt: 3 }}
            color="error"
            
          >
            Cancel
          </Button>
          
        </form>
      
    </div>
  </Box>
</Box>
}