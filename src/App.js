import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Footer from './components/home/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomeScreen from './components/home/HomeScreen';
import SpeakToASpecialist from './components/speakToASpecialist/SpeakToASpecialist';
import WhatWeOffer from './components/whatWeOffer/WhatWeOffer';

import HowItWorks from './components/howItWorks/HowItWorks';
import Locations from './components/locations/Locations';

const pages = [{label: 'Home', url: '/'}, {label: 'What We Offer', url: '/what-we-offer'}, {label: 'How It Works', url: '/how-it-works'}, {label: 'Locations', url: '/locations'}];

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
    <AppBar position="fixed">
      {/* <Container maxWidth="xl"> */}
        <Toolbar 
        sx={{
          display: 'flex',
          padding: '0px 45px',
          justifyContent: 'space-between'
        }}
        disableGutters>
          <a href="https://www.aaadeliveryservice.com/" style={{
            width: 200,
            marginRight: 45,
            display: 'flex'
            }}>
            <img src="https://www.aaadeliveryservice.com/wp-content/uploads/2021/12/aaadellogonbgwhtpblk-1.svg" alt="AAA Delivery Service" className="logo-1" /> 
          </a>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => {
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><a href={page.url}>{page.label}</a></Typography>
                </MenuItem>

                console.log(page);
              })}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <a href={page.url}><Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
              </a>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
          <Route path='/locations' element={<Locations />}></Route>
        </Routes>
    </Router>

    <Footer />
  </>
  );
}

export default App;
