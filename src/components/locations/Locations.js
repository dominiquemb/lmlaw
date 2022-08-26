import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Locations() {
  return (
    <>
      <div className="circle-container locations" id="circle-container">
        <div className="screen-1 screen">
          <div className="large-circle circle-white">
            <div className="circle-header">
              <h1 className="circle-h1 circle-text">States We Serve</h1>
              <h4 className="circle-h4 circle-text">
                We are currently serving all 48 states nationwide.
              </h4>
              <p>
                "In the world of logistics, where most situations require
                timeliness, AAA is a must-have option to stay ahead of the
                competition".
              </p>
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
              <div className="screen screen-2">
                <div className="background"></div>

                <div className="top-semicircle semicircle-blue">
                  <h2 className="circle-h2">
                    Custom logistics. Indispensable service.
                  </h2>
                </div>

                <Container maxWidth="xl" disableGutters>
                  <div className="content">
                    We understand every business is different and can change
                    from day-to-day, that’s why we customize our logistics to
                    fit and adapt to your business needs.
                  </div>

                  <Grid container>
                    <Grid item xs={12} md={4}>
                      <div className="centered circle small-circle smallest">
                        Picture insert here
                      </div>
                      <div className="content middle">Medical Industry</div>
                      <div className="content middle-subheader">
                        Reliability
                      </div>
                      <div className="content">
                        We provide on-demand, reliable same-day delivery
                        service, delivering medical specimens, supplies,
                        interoffice mail, and x-rays. Our drivers are in
                        compliant with HIPPA guidelines and OSHA certified.
                        Providing on-the-ground insights, streamlined PODs,
                        tracking in real-time, geofencing to ensure driver is at
                        delivery location. “You See What We See”.
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

                    <Grid item xs={12} md={4}>
                      <div className="us-map">
                        <img src="https://www.aaadeliveryservice.com/wp-content/uploads/2022/05/usa-map-2.jpeg" />
                      </div>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <div className="centered circle small-circle smallest">
                        Picture insert here
                      </div>
                      <div className="content middle">Freight Industry</div>
                      <div className="content middle-subheader">
                        Dependability
                      </div>
                      <div className="content">
                        We provide express, same-day delivery service, on time
                        critical transportation to all 48 states nationwide.
                        Expediting packages, any size shipments delivered within
                        your city or across the country, same-day door-to-door
                        delivery. GPS tracking in real time, adaptable logistics
                        to fit your business needs. “Providing You Peace Of
                        Mind”.
                      </div>
                      <div className="column-footer">
                        <a
                          className="button-link speak-to-a-specialist-link"
                          href="/speak-to-a-specialist"
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

      </div>
    </>
  );
}

export default Locations;
