import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Add, Restaurant } from '@mui/icons-material';
import EditRestaurantModal from './EditRestaurantModal';

export default function ButtonAppBar() {
    const [isModalOpen,setModalOpen] = React.useState(false);
    const handleAddNew = () =>{
        setModalOpen(true)
    }
    const handleClose = () =>{
        setModalOpen(false)
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Restaurant />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Restaurants
          </Typography>
          <Button color="inherit" startIcon={<Add/>} title='Add A New Restaurant' onClick={handleAddNew}>Add New</Button>
        </Toolbar>
      </AppBar>
    <EditRestaurantModal open={isModalOpen} onClose={handleClose}/>
    </Box>
  );
}