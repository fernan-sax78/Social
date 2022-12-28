import { Mail,Notifications , Facebook , Search} from "@mui/icons-material"
import { AppBar, Badge, InputBase, Typography } from "@mui/material"
import { SearchDiv, StyledToolBar,Icons, UserBox } from "../style"
import UnstyledMenuSimple from './Menu'

function NavBar() {
  return (

    <AppBar position="sticky">
        
          <StyledToolBar>
             <Typography variant="h6" sx={{display : {xs : 'none' , sm : 'block'}}}>Facebook Clone</Typography>
             <Facebook sx = {{display : {xs : 'block' , sm : 'none'}, fontSize : '2.5rem'}}/>
             <SearchDiv><InputBase placeholder="search..." sx={{width : '80%'}}/> <Search sx={{color : '#000'}}/></SearchDiv>
            
             <Icons>
                <Badge badgeContent = {4} color = 'error'>
                    <Mail/>
                </Badge>
                  <Badge badgeContent = {2} color = 'error'>
                    <Notifications/>
                </Badge>
                 <UnstyledMenuSimple/> 
             </Icons>

             <UserBox>
               <UnstyledMenuSimple/> 
              <Typography variant="span">John</Typography>
             </UserBox>
            
          </StyledToolBar>
           
    </AppBar>

  )
}

export default NavBar