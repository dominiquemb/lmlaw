import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import home_page_top_right from '../../assets/blue-circles.png';
import "../../assets/animate.css";
import {UsaMap} from "../locations/Map.js"

import BlueSection from './blue-section.js';
import BeforeFooter from '../BeforeFooter';
function Flexible() {

  return ( 
    <>
    <div className="home">
    <Grid container  style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} lg={6} style={{ paddingLeft:"5%",paddingRight:"5%"}}  >

            <h1 className="circle-h1 circle-text" style={{marginTop:0, paddingTop:"clamp(1cm,10vh,3cm)",paddingRight:"5%"}}  >
                Flexible Same-Day Delivery
	        </h1>

              <h4 className="circle-h4 circle-text">
                At AAA DELIVERY SERVICE, we offer flexible same-day or scheduled delivery 
                options for businesses. Whether you need to get a package to its destination 
                quickly or have a more flexible timeline, we have the resources to meet your 
                needs. Register Here.
              </h4>

              
          </Grid>
          <Grid item xs={0} lg={6} >
          <Box className="content background-blue-circles" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} style={{  backgroundImage: `url(${home_page_top_right})`}} >

          <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{width:"80%" }}>
            <video  controls    autoPlay loop  muted style={{borderRadius:10  , width:"100%"  }}>
                      <source  src={require('../../assets/videos/AAADeliveryService-Final-V2.mp4')}   type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
          </div>

          </Box  >

              
          </Grid>

    </Grid>

    <div className="screen screen-2" style={{height:'fit-content'}}>


      <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
        <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
            What Is Flexible Same-Day Or Scheduled Delivery?
        </h1>

        <p className="subheading content">
            Flexible same-day or scheduled delivery is a delivery service that allows customers to choose the date and time that their package will be delivered. 
            With this type of service, customers have more control over the delivery process and can schedule their deliveries to fit their own schedule. This can 
            be especially useful for businesses that need to get a package to its destination quickly but don't necessarily need it to bedelivered on the same day 
            that it's shipped. Scheduled delivery can also be useful for businesses that want to schedule their deliveries in advance to ensure that they have a 
            consistent and reliable delivery schedule. Speak To A Specialist.
        </p>

        <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
            Advantages Of Flexible Same-Day Or Scheduled Delivery
        </h1>

        <Grid container>
            <Grid item xs={12} md={4}>
                <img src={require('../../assets/home/home1.png')}  style={{width:"80%",margin:"auto"}}></img>
                <div className="content middle bold-inline">
                    Convenience
                </div>
                <div className="content ">
                    Being able to choose when your items are 
                    delivered is convenient, especially for individuals 
                    with busy schedules or for businesses that need 
                    to receive shipments at specific times.
                </div>
                <div className="content middle bold-inline">
                    Reliability
                </div>
                <div className="content">
                    Flexible same-day and scheduled delivery 
                    services are reliable and can deliver items 
                    on time, even if there are unforeseen 
                    circumstances or delays.
                </div>
              <div className="column-footer" >
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>


            <Grid item xs={12} md={4}>
                <UsaMap/>
                <img src={require('../../assets/home/home2.png')}  style={{width:"80%",margin:"auto"}}></img>
                <div className="content middle bold-inline">
                    Tracking
                </div>
                <div className="content ">
                    Our flexible same-day and scheduled 
                    delivery services offer tracking options, 
                    so you can see exactly where your 
                    delivery is at any given time.
                </div>

            </Grid>

            <Grid item xs={12} md={4}>
                <img src={require('../../assets/home/home3.png')}  style={{width:"80%",margin:"auto"}}></img>
                <div className="content middle bold-inline">
                    Flexibility
                </div>
                <div className="content ">
                    Flexible same-day and scheduled 
                    delivery services allow you to choose 
                    the delivery date and time that works 
                    best for you

                </div>
                <div className="content middle bold-inline">
                    Customer Satisfaction
                </div>
                <div className="content ">
                    Flexible delivery can help to improve 
                    customer satisfaction by ensuring 
                    timely and reliable delivery of 
                    packages.
                </div>

              <div className="column-footer">
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>
        </Grid>
      </Container>
      
     
    </div>

    <BlueSection></BlueSection>
    <BeforeFooter></BeforeFooter>
    

  </div>
</>
  );
}

export default Flexible;
