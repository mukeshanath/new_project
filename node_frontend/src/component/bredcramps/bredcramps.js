import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';


const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs(props) {



   const { iconsdata } = props;
   
  return (

<>

     



    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">


      {iconsdata.map((icon, index) => (
           <StyledBreadcrumb
           component="a"
           href="#"
           label={icon.label}
           icon={icon.component}
           />
      ))}
        
        {/* <StyledBreadcrumb component="a" href="#" label="Catalog" />
        <StyledBreadcrumb
          label="Accessories"
          deleteIcon={<ExpandMoreIcon />}
          onDelete={handleClick}
        /> */}
      </Breadcrumbs>
    </div>
</>

    
  
  );
}