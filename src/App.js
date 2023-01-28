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
import SameDayDelivery from './components/same-day-delivery/SameDayDelivery';
import GroundTransportation from './components/ground-transportation/GroundTransportation';
import Healthcare from './components/healthcare/Healthcare';
import IndustriesWeServe from './components/industries-we-serve/industries';
import Carrier from './components/carrier/carrier';
import CarrierRegistration from './components/carrier/carrier-registration';

const pages = [{label: 'Home', url: '/'}, {label: 'What We Offer', url: '/what-we-offer'}, {label: 'How It Works', url: '/how-it-works'}, {label: 'Locations', url: '/locations'} , {label: 'Speak to a specialist', url: '/speak-to-a-specialist'} , {label: 'About us ', url: '/about-us'} , {label: 'Carriers', url: '/carriers'}];
const industries = [{ label: 'Industries', url: '/industries-we-serve'},{ label: 'Healthcare', url: '/healthcare'},{label: 'Freight', url: '/ground-transportation'},{label: 'Same day', url: '/same-day-delivery'}];
const links = pages.concat(industries)


function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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


          <Box sx={{ display: { xs: 'flex', lg: 'none' } , width:"100%"  }}> 
          <a href="https://www.aaadeliveryservice.com/" style={{
            width: "inherit",
            marginRight: 0,
            flexGrow: 2,
            maxWidth:"15%",
            minWidth: "5cm",
            alignSelf: "center"
            }}>

            <img style={{width:"100%"}} src={require('./assets/new-logo.png')}  alt="AAA Delivery Service" className="logo-1" /> 
          </a>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style =  {{color:"black" , padding:0,marginLeft:"auto"}}
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

            {links.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                <a style={{ width:"100%"}}href={page.url}><Typography textAlign="center">{page.label}</Typography></a>
              </MenuItem>
            ))}
            
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            <a href="https://www.aaadeliveryservice.com/" style={{
            width: "inherit",
            marginRight: 0,
            flexGrow: 2,
            maxWidth:"15%",
            alignSelf: "center"
            }}>

            <img style={{width:"100%"}} src={require('./assets/new-logo.png')}  alt="AAA Delivery Service" className="logo-1" /> 
          </a>
            {pages.map((page, index) => (
              <a
              style={{flexGrow:1 , alignSelf: 'center'}}
               href={page.url}><Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#090B27', display: 'block' }}
              >
                {page.label}
              </Button>
              </a>
            ))}

            <Box style={{alignSelf:'center'}}> 
              <Button className="dropdown"
                  sx={{ my: 2, color: '#090B27' }}
                >
                  Industries
                <div className="dropdown-content">
              {industries.map((page, index) => (
                    <div><a href={page.url}>{page.label}</a></div>
                ))}
                </div>
                </Button>

            </Box>
            <Box sx={{ flexGrow: 1  ,display: { xs: 'none', lg: 'flex' }}}>
                  <a href="https://aaa.e-courier.com/aaa/home/index.asp">
                  <button  className="round-button " style={{ width : "fit-content", marginLeft:"20%" , marginTop:10, marginBottom:10 , backgroundColor:"#367bdc"}}>
                    Online Portal
                  </button>
                  </a>
          </Box>


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
          <Route path='/same-day-delivery' element={<SameDayDelivery />}></Route>
          <Route path='/ground-transportation' element={<GroundTransportation />}></Route>
          <Route path='/healthcare' element={<Healthcare />}></Route>
          <Route path='/industries-we-serve' element={<IndustriesWeServe/>}></Route>
          <Route path='/carriers' element={<Carrier/>}></Route>
          <Route path='/carrier-registration' element={<CarrierRegistration/>}></Route>

        </Routes>
    </Router>

    <Footer />
  </>
  );
}

export default App;
