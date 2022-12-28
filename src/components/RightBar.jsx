import { Avatar, 
  AvatarGroup, 
  Box, 
  ImageList, 
  ImageListItem, 
  Typography 
} from "@mui/material"
import AlignItemsList from './Conversation'

function RightBar() {
  return (
    <Box flex={2}
     p = {2}
     sx = {{display : {xs : 'none', sm : 'block'}}} 
     >
   <Box position='fixed' width={500}>
    <Typography variant="h6" fontWeight={200}>
      Online Friends
    </Typography>
      <AvatarGroup max={6}>
        <Avatar alt="Peter Adams" src="https://material-ui.com/static/images/avatar/1.jpg"/>
        <Avatar alt="Albert Jhonson" src="https://material-ui.com/static/images/avatar/2.jpg"/>
        <Avatar alt="Mary Gonzales" src="https://material-ui.com/static/images/avatar/3.jpg"/>
        <Avatar alt="Jeremy Irons" src="https://material-ui.com/static/images/avatar/4.jpg"/>
        <Avatar alt="Tony Stark" src="https://material-ui.com/static/images/avatar/5.jpg"/>
        <Avatar alt="Dr Strange" src="https://material-ui.com/static/images/avatar/6.jpg"/>
        <Avatar alt="Thor" src="https://material-ui.com/static/images/avatar/7.jpg"/>
        <Avatar alt="Josephin Estrada" src="https://material-ui.com/static/images/avatar/8.jpg"/>
      </AvatarGroup>
      <Typography variant="h6" fontWeight={200} mt = {2} mb = {2}>
        Latest Photo
      </Typography>
      <ImageList cols={3} rowHeight = {200} gap = {5}>
        <ImageListItem>
          <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' alt="" />
        </ImageListItem>

        <ImageListItem>
          <img src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d' alt="" />
        </ImageListItem>

        <ImageListItem>
          <img src='https://images.unsplash.com/photo-1522770179533-24471fcdba45' alt="" />
        </ImageListItem>

        <ImageListItem>
          <img src= 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c' alt="" />
        </ImageListItem>

        <ImageListItem>
          <img src= 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62' alt="" />
        </ImageListItem>

        <ImageListItem>
          <img src= 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6' alt="" />
        </ImageListItem>
      </ImageList>

  <Typography variant="h6" fontWeight={200} mt = {2}>
    Latest Conversation
  </Typography>
   <AlignItemsList/>
   </Box>
    </Box>
  )
}

export default RightBar