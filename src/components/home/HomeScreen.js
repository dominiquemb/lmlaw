import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";


function HomeScreen() {

  return ( 
    <>
    <div className="home">

      <div className="circle-container" id="circle-container">
        <div id="container-first-screen">
          <div id="quarter-circle-bottom-left">
            <div id="circle-container-home">
              <h1 id = "reliable" class="circle-h1 circle-text">
                Reliable Same-Day Delivery & Courier Service 
	            </h1>

              <h2 id = "providing"  class="circle-h2 circle-text">
                Providing you peace of mind
	            </h2>

              <Box  sx={{ display: { xs: 'none', sm: 'block' } }}>

              <h4 id = "deliver"  class="circle-h4 circle-text">
                Deliver your packages and cargo faster, safer, on-time every time from door-to-door, across town or across the country
              </h4>
              </Box>

              <div id="button-video">
                <span class="b">
                  <button id = 'home-first-button' class="round-button large-circle-button">
                    Get Started
                  </button>
                </span>
                <span class="b">
                <Box  sx={{ display: { xs: 'none', md: 'inline', lg: 'inline' } }}  >

                  <video id = "video" loop autoPlay muted>
                    <source src="https://www.aaadeliveryservice.com/wp-content/uploads/2022/07/AAADeliveryService-Final-V2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                  </Box>

                </span>

              </div>
            </div>
          </div>
        </div>



    <div className="screen screen-2" style={{height:'fit-content'}}>
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
                Healthcare Industry
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
              <div className="content" >
                We blend advanced technologies with a network of carriers to
                move your freight-simply and reliably. Put the power of AAA
                behind your shipments, with a partner that’s here to meet the
                demands of today, and help you navigate the road ahead.
                We’re always there to help you propel your capabilities
                forward. “Learn why so many companies choose AAA”.
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

    <div className="screen screen-3" style={{height:"fit-content"}}>
      <div className="top-semicircle semicircle-white">
          <h2 className="circle-h2">Why We Stand Out Above The Rest</h2>
      </div>

      <Container maxWidth="xl" disableGutters>
        <div className="content" style={{width:"75%", margin:"auto"}}>
          We have the couriers, the vehicles, and technology alongside our massive fleet and partner carrier network to meet
          your logistics needs. We have the experiences that make a difference to your business and your clients. We provide
          on-demand, reliable same-day delivery & courier service, on time critical transportation to <a style={{color:"red"}} href="/locations" > all 48 states nationwide.</a>
          Providing you with:<br /><br />
        </div>


        <Grid container style={{padding:20}}>
            <Grid item xs={12} md={4}>
                <div className="content">
                    <ul>
                      <li> ✓  Customized logistics to fit and adapt to your business needs</li>
                      <li> ✓  Order tracking & geofencing in real-time dashboard</li>
                      <li> ✓  Delivery always on time, no excuses</li>
                      <li> ✓  Customer support around the clock 24/7/365</li>
                    </ul>
                </div>

            </Grid>


            <Grid item xs={0} md={4}>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
>
            <img  style={{width:"100%"  }} src={require('../../assets/blue-circles.PNG')} alt="Blue Logo" />

            </Box>
            </Grid>

            <Grid item xs={12} md={4}>
                <div className="content">
                    <ul>
                      <li> ✓ Professional, fully vetted couriers by uniform</li>
                      <li> ✓ Reliable same-day delivery & courier service</li>
                      <li> ✓ On demand, and express same-day door-to-door delivery</li>
                      <li> ✓ Dependable service you can always count on, and professionalism on every delivery</li>
                    </ul>
                </div>

            </Grid>
        </Grid>
        <div className="column-footer" style={{display:"block", marginBottom:150,width:"100%" }}>
                  <a className="button-link" href="#"  style={{marginLeft:"15%"}}>
                    <button className="round-button round-button">
                      Get Started
                    </button>
                  </a>
                  <a className="button-link" href="#" style={{float:"right",marginRight:"15%"}}>
                    <button className="round-button round-button">
                      How it works
                    </button>
                  </a>
        </div>
      </Container>

        <div className="bottom-semicircle semicircle-white">
        </div>
    </div>

    <div className="screen screen-4" style={{height:"fit-content"}}>
        <div className="top-semicircle semicircle-blue">
            <h2 className="circle-h2">Adapting to your business</h2>
        </div>

        <Container maxWidth="xl" disableGutters>


          <Grid container>
              <Grid item xs={12} md={4}>
                  <div className="content">
                    AAA is here to help and ready to step right in, whether you need to expand or supplement your fleet. Our fleet is ready to help you ramp up your operations, so you can meet the growing demands of your business.
                  </div>
                  <div className="column-footer" style={{marginBottom:120}}>
                    <a className="button-link" href="/speak-to-a-specialist"><button className="round-button round-button">Get Started</button></a>
                  </div>
              </Grid>


              <Grid item xs={12} md={4}>
                  <video   width="320" height="240" style={{margin: 'auto', width: '80%', display: 'block'}} loop autoPlay muted>
                    <source src="https://www.aaadeliveryservice.com/wp-content/uploads/2022/07/AAADeliveryService-Final-V2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </Grid>

              <Grid item xs={12} md={4}>
                  <div className="content">
                    Partner with us, let us become an extension of your company. We will reduce the cost of your aging fleet by supplementing or replacing your fleet with AAA fleet replacements, propelling your same-day delivery capabilities.
                  </div>
                  <div className="column-footer" style={{marginBottom:120}}>
                    <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button light-blue-bg">How It Works</button></a>
                  </div>
              </Grid>
          </Grid>
        </Container>

      </div>

    </div>
  </div>
</>
  );
}

export default HomeScreen;
