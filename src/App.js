import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Footer from './components/home/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import './App.css';
import HomeScreen from './components/home/HomeScreen';
import SpeakToASpecialist from './components/speakToASpecialist/SpeakToASpecialist';
import WhatWeOffer from './components/whatWeOffer/WhatWeOffer';

import HowItWorks from './components/howItWorks/HowItWorks';
import Locations from './components/locations/Locations';
import AboutUs from './components/aboutUs/AboutUs';
const pages = [{label: 'Home', url: '/'}, {label: 'What We Offer', url: '/what-we-offer'}, {label: 'How It Works', url: '/how-it-works'}, {label: 'Locations', url: '/locations'} , {label: 'Speak to a specialist', url: '/speak-to-a-specialist'} , {label: 'About us ', url: '/about-us'}];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="fixed" style={{backgroundColor:"white"}}>
      {/* <Container maxWidth="xl"> */}
        <Toolbar 
        sx={{
          display: 'flex',
          padding: '0px 15px',
          justifyContent: 'space-between'
        }}
        disableGutters>
          <a href="https://www.aaadeliveryservice.com/" style={{
            width: "inherit",
            marginRight: 0,
            display: 'flex'
            }}>

            <img src={require('./assets/header-logo.png')}  alt="AAA Delivery Service" className="logo-1" /> 
          </a>

          <Box sx={{ display: { xs: 'flex', lg: 'none' } }}> 
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style =  {{color:"black" , padding:0}}
            >
              <MenuIcon style =  {{color:"black" , padding:0}} />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >

            {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                <a style={{ width:"100%"}}href={page.url}><Typography textAlign="center">{page.label}</Typography></a>
              </MenuItem>
            ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            {pages.map((page, index) => (
              <a href={page.url}><Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#090B27', display: 'block' }}
              >
                {page.label}
              </Button>
              </a>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1  ,display: { xs: 'none', lg: 'flex' }}}>
                  <button className="round-button " style={{ width : "fit-content", marginLeft:"20%" , marginTop:10, marginBottom:10 , backgroundColor:"#367bdc"}}>
                    Online Portal
                  </button>

            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      {/* </Container> */}
    </AppBar>


    <Router>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/speak-to-a-specialist' element={<SpeakToASpecialist/>} />
          <Route path='/what-we-offer' element={<WhatWeOffer />} />
          <Route path='/how-it-works' element={<HowItWorks />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/locations' element={<Locations />}></Route>
        </Routes>
    </Router>

    <Footer />
  </>
  );
}

export default App;
