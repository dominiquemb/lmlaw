import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BlueLogo from "../../assets/logo-blue.png"
import ScrollAnimation from 'react-animate-on-scroll';
import "../../assets/animate.css";
import back from '../../assets/blue-column.PNG';
import BeforeFooter from "../BeforeFooter";
import home_page_top_right from '../../assets/home_page_top_right.png';

function HowItWorks() {
  return (
    <>

<div id='map-and-dropdown'>
    <Grid container  style={{marginTop:100 , marginBottom:"10vh" , padding : 50}}>
          <Grid item xs={12} md={6}  >

          <h1 className="circle-h1 circle-text"  style={{color:"#666 " , marginTop:"10vh"}}>How It Works</h1>
              <h2 className="circle-h2 circle-text" style={{color:"#666 "}}>
                Seamlessly Place and Track Orders All In One Place
              </h2>
              <img style={{width:400 , display:"block",margin:"auto"}}src={require('../../assets/logo-blue.png')} alt="Blue Logo" />
              <h3 className="circle-h3 circle-text" style={{color:"#666 "}}>Get Started Here</h3>
              <h4 className="circle-h4 circle-text" style={{color:"#666 "}}>
                Put the power of AAA behind your shipments and deliveries, with a partner that’s here to meet the demands of
                today, and help you navigate the road ahead. At AAA, we make it easy and convenient on every delivery. We take
                the stress out of shipping, giving you more time to focus on your core business.
              </h4>
          
              
          </Grid>
          <Grid item xs={0} md={6} style={{  backgroundImage: `url(${home_page_top_right})`  , backgroundRepeat:"no-repeat" , backgroundPosition:"right" , backgroundSize : "auto  100%" }}>
          <Box className="content" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}  >

          <div className="speak-to-a-specialist-form light-blue-bg rounded-corners box-shadow" style={{width:"fit-content" }}>
            <video
              width="410"
              height="230"
              style={{ width: "410px" }}
              loop
              autoPlay
              muted
            >
              <source
                src="https://www.aaadeliveryservice.com/wp-content/uploads/2022/07/AAADeliveryService-Final-V2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          </Box  >

              
          </Grid>
    </Grid>

    </div>
      <div className="circle-container what-we-offer" id="circle-container">
        

    <div className="screen screen-3"  style={{height:"fit-content" , border:0}}>

      <div className="top-semicircle semicircle-white">
          <div className="circle-h2">
            <h1 style={{fontSize:40 , width :"80%", margin:"auto",textAlign:"center" }}>Schedule And Customize A Delivery</h1>
          </div>
      </div>

      <Container maxWidth="xl" disableGutters>
        <div className="content" style={{width:"80%",margin:"auto"}}>
        Our online portal is easy and convenient to use, seamlessly place and track orders all in one place. Schedule and customize a pickup from anywhere with accurate ETA, available from any-device. View signature or photo-based PODs for each order and actual arrival time.
            <br /><br />
        </div>


        <Grid container style={{padding:25}}>
            <Grid item xs={12} md={3.5}>
            <div className="content"  >

                  <h3>What To Expect On Every Pick Up</h3>
                    <div>
                    Accurate, in-depth order tracking, POD capture, audit trails, and geofencing to ensure physical delivery. Professionalism on every delivery with our fully vetted Couriers by uniform and identification badges. "Delivery always on time, no excuses".
                    </div>
                
                  <h3>Order Tracking In Real-Time</h3>
                    <div>
                    Gain visibility on every pick-up and delivery on our display monitor, GPS tracking in real-time on a live map. Automatic order alerts and updates via text or email, signature or photo-based PODs for each order and actual arrival time. 
                    </div>
                    
                </div>
                
            </Grid>


            <Grid item xs={0} md={5}>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
>
            <img  style={{width:"100%" , padding:"50px"  }} src={require('../../assets/blue-circles.PNG')} alt="Blue Logo" />

            </Box>
            </Grid>

            <Grid item xs={12} md={3.5}>
            <div className="content"  >

                  <h3>Customize Your Order Confirmation</h3>
                    <div>
                    API / EDI integrations, automatic order alerts and updates via text or email. In-depth order tracking, signature or photo-based PODs capture for each order. "Customize how you receive Order Confirmation"
                    </div>
                
                  <h3>Rate Your Experience</h3>
                    <div>
                    Let us know how we are doing, because we are committed to continue being the leading logistics solutions provider to our customers. Constantly improving & implementing quality management to achieve it.
                    </div>
                   
              </div>
                
            </Grid>
            <div className="column-footer" style={{display:"block",marginBottom:50,width:"100%"}}>
                  <a className="button-link" href="/speak-to-a-specialist"  style={{marginLeft:"15%"}}>
                    <button className="round-button round-button">
                      Get Started
                    </button>
                  </a>
                  <a className="button-link"  href="/speak-to-a-specialist"  style={{float:"right",marginRight:"15%"}}>
                    <button className="round-button round-button">
                      Get Started
                    </button>
                  </a>
            </div>
        </Grid>
      </Container>

    </div>


    <div className="screen screen-4" style={{height:"fit-content" , border:0}}>
        
    


        <BeforeFooter>
        </BeforeFooter>

      </div>

      </div>
    </>
  );
}

export default HowItWorks;
