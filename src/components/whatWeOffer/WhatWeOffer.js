import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
      <div className="circle-container what-we-offer" id="circle-container">
        <div className="screen-1 screen">
          <div className="large-circle circle-white">
            <div className="circle-header">
              <h1 className="circle-h1 circle-text">
                Partner With AAA Reliable Same-Day Delivery & Courier Service
              </h1>
              <h4 className="circle-h4 circle-text">
                Providing you peace of mind
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

          <div className="bottom-semicircle semicircle-white">
            <div className="bottom-text">
              Indispensable custom-built delivery & courier services for your
              business.
            </div>
          </div>
        </div>

        <div className="screen screen-2">
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

                <div className="column-footer">
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
                <div className="column-footer">
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

        <div className="screen screen-3">
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
                  <strong>Augment Your Fleet</strong>
                </div>
                <div className="content">
                  AAA can step in on-demand, same-day to help you deliver your
                  delivery needs. Partner with us, so we can augment your fleet,
                  let us become an extension of your company. Our fleet is ready
                  to help you ramp up your operations so you can meet the
                  growing demands of your business.
                </div>
                <div className="column-footer">
                  <a className="button-link" href="#">
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
                  <strong>Replace Your Fleet</strong>
                </div>
                <div className="content">
                  Supplement your fleet to a team of specialists to ensure you
                  meet the demands of your customers. We have the couriers, the
                  right vehicles and AAA provides you with advanced technology,
                  live tracking, proof of delivery, and the fastest, reliable
                  delivery option in the industry.
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

        <div className="screen screen-4">
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
                <div className="column-footer">
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
                style={{ width: "640px" }}
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
