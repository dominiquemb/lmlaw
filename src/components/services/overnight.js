import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import home_page_top_right from '../../assets/blue-circles.png';
import "../../assets/animate.css";
import {UsaMap} from "../locations/Map.js"

import BlueSection from './blue-section.js';
import BeforeFooter from '../BeforeFooter';
function Overnight() {

  return ( 
    <>
    <div className="home">
    <Grid container  style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} lg={6} style={{ paddingLeft:"5%",paddingRight:"5%"}}  >

            <h1 className="circle-h1 textLeft" style={{paddingRight:"5%"}}  >
            Overnight <br/> Delivery Services
	        </h1>

            <p className="industries-paragraph" >
              We offer overnight courier services that assure timely 
              delivery of your urgent shipments on the very next day. 
              Our team of couriers and advanced technology enables us 
              to cater to any logistics requirement with ease. In addition, 
              our 24/7 customer service, renowned for its excellence, is always 
              ready to support you throughout the entire process. <a className='red-link' href='/speak-to-a-specialist'> Speak To A Specialist.</a>
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
            What Is Overnight Delivery Services?
        </h1>

        <p className="subheading content">
            Our overnight shipping service ensures that customers 
            receive their orders on the very next business day. 
            We specialize in providing high-quality shipping services 
            to companies during their busiest seasons, and we're committed 
            to delivering exceptional customer service, particularly when demand 
            is at its peak. <a className='red-link' href='/how-it-works'>Learn more.</a>    
        </p>

        <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
            Advantages Of Overnight <br/> Delivery Services
        </h1>

        <Grid container>
            <Grid item xs={12} md={4}>
                <img src={require('../../assets/home/home1.png')}  style={{width:"80%",margin:"auto"}}></img>
                <div className="content middle bold-inline">
                    Reliability
                </div>
                <div className="content ">
                    Overnight/next-day delivery services 
                    come with guaranteed delivery times, 
                    giving you peace of mind that your 
                    package will arrive when you need it to.
                </div>
                <div className="content middle bold-inline">
                    Increased Efficiency
                </div>
                <div className="content">
                    This shipping option can help businesses 
                    increase efficiency by allowing them to 
                    quickly deliver products to customers 
                    and minimize delays in their supply chain.

                </div>
              <div className="column-footer" >
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>


            <Grid item xs={12} md={4}>
                <UsaMap/>
                <img src={require('../../assets/home/home2.png')}  style={{width:"80%",margin:"auto"}}></img>
                <div className="content middle bold-inline">
                    Fast Delivery

                </div>
                <div className="content ">
                    Overnight/next-day delivery is the 
                    fastest shipping option available, 
                    which makes it ideal for urgent or 
                    time-sensitive deliveries.

                </div>

            </Grid>

            <Grid item xs={12} md={4}>
                <img src={require('../../assets/home/home3.png')}  style={{width:"80%",margin:"auto"}}></img>
                <div className="content middle bold-inline">
                    Convenience
                </div>
                <div className="content ">
                    This service is convenient for 
                    both the sender and the recipient, 
                    as it saves time and reduces the 
                    need for physical transportation.

                </div>
                <div className="content middle bold-inline">
                    Competitive advantage
                </div>
                <div className="content ">
                    Offering overnight/next-day delivery 
                    as a shipping option can give businesses 
                    a competitive advantage, as it can help 
                    them stand out from their competitors 
                    and attract more customers.

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

export default Overnight;
