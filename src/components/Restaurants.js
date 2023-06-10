import { Box, Grid } from "@mui/material";
import RestaurantCard from "./Restaurant";
import { useEffect } from "react";
import { useRestaurantsContext } from "../contexts/RestaurantContext";

export default function Restaurants(){
    const {restaurants,dispatch} = useRestaurantsContext()
    

    useEffect(()=>{
        fetch("/api/restaurants").then(
            response => response.json().then(data => {
                if(response.ok){
                    dispatch({type:'SET_RESTAURANTS',payload:data})
                }
                
            }),
            error => console.log(error)
        )
    },[dispatch])

    return (
        <Box padding={3}>
      <Grid container spacing={3}>
        {(restaurants || []).map((a,i) => <Grid item key={i} lg={3} sm={12}>
          <RestaurantCard restaurant={a}/>
        </Grid>)}
        
      </Grid>
      </Box>
    );
}