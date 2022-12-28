import {  Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import { 
  Avatar,
  Card, 
  CardActions, 
  CardContent, 
  CardHeader, 
  CardMedia, 
  Checkbox, 
  IconButton, 
  Typography 
} from "@mui/material"



function Post({
  image , 
  title , 
  color , 
  sealing}
  ) {

  return (
     <Card sx={{margin : {xs : 'none' , sm : 5}, marginBottom : {xs : 2 , sm : 'none'}}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: color }} aria-label="recipe">
            {sealing}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title= {title}
        subheader="December 26, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image= {image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Harum iste deserunt cumque veniam, vero velit nisi culpa fuga provident dignissimos vel deleniti?
            Commodi fugiat rem natus ratione explicabo minus temporibus!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox  icon={<FavoriteBorder />} checkedIcon ={<Favorite sx={{color : '#d9534f'}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    
  )
}

export default Post