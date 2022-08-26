import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function HowItWorks() {
  return (
    <>
      <div className="circle-container how-it-works" id="circle-container">
        <div className="screen-1 screen">
          <div className="large-circle circle-white">
            <div className="circle-header">
              <h1 className="circle-h1 circle-text">How It Works</h1>
              <h2 className="circle-h2 circle-text">
                Seamlessly Place and Track Orders All In One Place
              </h2>
              <h3 className="circle-h3 circle-text">Get Started Here</h3>
              <h4 className="circle-h4 circle-text">
                Our team is up for every job, managing projects with the skills
                and experience our clients have come to expect. We thrive on our
                commitment, safety and professionalism. At AAA we make it easy
                and convenient on every delivery.
              </h4>
            </div>
          </div>

          <div className="speak-to-a-specialist-form light-blue-bg rounded-corners box-shadow">
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

        <div className="screen screen-2">
          <div className="top-semicircle semicircle-white">
            <h2 className="circle-h2">Fleet Optimization</h2>
          </div>

          <Container maxWidth="xl" disableGutters>
            <div className="content">
              We understand how time consuming and expensive it is to own,
              operate and manage a fleet of vehiles, and the cost of insurance
              due to accidents, not to mention managing couriers alone is an
              expensive undertaking. That's why at AAA our specialists take on
              these burdens for you, providing you with responsive, flexible
              service keeping you focused on your core business.
              <br />
              <br />
            </div>

            <Grid container>
              <Grid item xs={12} md={3}>
                <div className="content middle-subheader">
                  <strong>What to expect on every pickup</strong>
                </div>
                <div className="content">
                  Accurate, in-depth order tracking, POD capture, audit trails,
                  and geofencing to ensure physical delivery. Professionalism on
                  every delivery with our fully vetted Couriers by uniform and
                  identification badges. "Delivery always on time, no excuses".
                </div>
                <div className="content middle-subheader">
                  <strong>What to expect on every pickup</strong>
                </div>
                <div className="content">Order tracking in real-time</div>
                <div className="column-footer">
                  <a className="button-link" href="/speak-to-a-specialist">
                    <button className="round-button round-button">
                      Get Started
                    </button>
                  </a>
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="moving-circles">
                  <div
                    className="circle light-blue-bg medium-circle moving-circle-1"
                    style={{
                      position: "absolute",
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
                      position: "absolute",
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
                      position: "absolute",
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
                      position: "absolute",
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
                      position: "absolute",
                      top: 210,
                      left: 50,
                      zIndex: 3,
                    }}
                  >
                    Moving circle 5
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={3}>
                <div className="content middle-subheader">
                  <strong>Customize YOur Order Confirmation</strong>
                </div>
                <div className="content">
                  API / EDI integrations, automatic order alerts and updates via
                  text or email. In-depth order tracking, signature or
                  photo-based PODs capture for each order. "Customize how you
                  receive Order Confirmation"
                </div>
                <div className="content middle-subheader">
                  <strong>Rate Your Experience</strong>
                </div>
                <div className="content">
                  Let us know how we are doing, because we are committed to
                  continue being the leading logistics solutions provider to our
                  customers. Constantly improving & implementing quality
                  management to achieve it.
                </div>
                <div className="column-footer">
                  <a className="button-link" href="#">
                    <button className="round-button round-button">
                      Get Started
                    </button>
                  </a>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>


        <div className="screen screen-3">

          <div className="top-semicircle semicircle-blue">
            <h2 className="circle-h2">
            </h2>
          </div>

          <Container maxWidth="xl" disableGutters>
            <Grid container>
              <Grid item xs={12} md={4}>
                
              </Grid>

              <Grid item xs={12} md={4}>
                <div style={{textAlign: 'center'}}>Animation goes here</div>
              </Grid>

              <Grid item xs={12} md={4}>
             
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
