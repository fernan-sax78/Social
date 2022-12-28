
import { Box } from "@mui/system"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AccountBox, Group, Home, ModeNight, Pages, Settings, Storefront } from "@mui/icons-material";
import { Switch } from "@mui/material";





function SideBar({setMode , mode}) {
  return (
    <Box flex={1} 
    p = {2} 
    sx = {{display : {xs : 'none', sm : 'block'}}}
    >
      <Box position='fixed'>
       <List>
          <ListItem disablePadding>
            <ListItemButton component = 'a' href = '#home'>
              <ListItemIcon>
              <Home /> 
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component = 'a' href = '#page'>
              <ListItemIcon>
              <Pages /> 
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component = 'a' href = '#group'>
              <ListItemIcon>
              <Group /> 
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component = 'a' href = '#market'>
              <ListItemIcon>
              <Storefront /> 
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component = 'a' href = '#friends'>
              <ListItemIcon>
              <Group /> 
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component = 'a' href = '#simple-list'>
              <ListItemIcon>
              <Settings /> 
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component = 'a' href = '#simple-list'>
              <ListItemIcon>
              < AccountBox/> 
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component = 'a' href = '#simple-list'>
              <ListItemIcon>
              <ModeNight/> 
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')}/>
            </ListItemButton>
          </ListItem> 

        </List>
     </Box>
    </Box>
  )
}

export default SideBar