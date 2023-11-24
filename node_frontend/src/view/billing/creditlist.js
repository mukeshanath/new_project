import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';
import CustomizedBreadcrumbs from '../../component/bredcramps/bredcramps';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import HomeIcon from '@mui/icons-material/Home';


import DatatablePage from '../../makeData';

export default function CreditList() {



  const icons = [
    { component: <HomeIcon />, label: 'Home', onClick: () => console.log('Delete clicked') },
    { component: <ListAltIcon />, label: 'Creditlist', onClick: () => console.log('Edit clicked') },
    // Add more icons as needed
  ];


  return (
    <>
    <div className='Breadcrumbs' style={{ marginTop:"10px",marginLeft:"12px" }}>
    <CustomizedBreadcrumbs iconsdata={icons}/>
    </div>
    <div style={{ marginTop:"20px",width:"98%",marginLeft:"10px" }}>
      <Card sx={{ width: "98%",marginTop:"20px",marginLeft:"10px" }}>
     <div> 
      <Typography variant="h5" component="div" sx={{ backgroundColor:"#1976d2",color:"white",height:"45px",paddingTop:"8px",paddingLeft:"10px" }}>
    Credit Entry Filters  
    </Typography>
    </div>
    
  <CardContent>
  
   <div className='filter' style={{ display:"flex" }}> 
   <div>
   <table>
    <tr>
    <th><b>Branch Code</b></th>
    <td><input type='text' style={{ width: '200px',height:"40px",marginLeft:"5px" }} /></td>
    </tr>
   </table>
   </div>


   <div>
   <table>
    <tr>
    <th><b>Cnote Number</b></th>
    <td><input type='text' style={{ width: '230px',height:"40px",marginLeft:"5px" }}  /></td>
    </tr>
   </table>
   </div>

   <div>
   <table>
    <tr>
    <th><b>Period</b></th>
    <td><input type='text' style={{ width: '230px',height:"40px",marginLeft:"5px" }}  /></td>
    </tr>
   </table>
   </div>

   <div>
   <table>
    <tr>
    <th><b>Date</b></th>
    <td><input type='date' style={{ width: '230px',height:"40px",marginLeft:"5px" }}  /></td>
    </tr>
   </table>
   </div>
   </div>
   
  </CardContent>
  <CardActions sx={{ justifyContent: 'flex-end' }}>
  <Button size="medium" sx={{ backgroundColor:"green",Color:"white" }}  style={{ color:"white" }}>Apply</Button>&nbsp;<Button sx={{ backgroundColor:"orange" }} style={{ color:"white" }} size="medium">Reset</Button>
  </CardActions>
  
</Card>
    </div>

    <div className='datatable' style={{ marginTop:"20px",width:"98%",marginLeft:"10px" }}>

    <Card sx={{ width: "98%",marginTop:"20px",marginLeft:"10px" }}>
    <Card>
      <CardHeader  sx={{
        backgroundColor:"#1976d2",
        color:"white"
      }}
        title={
          <Typography variant="h5">
           Credit Entry List
          </Typography>
        }
        action={
          <Link to="/credit"><Button
          variant="contained"
          sx={{
            backgroundColor:"green"
          }}
          startIcon={<AddIcon sx={{ fontSize: 32 }} />}
        >
          Add
        </Button></Link>
          
        }
      />
      {/* Add other card content here */}
    </Card>

  <CardContent>
  
    <DatatablePage/>
  </CardContent>

</Card>



    
    </div>


   
    </>
  )
}
