import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BlueLogo from "../../assets/logo-blue.png"
import ScrollAnimation from 'react-animate-on-scroll';
import "../../assets/animate.css";
import BeforeFooter from "../BeforeFooter";
import home_page_top_right from '../../assets/blue-column.png';

function HowItWorks() {
  return (
    <>

<div id='map-and-dropdown'>
    <Grid container  style={{marginBottom:"10vh" , padding :"0px 20px"}}>
          <Grid item xs={12} md={6}  >

          <h1 className="circle-h1 circle-text"  style={{ marginTop:"5vh"}}>How It Works</h1>
              <h2 className="circle-h2 circle-text">
                Seamlessly Place and Track Orders All In One Place
              </h2>
              <img style={{width:"60%" , display:"block",margin:"auto"}}src={require('../../assets/logo-blue.png')} alt="Blue Logo" />
              <h2 className="circle-h3 circle-text"  style={{textAlign:"left", color:"black"}} >Get Started Here</h2>
              <p className=" circle-text" style={{textAlign:"left", color:"black"}}>
                Put the power of AAA behind your shipments and deliveries, with a partner that’s here to meet the demands of
                today, and help you navigate the road ahead. At AAA, we make it easy and convenient on every delivery. We take
                the stress out of shipping, giving you more time to focus on your core business.
              </p>
          
              
          </Grid>
          <Grid item xs={0} md={6} >
          <Box className="content" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} style={{  backgroundImage: `url(${home_page_top_right})`  , backgroundRepeat:"no-repeat" , backgroundPosition:"right" , backgroundSize : "auto  100%" , padding:"50px 0"}} >

          <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{width:"80%" }}>
            <video
             
              style={{ width: "100%" }}
              loop
               autoPlay 
              muted
              controls
            >
              <source
                src={require('../../assets/videos/AAA 3-1080p-221015.mp4')} 
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
          <div className="circle-h2" style={{bottom:0}}>
            <h1 style={{width :"70%", margin:"auto",textAlign:"center" }}>Schedule And Customize A Delivery</h1>
          </div>
      </div>

      <Container maxWidth="xl" disableGutters>
        <p className="content subheading" >
        Our online portal is easy and convenient to use, seamlessly place and track orders all in one place. Schedule and customize a pickup from anywhere with accurate ETA, available from any-device. View signature or photo-based PODs for each order and actual arrival time.
            <br /><br />
        </p>


        <Grid container style={{padding:25}}>
            <Grid item xs={12} md={3.5}>
            <div className="content"  >

                  <h3>What To Expect On Every Pick Up</h3>
                    <div className=" textLeft" >
                    Accurate, in-depth order tracking, POD capture, audit trails, and geofencing to ensure physical delivery. Professionalism on every delivery with our fully vetted Couriers by uniform and identification badges. "Delivery always on time, no excuses".
                    </div>
                
                  <h3>Order Tracking In Real-Time</h3>
                    <div className=" textLeft" >
                    Gain visibility on every pick-up and delivery on our display monitor, GPS tracking in real-time on a live map. Automatic order alerts and updates via text or email, signature or photo-based PODs for each order and actual arrival time. 
                    </div>
                    
                </div>
                
            </Grid>


            <Grid item xs={0} md={5}>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
>
            <img  style={{width:"100%" , padding:"50px"  }} src={require('../../assets/Mv4.png')} alt="Blue Logo" />

            </Box>
            </Grid>

            <Grid item xs={12} md={3.5}>
            <div className="content"  >

                  <h3>Customize Your Order Confirmation</h3>
                    <div className=" textLeft" >

                    API / EDI integrations, automatic order alerts and updates via text or email. In-depth order tracking, signature or photo-based PODs capture for each order. "Customize how you receive Order Confirmation"
                    </div>
                
                  <h3>Rate Your Experience</h3>
                    <div className=" textLeft" >
                    Let us know how we are doing, because we are committed to continue being the leading logistics solutions provider to our customers. Constantly improving & implementing quality management to achieve it.
                    </div>
                   
              </div>
                
            </Grid>

        </Grid>
      </Container>

      <div className="column-footer" style={{display:"flex", marginBottom:150,width:"100%" , alignItems:"center" }}>
                  <a className="button-link"  href="/speak-to-a-specialist"  style={{ marginRight:0}}>
                    <button className="round-button round-button light-blue-bg">
                      How it works
                    </button>
                  </a>
                  
        </div>

    </div>


    <div className="screen screen-4" style={{height:"fit-content" , border:0}}>
        
    <div className="top-semicircle semicircle-blue">
          <div className="circle-h2 transparency" style={{bottom:0}}>
            <h1 style={{width :"70%", margin:"auto",textAlign:"center" }}>Transparency! Visibility! Safety! Professionalism!</h1>
          </div>
      </div>


        <BeforeFooter>
        </BeforeFooter>

      </div>

      </div>
    </>
  );
}

export default HowItWorks;
