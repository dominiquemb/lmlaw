import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import home_page_top_right from '../../assets/blue-column.png';
import {UsaMap} from "../locations/Map.js"
import CircleMapPath from "../circle-animated-path-map";
import PathMap from "../animated-path-map"


function WhatWeOffer() {

  return (
    <>
    <div id='map-and-dropdown'>
    <Grid container  style={{ marginBottom:0, height:"fit-content"}}>
          <Grid item xs={12} lg={6} style={{ marginTop:"5%"}}  >

          <h1 className="circle-h1 circle-text"  style={{width:"75%",margin:"auto" }}>Partner With AAA For Reliable Same-Day Delivery & Courier Service</h1>
              <h2 className="circle-h2 circle-text" >
                Knowing your deliveries are safe and in good hands with AAA
              </h2>
            
          
              
          </Grid>
          <Grid item xs={0} lg={6} >
          <Box className="content" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} style={{  backgroundImage: `url(${home_page_top_right})`  , backgroundRepeat:"no-repeat" , backgroundPosition:"right" , backgroundSize : "auto  100%" , padding:"50px 0"}} >

          <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{width:"80%" }}>
            <video  controls    autoPlay loop  muted style={{borderRadius:10  , width:"100%"  }}>
                      <source src={require('../../assets/videos/aaa 2-1080p-221014.mp4')}  type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
          </div>

          </Box  >

              
          </Grid>

    </Grid>

    
    <div className="screen screen-2" style={{height:'fit-content'}}>
      <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
        <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
          Custom Logistics-Indispensable Courier Services
        </h1>

        <p className="subheading content">
          We understand how each business requirements can change from day-to-day, minute-to-minute,
          that’s why AAA DELIVERY SERVICE offers, indispensable custom logistics to fit and adapt to your
          business needs. Providing you peace of Mind.
        </p>

        <Grid container>
            <Grid item xs={12} md={4}>
                <img src={require('../../assets/home/home1.png')}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                Healthcare Industry
              </div>
              <div className="content middle-subheader">
                Reliability
              </div>
              <div className="content checked">
                    <ul>
                      <li>
                         FMCSA, HIPPA compliant, and OSHA certified</li>
                      <li>
                        Cost-efficient LTL delivery services
                      </li>
                      <li>
                        Place and track shipments all in one central hub
                      </li>
                      <li>
                        GPS tracking in real-time, on a live map
                      </li>
                      <li>
                        Schedule a pickup, available from anywhere with any-device
                      </li>
                    </ul>
              </div>

            </Grid>


            <Grid item xs={12} md={4}>
              <UsaMap/>
              <img src={require('../../assets/home/home2.png')}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                At Home
              </div>
              <div className="content middle-subheader">
                Availability
              </div>

            </Grid>

            <Grid item xs={12} md={4}>
              <img src={require('../../assets/home/home3.png')}  style={{width:"80%",margin:"auto"}}></img>

              <div className="content middle bold-inline">
                Freight Industry
              </div>
              <div className="content middle-subheader">
                Transparency
              </div>
              <div className="content checked">
                    <ul>
                      <li>
                        Transparency and visibility into every single shipment
                      </li>
                      <li>
                        On-demand, same-day door-to-door delivery service
                      </li>
                      <li>
                        Delivery always on-time, every time, on excuses
                      </li>
                      <li>
                        Reliability, flexibility, and professionalism on every delivery
                      </li>
                      <li>
                        API / EDI Integrations for order updates
                      </li>
                      <li>
                        Customer support around the clock 24/7/365
                      </li>
                    </ul>
              </div>

            </Grid>
        </Grid>
      </Container>
      
     
    </div>

    <div className="screen screen-3" style={{height:"fit-content"}}>

      <div className="top-semicircle semicircle-white">
          <div className="circle-h2">
          <h1 style={{width :"80%", margin:"auto",textAlign:"center" }}>Why We Stand Out Above The Rest</h1>

          </div>
      </div>
      <p className="subheading content">
        We have the couriers, the vehicles, and technology alongside our massive fleet and partner carrier network to meet
        your logistics needs. We have the experiences that makes a difference to your business and your clients. We provide
        on-demand, reliable same-day delivery & courier service, on time critical transportation to all 48 states nationwide.
        Providing you with:
      </p>

      <div style={{maxWidth:"80vw",margin:"auto"}} >
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid justifyContent="center" item xs={12} md={6} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"auto"
           }} src={require('../../assets/what-we-offer/image4.png')} alt="delivery signature" />

           </div>
        </Grid>

        <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <h2 class="  textLeft">Augment Your Fleet</h2>
          <p className=" textLeft" >
            AAA is here and ready to step right in, on-demand, or same-day to help you
            deliver your shipments. Partner with us, let us become an extension of your
            company, so we can continuously augment your fleet. Our team of specialists
            and fleet are ready to help you ramp up your operations and make deliveries
            as needed, so you can meet the growing demands of your business. To learn
            more, please follow the link. Register Here.
          </p>
        </Grid>
      </Grid>
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
      <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <h2 class="  textLeft">Replace Your Fleet</h2>
          <p className=" textLeft" >
            Supplement your fleet to a team of specialists to ensure you meet the
            demands of your customers. We have the couriers, the right vehicles, and AAA
            provides you with advanced technology. live tracking, proof of delivery, and the
            fastest, reliable delivery option in the industry. Giving you more time to focus
            on the things that matters most for your business. . To learn more, please
            follow the link. Get Started
          </p>
        </Grid>
        <Grid justifyContent="center" item xs={12} md={6} >
          <div style={{width: '100%'}}>

          <img style={{
          display:'block',
          width:"80%",
          margin:"auto"
          }} src={require('../../assets/what-we-offer/image5.png')} alt="delivery signature" />

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
           }} src={require('../../assets/what-we-offer/image6.png')} alt="delivery signature" />

           </div>
        </Grid>

        <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <h2 class="  textLeft">Schedule On-Demand Or Recurring Deliveries</h2>
          <p className=" textLeft" >
            Our portal is easy and convenient to use, whether it’s on-demand or on a recurring
            scheduling. We customize and adapt our logistics services for your day-to-day,
            minute-to-minute operational delivery needs. We provide you with upfront pricing,
            accurate ETA on every pickup and delivery, real-time package tracking and instant
            delivery confirmation, based on your preference. To learn more, please follow the
            link. Register Here.
          </p>
        </Grid>
      </Grid>
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <h2 className="  textLeft"  style={{}}>Adapting To Your Business</h2>
          <p className=" textLeft" >
            We give you total control over the sending and receiving of your packages, without
            the added stress of managing each delivery, we ensure your deliveries meet the
            requirements of your customers. Simply place and track orders all in one central
            hub, reduce costs, save money, and improve inter office productivity, knowing your
            deliveries are safe and well cared for with AAA, Providing you peace of mind. To
            learn more, please follow the link. Get Started.
          </p>
        </Grid>
        <Grid justifyContent="center" item xs={12} md={6} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"auto"
           }} src={require('../../assets/what-we-offer/image7.png')} alt="delivery signature" />

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
    <h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}>Reliability! Flexibility! Availability! Scalability!</h2>


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

  

    </div>
      
    </>
  );
}

export default WhatWeOffer;
