import React, { useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import StoreIcon from '@mui/icons-material/Store';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { clearUserDetails,selectUserDetails } from '../component/auth/userSlice';



export default function Topnavbar() {



 const userDetails = useSelector((state) => {
  if (state && state.user && state.user.userDetails) {
    return state.user.userDetails.username;
  }
  return null; // or a default value as needed
});


 const loginuser = localStorage.getItem('login_username') || "logout";
  
   
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const my_pages = [ 'Solutions' , 'Products', 'ghg'];
    const my_settings = [ userDetails || loginuser,'Logout'];

    const [anchorElUser, setAnchorElUser] = useState(null);
    // const [username, setUsername] = useState([]);


 

    const handleOpenSettingsMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

   

    const handleCloseSettingsMenu = () => {
      setAnchorElUser(null);
    };


    // useEffect(() => {
    //   setUsername(userDetails);
    // });


    console.log(userDetails);


   const setLogot = async(e) => { 
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/logout');
      dispatch(clearUserDetails());
      console.log('User Logout', response.data);
      localStorage.removeItem('login_username');
      navigate('/');
    } catch (error) {
      console.error(error.error);
      // Handle unexpected errors, e.g., network issues
    }
   }

  
  


  // Parse the JSON string to get a JavaScript object



    return (
      <AppBar position="static">
        <Toolbar>
         
            <Box sx={{flexWrap:'wrap',flexGrow: 1, display:'flex' }}>
              {my_pages.map((page) => (
                <Button 
                  
                  key={my_pages}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open my_settings">
                <IconButton onClick={handleOpenSettingsMenu} sx={{ p: 0 }}>
                  <Avatar alt={loginuser.toUpperCase()} src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '55px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseSettingsMenu}
              >
                {my_settings.map((setting) => (
                  <MenuItem key={setting} onClick={(e) => { handleCloseSettingsMenu(); setLogot(e); }}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                ))}
              </Menu>
            </Box>
        </Toolbar>
      </AppBar>
    );
}






