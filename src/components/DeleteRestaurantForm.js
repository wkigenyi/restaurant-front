

import {  Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useRestaurantsContext } from "../contexts/RestaurantContext";

export default function DeleteRestaurantForm({onClose,restaurant}){

  const {dispatch} = useRestaurantsContext()
  const [isSubmitting,setIsSubmitting] = useState(false);
  function handleDelete(e){
    e.preventDefault()
    setIsSubmitting(true);
    fetch(`/api/restaurants/${restaurant._id}`,{method:"DELETE"}).then(
      res => res.json().then(data => dispatch({type:"DELETE_RESTAURANT",payload:data})),
      error => console.log(error)
    )
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
          {`Delete restaurant: ${restaurant.name} ?`}
        </Typography>
        
      </Stack>
      
      
        <form
          noValidate
          onSubmit={handleDelete}
        >
          
          
          
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            color="error"
            disabled={isSubmitting}
            type="submit"
            variant="contained"
          >
            {isSubmitting? "Deleting .. , Please wait": "Delete This Restaurant"}
          </Button>
          <Button
            fullWidth
            disabled={isSubmitting}
            size="large"
            onClick={onClose}
            sx={{ mt: 3 }}
            color="secondary"
            
          >
            Cancel
          </Button>
          
        </form>
      
    </div>
  </Box>
</Box>
}