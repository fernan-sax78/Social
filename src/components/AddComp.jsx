import { Add as AddIcon, Close, DateRange, EmojiEmotions, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { ModalStyle , ModalStyleCom, UserBoxPost} from '../style'

function AddComp() {

  const [modal , setModal] = useState(false)
  return (
    <>
    <Tooltip>
      <Fab 
      color='primary' 
      aria-label='add' 
      sx= {

        {position : 'fixed', 
        bottom : 20 , 
        left : 
        {xs : 'calc(50% - 25px)' , sm : 30}
        }
    } 
      onClick = {() => setModal(!modal)}
    >

        <AddIcon/>

      </Fab>

    </Tooltip>

          <Modal
        open={modal}
        
      >
        <ModalStyle>
          
              <Box 
          sx= {
                {
                  width : {xs : '90%' , sm : '600px'}, 
                  height : '300px',
                  borderRadius : '20px',
                  padding : '15px',
                  position : 'relative',
                  
              }
          
          }
          bgcolor={'background.default'} color = {'text.primary'}
          >
                <Close 
                onClick={() => setModal(false)} 
                sx = {
                  { 
                    right : 10, 
                    position : 'absolute', 
                    top : 8, 
                    cursor : 'pointer',
                    borderRadius : '100%',
                    width : '35px',
                    height : '35px',
                    padding : '5px',
                    transition : '.3s',
                    }
                  }
                />
                <ModalStyleCom>
                 <UserBoxPost>
              <Avatar src="https://material-ui.com/static/images/avatar/6.jpg"/>
              <Typography variant="h6" component="h2">
                Create Post
              </Typography>
                 </UserBoxPost>

                 <TextField
                 id='standard-multiline-static'
                 multiline
                 rows={3}
                 placeholder = "What's on your mind"
                 variant='standard'
                 sx={{width : '90%'}}
                 >

                 </TextField>
                 
              
                 <Stack direction='row' gap = {1} mt = {2} mb = {3}>
                  <EmojiEmotions color = 'primary'/>
                  {/* <Image color = 'secondary'/> */}
                  <VideoCameraBack color='success'/>
                  <PersonAdd color='error'/>
                 </Stack>
               
               <ButtonGroup variant='contained' aria-label='outlined primary button group' fullWidth>
                     <Button>Post</Button>
                     <Button  sx={{width : '100px'}}><DateRange/></Button>
               </ButtonGroup>

                </ModalStyleCom>
              </Box>
        
        </ModalStyle>
      </Modal>

</>
  )
}

export default AddComp