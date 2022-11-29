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
import {UsaMap} from "../locations/Map.js"
import CircleMapPath from "../circle-animated-path-map";
import PathMap from "../animated-path-map"


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
              <img style={{width:"50%" , display:"block",margin:"auto"}}src={require('../../assets/logo-blue.png')} alt="Blue Logo" />
              <h2 className="circle-h3 circle-text"  style={{textAlign:"left", color:"black",marginLeft:"1vw"}} >Get Started Here</h2>
              <p className=" circle-text" style={{textAlign:"left", color:"black",marginLeft:"1vw"}}>
                Put the power of AAA behind your shipments and deliveries, with a partner that’s here to meet the demands of
                today, and help you navigate the road ahead. At AAA, we make it easy and convenient on every delivery. We take
                the stress out of shipping, giving you more time to focus on your core business.
              </p>
          
              
          </Grid>
          <Grid item xs={0} md={6} >
          <Box className="content" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} style={{ marginTop:"20vh", backgroundImage: `url(${home_page_top_right})`  , backgroundRepeat:"no-repeat" , backgroundPosition:"right" , backgroundSize : "auto  100%" , padding:"50px 0"}} >

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


<div className="screen screen-3" style={{height:"fit-content"}}>

<div className="top-semicircle semicircle-white">
    <div className="circle-h2">
    <h1 style={{width :"80%", margin:"auto",textAlign:"center" }}>Schedule And Customize A Delivery</h1>

    </div>
</div>
<p className="subheading content">
  Our online portal is easy and convenient to use, seamlessly place and track orders all in one
  place. Schedule and customize a pickup from anywhere with accurate ETA, available from
  any-device. View signature or photo-based PODs for each order and actual arrival time.
</p>

<div style={{maxWidth:"80vw",margin:"auto"}} >
<Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
  <Grid justifyContent="center" item xs={12} md={6} >
    <div style={{width: '100%'}}>

     <img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/how-it-works/image1.png')} alt="delivery signature" />

     </div>
  </Grid>

  <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
  <h2 className="  textLeft"  style={{}}>What To Expect On Every Pickup</h2>
    <p className=" textLeft" >
      Professionalism on every delivery, with our fully vetted couriers by
      uniform, identification badges and marked vehicles. Pickup and
      delivery confirmation in real-time. Delivery always on time, no
      excuses. To learn more, please follow the link. Register Here.
    </p>
  </Grid>
</Grid>
<Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
  <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
  <h2 className="  textLeft"  style={{}}>Order Tracking In Real-Time</h2>
    <p className=" textLeft" >
      Visibility on every pick-up and delivery, GPS tracking in real-time, on
      a live map through the entire process. Automatic order alerts and
      updates via text or email, PODs for each order and actual arrival
      time. To learn more, please follow the link. Get Started.
    </p>
  </Grid>
  <Grid justifyContent="center" item xs={12} md={6} >
    <div style={{width: '100%'}}>
      <CircleMapPath></CircleMapPath>
     </div>
  </Grid>

</Grid>
<Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
  <Grid justifyContent="center" item xs={12} md={6} >
    <div style={{width: '100%'}}>

     <img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/how-it-works/image2.png')} alt="delivery signature" />

     </div>
  </Grid>

  <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
    <h2 class="  textLeft">Customize Your Order Confirmation</h2>
    <p className=" textLeft" >
      API / EDI integrations,. In-depth order tracking, signature or photo-based
      PODs capture for each order. Customize how you receive order
      confirmation. To learn more, please follow the link. Register Here.
    </p>
  </Grid>
</Grid>
<Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
  <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
    <h2 className="  textLeft"  style={{}}>Rate Your Experience</h2>
    <p className=" textLeft" >
      Let us know how we are doing, because we are committed to continue
      being the leading logistics solutions provider to our customers. Constantly
      improving & implementing quality management to achieve it. To learn
      more, please follow the link. Get Started.
    </p>
  </Grid>
  <Grid justifyContent="center" item xs={12} md={6} >
    <div style={{width: '100%'}}>

     <img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/how-it-works/image3.png')} alt="delivery signature" />

     </div>
  </Grid>

</Grid>
<p className="subheading content">
  We are always available 24/7/365 at any time of the day, during weekends, and all holidays. No matter
  when, our team of specialists are always available to assist you. To learn more. Register Here
</p>

</div>
<Grid container>
<Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
<img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/home/home8.png')} alt="delivery signature" />
</Grid>

<Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
<img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/home/home9.png')} alt="delivery signature" />
</Grid>
<Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} >
<img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/home/home10.png')} alt="delivery signature" />
</Grid>


</Grid>

  
</div>
<h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}>Delivery Always On Time! Every Time! No Excuses!</h2>


<div className="screen screen-4" style={{height:"fit-content"}}>


  <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
  <Grid item xs={12} sm={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
  <Box  style={{margin:"auto"}} >
      <h2>Order Tracking In Real-Time</h2>
        <div className="content textLeft" >
          Gain visibility on every single shipment and delivery, GPS tracking in real-time, on a live map through the entire process and accurate ETA. Automatic order alerts and updates via text or email, POD for each order and actual arrival time. 
        </div>
  </Box>
  <Box  style={{margin:"auto"}} >
      <h2>Transparency & Visibility</h2>
        <div className="content textLeft" >
          We breathe transparency into every single shipment and delivery through innovative technologies. Our software allows our customers to keep all their shipments and deliveries information at their fingertips.
        </div>
  </Box>
  </Grid>
  <Grid item xs={12} sm={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
    <PathMap></PathMap>
  </Grid>           
</Grid>

</div>


    </>
  );
}

export default HowItWorks;
