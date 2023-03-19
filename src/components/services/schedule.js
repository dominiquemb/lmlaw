import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import home_page_top_right from '../../assets/blue-circles.png';
import "../../assets/animate.css";
import {UsaMap} from "../locations/Map.js"
import CircleMapPath from "../circle-animated-path-map";
import PathMap from "../animated-path-map"
import BlueSection from './blue-section.js';
import BeforeFooter from '../BeforeFooter';
function Schedule() {

  return ( 
    <>
    <div className="home">
    <Grid container  style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} lg={6} style={{ paddingLeft:"5%",paddingRight:"5%"}}  >

            <h1 className="circle-h1 circle-text" style={{paddingRight:"5%"}}  >
                Scheduled Route Delivery Services
            </h1>

            <p className="textLeft circle-text">
                Our route delivery service is a reliable solution for transporting packages to 
                multiple locations on a regular basis. You can easily schedule a delivery through 
                our convenient online portal, which is accessible from any device at any time. 
                Our delivery times are precise, so you can trust that your package will arrive 
                exactly when it is supposed to. <a className='red-link' href='/speak-to-a-specialist'>Get Started.</a>
            </p>

              
          </Grid>
          <Grid item xs={0} lg={6} >
          <Box className="content background-blue-circles" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} style={{  backgroundImage: `url(${home_page_top_right})`}} >

          <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{width:"80%" }}>

           <img style={{
            display:'block',
            width:"100%",
            margin:" auto",
            borderRadius:"clamp(10px,3%,50px)",
            boxShadow:"1px 1px 6px -2px grey",

           }} src={require('../../assets/path-map-static.png')} alt="delivery signature" />

          </div>

          </Box  >

              
          </Grid>

    </Grid>


    <div className="screen screen-2" style={{height:'fit-content'}}>


      <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
        <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
            What Is Scheduled Route Delivery Services?
        </h1>

        <p className="subheading content">
        A scheduled route delivery service is a type of delivery service in which packages are 
        transported along a predetermined route on a regular basis. Route delivery can be more 
        efficient and cost-effective compared to other types of delivery services, as it allows 
        for the optimization of routes and schedules. <a className='red-link' href='/how-it-works'> Learn more.</a>   
        </p>
        <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
            Advantages Of Scheduled Route Delivery Services
        </h1>

        <Grid container>
            <Grid item xs={12} md={4}>
                <img src={require('../../assets/home/home1.png')}  style={{width:"80%",margin:"auto"}}></img>
                <div className="content middle bold-inline">
                    Flexibility
                </div>
                <div className="content">
                  Our scheduled route delivery services offer 
                  the flexibility to customize routes and schedules 
                  to meet the specific needs of your business.​
                </div>
                <div className="content middle bold-inline">
                    Cost-effectiveness
                </div>
                <div className="content ">
                  Scheduling routes in advance allows for the optimization 
                  of routes and schedules, which can result 
                  in more efficient and cost-effective delivery.​
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
                    Scheduled route delivery ensures that 
                    packages will be delivered at the agreed 
                    upon time, which can improve customer 
                    satisfaction.
                </div>

            </Grid>

            <Grid item xs={12} md={4}>
                <img src={require('../../assets/home/home3.png')}  style={{width:"80%",margin:"auto"}}></img>
                <div className="content middle bold-inline">
                    Efficiency
                </div>
                <div className="content ">
                    Scheduling routes in advance allows for 
                    the optimization of routes and schedules, 
                    which can result in more efficient and 
                    cost-effective delivery.
                </div>
                <div className="content middle bold-inline">
                    Customer Satisfaction
                </div>
                <div className="content ">
                    Route delivery can help to improve 
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

export default Schedule;
