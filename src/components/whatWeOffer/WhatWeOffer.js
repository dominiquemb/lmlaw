import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import back from '../../assets/blue-column.PNG';


function WhatWeOffer() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [message, setMessage] = React.useState("");

  const updateValue = (func, value) => {
    if (func) {
      func(value);
    }
  };

  return (
    <>
    <div id='map-and-dropdown'>
    <Grid container  style={{ marginBottom:"10vh" , height:"80vh"}}>
          <Grid item xs={12} md={6} style={{ marginTop:"30vh"}}  >

          <h1 className="circle-h1 circle-text"  style={{color:"#666 " , width:"75%",margin:"auto" }}>Partner With AAA Reliable Same-Day Delivery & Courier Service</h1>
              <h2 className="circle-h2 circle-text" style={{color:"#666 "}}>
              Providing you peace of mind
              </h2>
            
          
              
          </Grid>
          <Grid item xs={0} md={6} style={{  backgroundImage: `url(${back})`  , backgroundRepeat:"no-repeat" , backgroundPosition:"right" }}>
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

        <div className="screen screen-2" style={{height:"fit-content" , borderBottom:0}}>
          <div className="top-semicircle semicircle-white">
            <p>
              We understand that each business requirements can change from
              day-to-day, that's why AAA DELIVERY SERVICE offers indispensable
              customized logistics to fit and adapt to your business needs.
              Providing you peace of mind.
            </p>
          </div>

          <Container maxWidth="xl" disableGutters>
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className="centered circle small-circle smallest">
                  Picture insert here
                </div>
                <div className="content middle">Medical Industry</div>
                <div className="content middle-subheader">Reliability</div>
                <div className="content">
                  <ul>
                    <li>✓ Place and track orders all in one central hub</li>
                    <li>
                      ✓ Schedule and customize a pickup, available from anywhere
                      with any-device
                    </li>
                    <li>
                      ✓ Order tracking & geofencing in real-time dashboard
                    </li>
                    <li>
                      ✓ API / EDI integrations for connected sales & real-time
                      order updates
                    </li>
                    <li>✓ HIPPA compliant & OSHA certified</li>
                    <li>✓ Customer support around the clock 24/7/365</li>
                  </ul>
                </div>

                <div className="column-footer"  style={{marginBottom:"15vh"}}>
                  <a
                    className="button-link speak-to-a-specialist-link"
                    href="#"
                  >
                    <button className="round-button round-button-blue">
                      Learn More
                    </button>
                  </a>
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="centered circle small-circle smallest">
                  Picture insert here
                </div>
                <div className="content middle">Freight Industry</div>
                <div className="content middle-subheader">Dependability</div>
                <div className="content">
                  <ul>
                    <li>
                      ✓ Customzied logistics to fit and adapt to your business
                    </li>
                    <li>
                      ✓ Reliability, experience, one-to-one approach, delivery
                      always on time, no excuses
                    </li>
                    <li>
                      ✓ Dependable service you can always count on, and
                      professionalism on every delivery
                    </li>
                    <li>✓ On-demand, same-day delivery & courier service</li>
                    <li>
                      ✓ Professional, committed fully vetted Couriers by uniform
                    </li>
                    <li>
                      ✓ Custom notification of package delivery status, based on
                      your preference
                    </li>
                  </ul>
                </div>
                <div className="column-footer" style={{marginBottom:"25vh"}}>
                  <a
                    className="button-link speak-to-a-specialist-link"
                    href="#"
                  >
                    <button className="round-button round-button-blue">
                      Learn More
                    </button>
                  </a>
                </div>
              </Grid>
            </Grid>
          </Container>

          <div className="bottom-semicircle semicircle-blue"></div>
        </div>

        <div className="screen screen-3"  style={{height:"fit-content" , border:0}}>
      <div className="top-semicircle semicircle-white">
          <h2 className="circle-h2">Fleet Optimization</h2>
      </div>

      <Container maxWidth="xl" disableGutters>
        <div className="content" style={{width:"80%",margin:"auto"}}>
        We understand how time consuming and expensive it is to own, operate and manage a fleet of vehiles, and the cost of insurance due to accidents, not to mention managing couriers alone is an expensive undertaking. That's why at AAA our specialists take on these burdens for you, providing you with responsive, flexible service keeping you focused on your core business.
            <br /><br />
        </div>


        <Grid container>
            <Grid item xs={12} md={4}>
              <Box className="content" style={{width:"80%" , margin:"auto",marginRight:{ xs: 'auto', sm: 0, md: 0 }}} >
                  <h3>Augment Your Fleet</h3>
                    <div>
                    AAA can step in on-demand, same-day to help you deliver your delivery needs. Partner with us, so we can augment your fleet, let us become an extension of your company. Our fleet is ready to help you ramp up your operations so you can meet the growing demands of your business.
                    </div>
                </Box>
                
                
                
                
            </Grid>


            <Grid item xs={0} md={4}>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
>
            <img  style={{width:"100%"  }} src={require('../../assets/blue-circles.PNG')} alt="Blue Logo" />

            </Box>
            </Grid>

            <Grid item xs={12} md={3}>
                <Box className="content" style={{width:"80%" , margin:"auto",marginRight:{ xs: 'auto', sm: 0, md: 0 }}} >
                  <h3>Replace Your Fleet</h3>
                    <div>
                    Supplement your fleet to a team of specialists to ensure you meet the demands of your customers. We have the couriers, the right vehicles and AAA provides you with advanced technology, live tracking, proof of delivery, and the fastest, reliable delivery option in the industry.
                    </div>
                </Box>
                
                
                
            </Grid>
            <div className="column-footer" style={{display:"block",marginBottom:50,width:"100%"}}>
                  <a className="button-link" href="#"  style={{marginLeft:50}}>
                    <button className="round-button round-button">
                      Get Started
                    </button>
                  </a>
                  <a className="button-link" href="#" style={{float:"right",marginRight:50}}>
                    <button className="round-button round-button">
                      Get Started
                    </button>
                  </a>
                </div>
        </Grid>
      </Container>

    </div>


       
        <div className="screen screen-4" style={{height:"fit-content" , paddingBottom:'10vh'}}>
          <div className="top-semicircle semicircle-white">
            <h2 className="circle-h2">
              Schedule On Demand Or Recurring Deliveries
            </h2>
          </div>

          <Container maxWidth="xl" disableGutters>
            <Grid container>
              <Grid item xs={12} md={3}>
                <div className="content">
                  AAA is here to help and ready to step right in, whether you
                  need to expand or supplement your fleet. Our fleet is ready to
                  help you ramp up your operations, so you can meet the growing
                  demands of your business.
                </div>
                <div className="column-footer" style={{marginBottom:"10vh"}}>
                  <a className="button-link" href="/speak-to-a-specialist">
                    <button className="round-button round-button">
                      Get Started
                    </button>
                  </a>
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
              <video
                width="640"
                height="320"
                style={{ width: "80%" ,height:"80%" }}
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
              </Grid>

              <Grid item xs={12} md={3}>
                <div className="content">
                  Partner with us, let us become an extension of your company.
                  We will reduce cost of your aging fleet by supplementing or
                  replacing your fleet with AAA fleet replacement propelling
                  your same-day deliveries capabilities.
                </div>
                <div className="column-footer">
                  <a
                    className="button-link speak-to-a-specialist-link"
                    href="/speak-to-a-specialist"
                  >
                    <button className="round-button round-button light-blue-bg">
                      Get started
                    </button>
                  </a>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
}

export default WhatWeOffer;
