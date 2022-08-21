import React from 'react';
import logo from './logo.svg';
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
import Grid from '@mui/material/Grid';
import './App.css';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
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
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
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















    {/* <div className="custom-header" id="custom-header">
      <div className="left">
           <div id="logo">
                    <div className="inner">
                        <a href="https://www.aaadeliveryservice.com/">
                            <img src="https://www.aaadeliveryservice.com/wp-content/uploads/2021/12/aaadellogonbgwhtpblk-1.svg" alt="AAA Delivery Service" className="logo-1" /> 
                        </a>
                    </div>
                </div>
      </div>

      <div className="center">
        <a className="link" href="#">Home</a>
        <a className="link" href="#">What we offer</a>
        <a className="link" href="#">How it works</a>
        <a className="link" href="#">Locations</a>
      </div>

      <div className="right">  
        <a className="button-link  online-portal-link" href="#"><button className="round-button round-button-blue">Online Portal</button></a>
        <a className="button-link speak-to-a-specialist-link" href="#"><button className="round-button round-button-blue">Speak to a Specialist</button></a>
      </div>
    </div> */}

    <div className="circle-container" id="circle-container">
    <div className="screen-1 screen">
      <div className="large-circle">
        <div className="circle-header">
          <h1 className="circle-h1 circle-text">Reliable Same-Day Delivery & Courier Service</h1>
          <h2 className="circle-h2 circle-text">Providing you peace of mind</h2>
          <h4 className="circle-h4 circle-text">Deliver your packages and cargo faster, safer, on-time every time from door-to-door, across town or across the country</h4>
        </div>
        <a className="get-started-button" href="#"><button className="round-button large-circle-button">Get Started</button></a>
        <div className="circle-video">
          <video width="320" height="240" style={{width: '430px'}} loop autoPlay muted>
            <source src="https://www.aaadeliveryservice.com/wp-content/uploads/2022/07/AAADeliveryService-Final-V2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div id="small-circle-container" className="small-circle-container">
        <div className="circle small-circle small-circle-1">
          Picture insert
        </div>

        <div className="circle small-circle small-circle-2">
          Picture insert
        </div>

        <div className="circle small-circle small-circle-3">
          Picture insert
        </div>
      </div>
    </div>


  <div className="screen screen-2">
    <div className="top-semicircle semicircle-blue">
      <h2 className="circle-h2">Custom logistics. Indispensable service.</h2>
    </div>

    <div className="content">
      We understand every business is different and can change from day-to-day, that’s why we customize our logistics to fit and adapt to your business needs.
    </div>

    <div className="frame-2-columns">
      <div className="background"></div>
      <div className="column">
        <div className="centered circle small-circle smallest">
          Picture insert here
        </div>
        <div className="content middle">
          Medical Industry
        </div>
        <div className="content middle-subheader">
          Reliability
        </div>
        <div className="content">
          We provide on-demand, reliable same-day delivery service, delivering medical specimens, supplies, interoffice mail, and x-rays. Our drivers are in compliant with HIPPA guidelines and OSHA certified. Providing on-the-ground insights, streamlined PODs, tracking in real-time, geofencing to ensure driver is at delivery location. “You See What We See”.
        </div>
        <div className="column-footer">
          <a className="button-link speak-to-a-specialist-link" href="#"><button className="round-button round-button-blue">Learn More</button></a>
        </div>
      </div>


      <div className="column">
        <div className="us-map">
          <img src="https://www.aaadeliveryservice.com/wp-content/uploads/2022/05/usa-map-2.jpeg" />
        </div>
      </div>

      <div className="column">
        <div className="centered circle small-circle smallest">
          Picture insert here
        </div>
        <div className="content middle">
          Freight Industry
        </div>
        <div className="content middle-subheader">
          Dependability
        </div>
        <div className="content">
          We provide express, same-day delivery service, on time critical transportation to all 48 states nationwide. Expediting packages, any size shipments delivered within your city or across the country, same-day door-to-door delivery. GPS tracking in real time, adaptable logistics to fit your business needs. “Providing You Peace Of Mind”.
        </div>
        <div className="column-footer">
          <a className="button-link speak-to-a-specialist-link" href="#"><button className="round-button round-button-blue">Learn More</button></a>
        </div>
      </div>
    </div>
    <div className="bottom-semicircle semicircle-blue">
    </div>
  </div>

<div className="screen screen-3">
    <div className="top-semicircle semicircle-white">
         <h2 className="circle-h2">Why We Stand Out Above The Rest</h2>
    </div>
    <div className="content">
        We provide on-demand, reliable same-day delivery & courier service, on time critical transportation to all 48 states nationwide. Our team, technology, and company marked vehicles provide you with:
        <br /><br />
    </div>


    <Grid container>
        <Grid item xs={12} lg={4}>
            <div className="content">
                <ul>
                   <li> ✓  Customized logistics to fit and adapt to your business needs</li>
                   <li> ✓  Order tracking & geofencing in real-time dashboard</li>
                   <li> ✓  Delivery always on time, no excuses</li>
                   <li> ✓  Customer support around the clock 24/7/365</li>
                </ul>
            </div>
            <div className="column-footer">
               <a className="button-link light-blue-bg" href="#"><button className="round-button round-button">Get Started</button></a>
            </div>
         </Grid>


         <Grid item xs={12} lg={4}>
            <div className="moving-circles">
              <div 
                className="circle light-blue-bg medium-circle moving-circle-1"
                style={{
                  position: 'absolute',
                  top: 50,
                  left: 0,
                  zIndex: 5,
                }}
                >
                Moving circle 1
              </div>
              <div
               className="circle light-blue-bg medium-circle moving-circle-2"
               style={{
                position: 'absolute',
                top: 140,
                left: -50,
                zIndex: 4,
              }}
               >
                Moving circle 2
              </div>
              <div
               className="circle light-blue-bg medium-circle moving-circle-3"
               style={{
                position: 'absolute',
                top: 140,
                left: 150,
                zIndex: 2,
              }}
               >
                Moving circle 3
              </div>
              <div
               className="circle light-blue-bg medium-circle moving-circle-4"
               style={{
                position: 'absolute',
                top: 15,
                left: 100,
                zIndex: 1,
              }}
               >
                Moving circle 4
              </div>
              <div
               className="circle light-blue-bg medium-circle moving-circle-5"
               style={{
                position: 'absolute',
                top:210,
                left: 50,
                zIndex: 3,
              }}
               >
                Moving circle 5
              </div>
            </div>
        </Grid>

        <Grid item xs={12} lg={4}>
            <div className="content">
                <ul>
                   <li> ✓ Professional, fully vetted couriers by uniform</li>
                   <li> ✓ Reliable same-day delivery & courier service</li>
                   <li> ✓ On demand, and express same-day door-to-door delivery</li>
                   <li> ✓ Dependable service you can always count on, and professionalism on every delivery</li>
                </ul>
            </div>
            <div className="column-footer">
               <a className="button-link speak-to-a-specialist-link" href="#"><button className="round-button round-button light-blue-bg">How It Works</button></a>
            </div>
         </Grid>
    </Grid>

      <div className="bottom-semicircle semicircle-white">
      </div>
    </div>
    </div>
</>
  );
}

export default App;
