import React from 'react'
import CustomizedBreadcrumbs from '../../component/bredcramps/bredcramps';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DatatablePage from '../../makeData';
import IconButton from '@mui/material/IconButton';
import { TextField, FormControlLabel, FormGroup, Container, Paper, Grid } from '@mui/material';
import { useState } from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { BootstrapTooltip } from '../../component/BasicComponent/tooltuip';



export default function Company() {



  const icons = [
    { component: <HomeIcon />, label: 'Home', onClick: () => console.log('Delete clicked') },
    { component: <ListAltIcon />, label: 'Companylist', onClick: () => console.log('Edit clicked') },
    { component: <ApartmentIcon />, label: 'Company', onClick: () => console.log('Edit clicked') },
    // Add more icons as needed
  ];

// State to manage form data
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  subscribe: false,
  termsAndConditions: false,
});

// Handle form input changes
const handleInputChange = (e) => {
  const { name, value, checked, type } = e.target;
  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value,
  });
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  // Add your logic to handle form submission here
  console.log('Form submitted:', formData);
};
  return (
    <>
    <div>
    <div className='Breadcrumbs' style={{ marginTop:"10px",marginLeft:"12px" }}>
    <CustomizedBreadcrumbs iconsdata={icons}/>
    </div>
    </div>

    <div className='datatable' style={{ marginTop:"20px",width:"98%",marginLeft:"10px" }}>

<Card sx={{ width: "98%",marginTop:"20px",marginLeft:"10px" }}>
<Card>
  <CardHeader  sx={{
    backgroundColor:"#1976d2",
    color:"white",
    height:"60px"
  }}
    title={
      <Typography variant="h5">
       Company Form
      </Typography>
    }
    action={
      <Link to="/companylist"> <BootstrapTooltip title="Close">
        <Button
      variant="contained"
      sx={{
        backgroundColor:"red",
        '&:hover': {
          backgroundColor: "red", // Set the same color to disable hover effect
        },
      }}
      startIcon={<CloseIcon sx={{ fontSize: 32 }} />}
    >
      Close
    </Button>
        </BootstrapTooltip>   </Link>
      
    }
  />
  {/* Add other card content here */}
</Card>

<CardContent>
<Container component="main"  sx={{ width:"100%",paddingLeft:"0px",paddingRight:"0px" }}>
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
      
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid>




            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid>
          


            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid>


            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid>


            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>

</CardContent>

</Card>




</div>

    </>
  )
}
