import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import home_page_top_right from '../../assets/home_page_top_right.png';


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
    <Grid container  style={{ marginBottom:"10vh", marginTop:"10vh" , height:"80vh"}}>
          <Grid item xs={12} md={6} style={{ marginTop:"30vh"}}  >

          <h1 className="circle-h1 circle-text"  style={{color:"#666 " , width:"75%",margin:"auto" }}>Partner With AAA Reliable Same-Day Delivery & Courier Service</h1>
              <h2 className="circle-h2 circle-text" style={{color:"#666 "}}>
                Knowing your deliveries are safe and in good hands with AAA
              </h2>
            
          
              
          </Grid>
          <Grid item xs={0} md={6} style={{  backgroundImage: `url(${home_page_top_right})`  , backgroundRepeat:"no-repeat" , backgroundPosition:"right" , backgroundSize : "auto  100%" }}>
          <Box className="content" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}  >

          <div className="speak-to-a-specialist-form rounded-corners" style={{width:"fit-content" }}>
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
        <h1 style={{ width :"80%", margin:"auto",paddingTop:40,textAlign:"center" ,marginBottom:30}}>
      Indispensable Custom-Built Delivery & Courier Services for Your Business
    </h1>


        <div className="content" style={{width:"80%",margin:"auto"}}>
              We understand that each business requirements can change from
              day-to-day, that's why AAA DELIVERY SERVICE offers indispensable
              customized logistics to fit and adapt to your business needs.
              Providing you peace of mind. 
            <br /><br />
        </div>


          <Container maxWidth="xl" disableGutters style={{padding:30}}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className="centered circle small-circle smallest">
                <img src={require('../../assets/medical-symbol.png')}  style={{width:"80%"}}></img>
                </div>
                <div className="content middle">Medical Industry</div>
                <div className="content middle-subheader">Reliability</div>
                <div className="content">
                  <ul>
                    <li>✓ FMCSA, HIPPA compliant, and OSHA certified</li>
                    <li>
                      ✓ Visibility on every pick-up and delivery, GPS tracking in real-
time, on a live map through the entire process
                    </li>
                    <li>
                      ✓ Place and track shipments all in one central hub, API / EDI
Integrations for order updates
                    </li>
                    <li>
                      ✓ Schedule and customize a pickup, available from anywhere
with any-device
                    </li>
                    <li>✓ Custom notification of package delivery status, based on
your preference</li>
                  </ul>
                </div>

                
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="centered circle small-circle smallest">
                <img src={require('../../assets/freight-symbol.png')}  style={{width:"80%"}}></img>
                </div>
                <div className="content middle">Freight Industry</div>
                <div className="content middle-subheader">Dependability</div>
                <div className="content">
                  <ul>
                    <li>
                      ✓ Transparency and visibility into every single shipment through
cutting-edge technology
                    </li>
                    <li>
                      ✓ Reliability, experience, one-to-one approach, delivery
                      always on time, no excuses
                    </li>
                    <li>
                      ✓ Dependable service you can always count on, and
                      professionalism on every delivery
                    </li>
                    <li>✓ Cost-efficient LTL shipping services, FTL services for large
shipments that require dedicated shipping</li>
                    <li>
                      ✓ Customer support around the clock 24/7/365
                    </li>

                  </ul>
                </div>

              </Grid>
            </Grid>
          </Container>

        </div>

        <div className="screen screen-3"  style={{height:"fit-content" , border:0}}>

      <div className="top-semicircle semicircle-white">
          <div className="circle-h2">
          <h1 style={{ width :"80%", margin:"auto",textAlign:"center" }}>Fleet Optimization</h1>

          </div>
      </div>


      <Container maxWidth="xl" disableGutters style={{padding:40}}>
        <div className="content" style={{width:"80%",margin:"auto"}}>
        We understand how time consuming and expensive it is to own, operate and manage a fleet of vehiles, and the cost of insurance due to accidents, not to mention managing couriers alone is an expensive undertaking. That's why at AAA our specialists take on these burdens for you, providing you with responsive, flexible service keeping you focused on your core business.
            <br /><br />
        </div>


        <Grid container>
            <Grid item xs={12} md={3.5}>
              <Box className="content" style={{margin:"auto"}} >
                  <h3>Augment Your Fleet</h3>
                    <div>
                    AAA can step in on-demand, same-day to help you deliver your delivery needs. Partner with us, so we can augment your fleet, let us become an extension of your company. Our fleet is ready to help you ramp up your operations so you can meet the growing demands of your business.
                    </div>
                </Box>
                
                
                
                
            </Grid>


            <Grid item xs={0} md={5}>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
>
              <img  style={{width:"100%"  }} src={require('../../assets/Mv2.png')} alt="Blue Logo" />

            </Box>
            </Grid>

            <Grid item xs={12} md={3.5}>
                <div className="content" style={{margin:"auto"}} >
                  <h3>Replace Your Fleet</h3>
                    <div>
                    Supplement your fleet to a team of specialists to ensure you meet the demands of your customers. We have the couriers, the right vehicles and AAA provides you with advanced technology, live tracking, proof of delivery, and the fastest, reliable delivery option in the industry.
                    </div>
                </div>
                
                
                
            </Grid>
        </Grid>

      </Container>
          <div className="column-footer" style={{display:"block", marginBottom:150,width:"100%" }}>
                  <a className="button-link" href="/speak-to-a-specialist"  style={{marginLeft:"8%" , marginRight:0}}>
                    <button className="round-button round-button">
                      Get Started
                    </button>
                  </a>
                  <a className="button-link" href="/how-it-works" style={{float:"right",marginRight:"8%" , marginLeft:0}}>
                    <button className="round-button round-button">
                      How it works
                    </button>
                  </a>
        </div>

    </div>


       
        <div className="screen screen-4" style={{height:"fit-content" , paddingBottom:'10vh'}}>
          
          <div className="top-semicircle semicircle-blue">
        <h2  className="circle-h2" style={{padding:20,textAlign:"center" }}>Schedule On Demand Or Recurring Deliveries</h2>

        </div>


          <Container maxWidth="xl" disableGutters style={{padding:40}}> 
            <Grid container>
              <Grid item xs={12} md={3}>
                <div className="content">
                  Our portal is easy and convenient to use,
                  whether it’s on-demand or on a recurring
                  scheduling. We customize and adapt our
                  logistics service for your day-to-day, minute-
                  to-minute operational delivery needs. We
                  provide you with upfront pricing, accurate
                  ETA on every pickup and delivery, real-time
                  package tracking and instant delivery
                  confirmation, based on your preference
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
              <video  loop autoPlay muted style={{  borderRadius:10  , width:"80%"}}>
                
                <source
                  src="https://www.aaadeliveryservice.com/wp-content/uploads/2022/07/AAADeliveryService-Final-V2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              </Grid>

              <Grid item xs={12} md={3}>
                <div className="content">
                  We give you total control over the sending
                  and receiving of your packages, without
                  the added stress of managing each
                  delivery. Simply place and track orders all
                  in one place. Reduce your costs, save
                  money, and improve inter-office
                  productivity. Knowing your deliveries are
                  safe and in good hands with AAA. Providing
                  you peace of mind.
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
