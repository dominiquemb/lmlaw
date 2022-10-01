import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormTextFields from "./Form";

function SpeakToASpecialist() {

 
  return <>
  <Container maxWidth="xl" disableGutters style={{maxWidth:"100%" , marginTop:80}}>
      <Grid container>
          <Grid item xs={12} md={8} style={{padding:30 , height:"fit-content"}}>
          <Box  sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}  >

            <div style={{
              background:"#367bdc" , 
              borderRadius:"50%" , 
              width:"100%" , 
              position:"relative",
              left:"-10vw",
              aspectRatio:1}}>
                <div style={{
                  position:"relative",
                  top:"20%",
                  left:"15%",
                  width:"60%",
                  right:0,

                }}>
                <h1 style={{
                  fontSize:"50px",
                  color:"white",
                  letterSpacing:3,
                  fontFamily:'fantasy',
                  fontWeight:500,
                  textShadow:"-3px 3px #000000",
                  textAlign:"center"
                }}>Ready To Speak To A Specialist?</h1>
                <p style={{
                  fontSize:20,
                  fontWeight:600,
                }}>
                  Provide us with some basic information so we can learn more about
                  your business delivery needs, so one of our logistics specialists
                  can craft and customize a solution for your business.
                </p>

                <Box  sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}  >

                <div  style={{width:"80%" , margin:"auto" , borderWidth:20 , borderStyle:"solid" , borderColor:"#8bbafb" , borderRadius:10 }}>
                  <video
                    style={{width:"100%" }}
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


               </div>               
            </div>
            </Box>
          </Grid>

        <Grid item xs={12} md={4} >
          <div style={{marginTop:80 , marginRight:80}}>
            <FormTextFields />
          </div>
                
        </Grid>
      </Grid>
  </Container>

  <div className="screen " style={{height:'fit-content'}}>
      <div className="background"></div>

      <div className="top-semicircle semicircle-blue">
        <h2 className="circle-h2">Custom logistics. Indispensable service.</h2>
      </div>

      <Container maxWidth="xl" disableGutters>
        <div className="content">
          We understand every business is different and can change from day-to-day, that’s why we customize our logistics to fit and adapt to your business needs.
        </div>

        <Grid container>
            <Grid item xs={12} md={4}>
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
              <div className="column-footer" style={{marginBottom:30}}>
                <a className="button-link speak-to-a-specialist-link" href="#"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>


            <Grid item xs={12} md={4}>
              {/* <div className="us-map">
                <img src="https://www.aaadeliveryservice.com/wp-content/uploads/2022/05/usa-map-2.jpeg" />
              </div> */}
            </Grid>

            <Grid item xs={12} md={4}>
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
              <div className="column-footer" style={{marginBottom:150}}>
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>
        </Grid>
      </Container>
      
      <div className="bottom-semicircle semicircle-blue">
      </div>
    </div>

  </>
  
}

export default SpeakToASpecialist;

