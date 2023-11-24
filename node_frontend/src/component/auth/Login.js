import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails, selectUserDetails } from './userSlice';

function Copyright(props) {





  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  const userDetails = useSelector(selectUserDetails);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:3001/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                // Add any additional headers as needed
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              const responseData = await response.json();

              const userData = {
                username: `${responseData.user['firstname']}${responseData.user['lastname']}`,
                email: `${responseData.user['email']}`,
                _id: `${responseData.user['_id']}`
                // other user properties...
              };
             dispatch(setUserDetails(userData));
              console.log(`${responseData.user['firstname']}${responseData.user['lastname']}`);
              localStorage.setItem('login_username', `${responseData.user['firstname']}${responseData.user['lastname']}`);
             navigate('/navbar')
              // Handle success, e.g., redirect or update state
            } else {
              const errorData = await response.json();
              console.error(errorData.error);
              // Handle error, show a message, or update state accordingly
            }
          } catch (error) {
            console.error(error.error);
            // Handle unexpected errors, e.g., network issues
          }


      };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {/* <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link> */}
                <Link variant="body2" to="/register">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}