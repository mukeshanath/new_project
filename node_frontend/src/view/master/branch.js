import React, { useEffect } from 'react'
import CustomizedBreadcrumbs from '../../component/bredcramps/bredcramps';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeIcon from '@mui/icons-material/Home';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
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
import SaveIcon from '@mui/icons-material/Save';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Branch() {




  const [selectedValue, setSelectedValue] = useState('');
  const [value, setValue] = React.useState(1);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNextClick = () => {
    // Update the value to switch to the second tab
    setValue('2');
  };

  const handleNextClick1 = () => {
    // Update the value to switch to the second tab
    setValue('3');
  };

  const previuosclick1 = () => {
    // Update the value to switch to the second tab
    setValue('1');
  };

  const previuosclick2 = () => {
    // Update the value to switch to the second tab
    setValue('2');
  };

  useEffect(() => {
    // Call handleChange when the component is mounted
    handleChange(null, '1');
  }, []); // The empty dependency array ensures it only runs once on mount



 // State to manage form data
const [formData, setFormData] = useState({
  comp_code: '',
  comp_name: '',
  br_code: '',
  br_name: '',
  people_code: '',
  people_name: '',
  address: '',
  city: '',
  state: '',
  country: '',
  br_grp: '',
  br_type: '',
  br_category: '',
  origin: '',
  mobile: '',
  phone: '',
  fax: '',
  email: '',
  transist_hub: '',
  active: '',
  tax: '',
  cur_inv: '',
  cur_col: '',
  rate: '',
  ini_rate: '',
  br_ncode: '',
  
});

  const icons = [
    { component: <HomeIcon />, label: 'Home', onClick: () => console.log('Delete clicked') },
    { component: <ListAltIcon />, label: 'Branchlist', onClick: () => console.log('Edit clicked') },
    { component: <MapsHomeWorkIcon />, label: 'Branch', onClick: () => console.log('Edit clicked') },
    // Add more icons as needed
  ];



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

console.log(formData)
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
       Branch Form
      </Typography>
    }
    action={
      <>
      <Button
      variant="contained"
      sx={{
        backgroundColor:"green",
        marginRight:"10px",
        '&:hover': {
          backgroundColor: "green", // Set the same color to disable hover effect
        },
      }}
      startIcon={<SaveIcon sx={{ fontSize: 32 }} />}
    >
      Save
    </Button>
    <Button
      variant="contained"
      sx={{
        backgroundColor:"green",
        marginRight:"10px",
        '&:hover': {
          backgroundColor: "green", // Set the same color to disable hover effect
        },
      }}
      startIcon={
         <RepeatOnIcon sx={{ fontSize: 32 }} />
         }
    >
      Save & Again
    </Button>
      <Link to="/branchlist"><Button
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
    </Button></Link>
      </> 
    }
  />
  {/* Add other card content here */}
</Card>

<CardContent>



    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            
            <Tab label="General" value="1" />
            <Tab label="Rate Factor" value="2" />
            {/* <Tab label="Office" value="3" /> */}
          </TabList>
        </Box>
        <TabPanel value="1" aria-selected="true"> 
          <Container component="main"  sx={{ width:"100%",paddingLeft:"0px",paddingRight:"0px" }}>
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
      
    
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
          <Grid item xs={6}>
              <TextField
                fullWidth
                label="Company Code"
                variant="outlined"
                name="comp_code"
                value={formData.comp_code}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                name="comp_name"
                value={formData.comp_name}
                onChange={handleInputChange}
              />
            </Grid>




            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Branch Code"
                variant="outlined"
                name="br_code"
                value={formData.br_code}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Branch Name"
                variant="outlined"
                name="br_name"
                value={formData.br_name}
                onChange={handleInputChange}
              />
            </Grid>
          


            <Grid item xs={6}>
              <TextField
                fullWidth
                label="People Code"
                variant="outlined"
                name="p_code"
                value={formData.p_code}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="People Name"
                variant="outlined"
                name="p_name"
                value={formData.p_name}
                onChange={handleInputChange}
              />
            </Grid>


            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="state"
                variant="outlined"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Country"
                variant="outlined"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </Grid>


            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Branch Group"
                variant="outlined"
                name="br_group"
                value={formData.br_group}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Branch Type"
                variant="outlined"
                name="br_type"
                value={formData.br_type}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Branch Category"
                variant="outlined"
                name="br_category"
                value={formData.br_category}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Origin"
                variant="outlined"
                name="origin"
                value={formData.origin}
                onChange={handleInputChange}
              />
            </Grid>


            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Mobile"
                variant="outlined"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Fax"
                variant="outlined"
                name="fax"
                value={formData.fax}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid>


            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Transit Hub"
                variant="outlined"
                name="transist_hub"
                value={formData.transist_hub}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
            <FormControl>
  <InputLabel>Select an Option</InputLabel>
  

  <Select
  sx={{ width: '500px' }} 
  name='active'
        value={formData.active}
        onChange={handleInputChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select a value' }}
      >
        {/* <MenuItem value="" disabled>
          Select a value
        </MenuItem> */}
        <MenuItem value="1">Option 1</MenuItem>
        <MenuItem value="2">Option 2</MenuItem>
        <MenuItem value="3">Option 3</MenuItem>
      </Select>
</FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button style={{ float:"right" }} type="submit" variant="contained" color="primary" onClick={handleNextClick}>
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
         </Container>
    </TabPanel>
        <TabPanel value="2">
        <Container component="main"  sx={{ width:"100%",paddingLeft:"0px",paddingRight:"0px" }}>
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
      
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Tax"
                variant="outlined"
                name="tax"
                value={formData.tax}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Current Invoice"
                variant="outlined"
                name="cur_inv"
                value={formData.cur_inv}
                onChange={handleInputChange}
              />
            </Grid>




            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Current Collection"
                variant="outlined"
                name="cur_col"
                value={formData.cur_col}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Rate"
                variant="outlined"
                name="rate"
                value={formData.rate}
                onChange={handleInputChange}
              />
            </Grid>
          


            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Initial Rate"
                variant="outlined"
                name="ini_rate"
                value={formData.ini_rate}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Branch Ncode"
                variant="outlined"
                name="br_ncode"
                value={formData.br_ncode}
                onChange={handleInputChange}
              />
            </Grid>


           
            <Grid item xs={12}>
              <Button style={{ float:"left" }} type="submit" variant="contained" color="primary" onClick={previuosclick1}>
                Prev
              </Button>
              {/* <Button style={{ float:"right" }} type="submit" variant="contained" color="primary" onClick={handleNextClick1}>
                Next
              </Button> */}
            </Grid>
          </Grid>
        </form>
      </Paper>
         </Container>
        </TabPanel>
        {/* <TabPanel value="3"><Container component="main"  sx={{ width:"100%",paddingLeft:"0px",paddingRight:"0px" }}>
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
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" onClick={previuosclick2}>
                Prev
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
         </Container></TabPanel> */}
      </TabContext>
    </Box>
</CardContent>

</Card>




</div>

    </>
  )
}
