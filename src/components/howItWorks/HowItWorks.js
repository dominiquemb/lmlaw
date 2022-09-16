import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BlueLogo from "../../assets/logo-blue.png"

function HowItWorks() {
  return (
    <>
      <div className="circle-container what-we-offer" id="circle-container">
        <div className="screen-1 screen"  style={{ border:0}}>
          <div className="large-circle circle-white">
            <div className="circle-header" style={{bottom:770}}>
              <h1 className="circle-h1 circle-text">How It Works</h1>
              <h2 className="circle-h2 circle-text">
                Seamlessly Place and Track Orders All In One Place
              </h2>
              <img style={{width:400 , display:"block",margin:"auto"}}src={require('../../assets/logo-blue.png')} alt="Blue Logo" />
              <h3 className="circle-h3 circle-text">Get Started Here</h3>
              <h4 className="circle-h4 circle-text">
                Our team is up for every job, managing projects with the skills
                and experience our clients have come to expect. We thrive on our
                commitment, safety and professionalism. At AAA we make it easy
                and convenient on every delivery.
              </h4>
            </div>
          </div>

          <div className="speak-to-a-specialist-form light-blue-bg rounded-corners box-shadow" style={{width:"fit-content"}}>
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

          <div id="small-circle-container" className="small-circle-container">
            <div className="circle small-circle small-circle-1">
              Picture insert
            </div>

            <div className="circle small-circle small-circle-2">
              Picture insert
            </div>

            <div className="circle small-circle small-circle-3">
              Picture insert
            </div>
          </div>
        </div>


        <div className="screen screen-3"  style={{height:"fit-content" , border:0}}>
      <div className="top-semicircle semicircle-white">
          <h2 className="circle-h2">Schedule And Customize A Delivery</h2>
      </div>

      <Container maxWidth="xl" disableGutters>
        <div className="content" style={{width:"80%",margin:"auto"}}>
        Our online portal is easy and convenient to use, seamlessly place and track orders all in one place. Schedule and customize a pickup from anywhere with accurate ETA, available from any-device. View signature or photo-based PODs for each order and actual arrival time.
            <br /><br />
        </div>


        <Grid container>
            <Grid item xs={12} md={4}>
                <div className="content" style={{width:"80%"}}>
                  <h3>What To Expect On Every Pick Up</h3>
                    <div>
                    Accurate, in-depth order tracking, POD capture, audit trails, and geofencing to ensure physical delivery. Professionalism on every delivery with our fully vetted Couriers by uniform and identification badges. "Delivery always on time, no excuses".
                    </div>
                </div>
                
                <div className="content" style={{width:"80%"}}>
                  <h3>Order Tracking In Real-Time</h3>
                    <div>
                    Gain visibility on every pick-up and delivery on our display monitor, GPS tracking in real-time on a live map. Automatic order alerts and updates via text or email, signature or photo-based PODs for each order and actual arrival time. 
                    </div>
                    
                </div>
                
                
            </Grid>


            <Grid item xs={12} md={4}>
                <div className="moving-circles" style={{position:"relative" , marginLeft:0 }}>
                  <div 
                    className="circle light-blue-bg medium-circle moving-circle-1"
                    style={{
                      position: 'absolute',
                      top: 50,
                      left: 0,
                      zIndex: 5,
                    }}
                    >
                    Moving circle 1
                  </div>
                  <div
                  className="circle light-blue-bg medium-circle moving-circle-2"
                  style={{
                    position: 'absolute',
                    top: 140,
                    left: -50,
                    zIndex: 4,
                  }}
                  >
                    Moving circle 2
                  </div>
                  <div
                  className="circle light-blue-bg medium-circle moving-circle-3"
                  style={{
                    position: 'absolute',
                    top: 140,
                    left: 150,
                    zIndex: 2,
                  }}
                  >
                    Moving circle 3
                  </div>
                  <div
                  className="circle light-blue-bg medium-circle moving-circle-4"
                  style={{
                    position: 'absolute',
                    top: 15,
                    left: 100,
                    zIndex: 1,
                  }}
                  >
                    Moving circle 4
                  </div>
                  <div
                  className="circle light-blue-bg medium-circle moving-circle-5"
                  style={{
                    position: 'absolute',
                    top:210,
                    left: 50,
                    zIndex: 3,
                  }}
                  >
                    Moving circle 5
                  </div>
                </div>
            </Grid>

            <Grid item xs={12} md={4}>
            <div className="content" style={{width:"80%"}}>
                  <h3>Customize Your Order Confirmation</h3>
                    <div>
                    API / EDI integrations, automatic order alerts and updates via text or email. In-depth order tracking, signature or photo-based PODs capture for each order. "Customize how you receive Order Confirmation"
                    </div>
                </div>
                
                <div className="content" style={{width:"80%"}}>
                  <h3>Rate Your Experience</h3>
                    <div>
                    Let us know how we are doing, because we are committed to continue being the leading logistics solutions provider to our customers. Constantly improving & implementing quality management to achieve it.
                    </div>
                   
                </div>
                
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


    <div className="screen screen-4" style={{height:"fit-content" , border:0}}>
        <div className="top-semicircle semicircle-blue">
        </div>

        <Container maxWidth="xl" disableGutters>


          <Grid container>
              <Grid item xs={12} md={3.5}>
                <div className="content">
                  <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../../assets/warehouse-left.jpg')} alt="Blue Logo" />
                </div>
              </Grid>


              <Grid item xs={12} md={5}>
                <div className="content">
                  <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../../assets/plane.jpg')} alt="Blue Logo" />
                </div>
              </Grid>

              <Grid item xs={12} md={3.5}>
                <div className="content">
                  <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../../assets/warehouse-right.jpg')} alt="Blue Logo" />
                </div>
              </Grid>
          </Grid>
        </Container>

      </div>

      </div>
    </>
  );
}

export default HowItWorks;
