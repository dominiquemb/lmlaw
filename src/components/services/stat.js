import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import home_page_top_right from '../../assets/blue-circles.png';
import "../../assets/animate.css";
import {UsaMap} from "../locations/Map.js"

import BlueSection from './blue-section.js';
import BeforeFooter from '../BeforeFooter';
function Stat() {

  return ( 
    <>
    <div className="home">
    <Grid container  style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} lg={6} style={{ paddingLeft:"5%",paddingRight:"5%"}}  >

            <h1 className="circle-h1 circle-text" style={{marginTop:0, paddingTop:"clamp(1cm,10vh,3cm)",paddingRight:"5%"}}  >
                Stat Delivery Service
	        </h1>

              <h4 className="circle-h4 circle-text">
                Our company provides fast and efficient STAT delivery services to meet the needs
                of our customers. When you choose our STAT delivery option, you can trust that
                your packages will be handled with the utmost care and attention, ensuring that
                they are delivered safely, quickly, and reliably. Register Here.
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
            What Is Stat Delivery Service?
        </h1>

        <p className="subheading content">
            STAT delivery service is a type of delivery service that is designed to handle urgent or time-sensitive packages. At AAA Delivery Service, we understand
            the importance of fast and reliable delivery, especially when it comes to time-sensitive packages. That is why we have put together a team of specialists
            and developed an advanced logistics system to handle even the most urgent deliveries with ease. When you choose our STAT delivery services, you can
            trust that your packages are in good hands and will be delivered safely, quickly, and reliably. No matter how urgent your delivery needs may be, our
            team has the expertise and resources to get the job done, providing you with the peace of mind and confidence that your packages will arrive on time
            and in perfect condition. Choose us for the best in speed and reliability.Speak To A Specialist.
        </p>

        <Grid container>
            <Grid item xs={12} md={4}>
                <img src={require('../../assets/home/home1.png')}  style={{width:"80%",margin:"auto"}}></img>
                <div className="content middle bold-inline">
                    Speed
                </div>
                <div className="content ">
                    The primary benefit of STAT delivery is the
                    speed at which packages and other items
                    are delivered. This is especially important
                    in emergency or critical care situations.
                </div>
                <div className="content middle bold-inline">
                    Flexibility
                </div>
                <div className="content">
                    STAT delivery services offer a range of
                    options, such as one hour or same-day
                    delivery, which allows customers to
                    choose the delivery speed that best
                    meets their needs.
                </div>
              <div className="column-footer" >
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>


            <Grid item xs={12} md={4}>
                <UsaMap/>
                <img src={require('../../assets/home/home2.png')}  style={{width:"80%",margin:"auto"}}></img>
                <div className="content middle bold-inline">
                    Reliability
                </div>
                <div className="content ">
                    STAT delivery services are very reliable, as
                    they prioritize speed and efficiency in order
                    to get packages to their destination as
                    quickly as possible. 
                </div>

            </Grid>

            <Grid item xs={12} md={4}>
                <img src={require('../../assets/home/home3.png')}  style={{width:"80%",margin:"auto"}}></img>
                <div className="content middle bold-inline">
                    Convenience
                </div>
                <div className="content ">
                    STAT delivery is often more convenient for
                    customers, as it allows them to receive
                    their packages faster than with standard
                    delivery options.
                </div>
                <div className="content middle bold-inline">
                    Customer Satisfaction
                </div>
                <div className="content ">
                    Stat delivery can help to improve
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

export default Stat;
