import { Delete, Edit, ExpandLess, Restaurant } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography, styled } from "@mui/material";
import { useState } from "react";
import DeleteRestaurantModal from "./DeleteRestaurantModal";
import EditRestaurantModal from "./EditRestaurantModal";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
 
  

export default function RestaurantCard({restaurant}) {
    const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [isModalOpen,setModalOpen] = useState(false);
    const handleClose = () =>{
        setModalOpen(false)
    }
    const handleOpenDeleteModal = () =>{
        setModalOpen(true)
    }

    const [isEditModalOpen,setEditModalOpen] = useState(false);
    const handleCloseEdit = () =>{
        setEditModalOpen(false)
    }
    const handleOpenEditModal = () =>{
        setEditModalOpen(true)
    }
  
    return (
    <>
      <Card >
        <CardHeader
          title={restaurant.name}
          subheader={restaurant.location}
          avatar={<Avatar><Restaurant/></Avatar>}
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/restaurant.avif"
          alt="Restaurant Picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {restaurant.cuisine}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Edit This Restaurant" title="Edit this Restaurant" color="secondary" onClick={handleOpenEditModal}>
            <Edit />
          </IconButton>
          <IconButton aria-label="Delete This Restaurant" title="Delete This Restaurant" color="error" onClick={handleOpenDeleteModal}>
            <Delete />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show Menu"
            title ="Show Menu"
          >
            <ExpandLess />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Menu:</Typography>
            <Typography paragraph>
              Menu will appear hear
            </Typography>
            
          </CardContent>
        </Collapse>
      </Card>
      <DeleteRestaurantModal restaurant={restaurant} open={isModalOpen} onClose={handleClose}/>
      <EditRestaurantModal open={isEditModalOpen} onClose={handleCloseEdit} restaurant={restaurant}/>
      </>
    );
  }