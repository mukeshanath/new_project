import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import StoreIcon from '@mui/icons-material/Store';
import Typography from '@mui/material/Typography';

const Navbar = () => {

  const location = useLocation();
  const currentPathname = location.pathname;



   const cash = currentPathname==='/cashlist' ? "#1976d2" : "";
   const credit = currentPathname==='/creditlist' ? "#1976d2" : "";
   const branch = currentPathname==='/branchlist' ? "#1976d2" : "";
   const company = currentPathname==='/companylist' ? "#1976d2" : "";
  
 

  

   console.log(currentPathname);
  return (
    <>
     <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem className="menu1" style={{ backgroundColor:"#1976d2",height:"69px" }}>
          <StoreIcon></StoreIcon>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 200,
                fontFamily:'roboto',
                color:'white',
                letterSpacing: '.2rem',
                textDecoration: 'none',
              }}
            >
              Educative
              </Typography>
          </MenuItem>
           <Link to="/navbar" style={{ textDecoration: 'none',color:'black' }}><MenuItem> Dashboard </MenuItem></Link>


           <SubMenu label="Masters">
          <Link to="/branchlist" style={{ textDecoration: 'none',color:'black' }}><MenuItem style={{ backgroundColor:branch }}>Branch</MenuItem></Link>
          <Link to="/companylist" style={{ textDecoration: 'none',color:'black' }}><MenuItem style={{ backgroundColor:company }}>Company</MenuItem></Link>
          
          </SubMenu>
          

          <SubMenu label="Billings" open={currentPathname==='/creditlist' || currentPathname==='/cashlist' || currentPathname==='/credit' ? true : false}>
          <Link to="/cashlist" style={{ textDecoration: 'none',color:'black' }}><MenuItem style={{ backgroundColor:cash }}>Cash</MenuItem></Link>
            <Link to="/creditlist" style={{ textDecoration: 'none',color:'black' }}><MenuItem style={{ backgroundColor:credit }}>Credit</MenuItem></Link>       
          </SubMenu>


          <SubMenu label="Wallets">
            <MenuItem>Current Wallet</MenuItem>
            <MenuItem>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem> Transactions </MenuItem>
          <SubMenu label="Settings">
            <MenuItem> Account </MenuItem>
            <MenuItem> Privacy </MenuItem>
            <MenuItem> Notifications </MenuItem>
          </SubMenu>
          <MenuItem> <Link to="/" style={{ textDecoration: 'none',color:'black' }}>Logout</Link> </MenuItem>
        </Menu>
        
      </Sidebar>
      {/* <ResponsiveAppBar /> */}
      
      </div>

    </>
     
      
  );
};
export default Navbar;