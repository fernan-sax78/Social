
import {  
  Box, 
} from "@mui/material"
import Post from "./Post"


function Feed() {
  return (
    <Box flex={4}>
      
     <Post 
      title ='The Hamburger' 
      image= 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d' 
      color={'#d9534f'}
      sealing = {'L'}
      />
     <Post 
      title ='Relax Time' 
      image= 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c' 
      color={'#5bc0de'}
      sealing = {'M'}
      />
     <Post 
      title ='The Sport' 
      image= 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6'
      color={'#5cb85c'}
      sealing = {'Z'}
      />

    </Box>
  )
}

export default Feed