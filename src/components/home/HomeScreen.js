import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function HomeScreen() {

  return ( 
    <>
    <div className="home">
      <div className="circle-container" id="circle-container">
      <div className="screen-1 screen">
        <div className="large-circle">
          <div className="circle-header">
            <h1 className="circle-h1 circle-text">Reliable Same-Day Delivery & Courier Service</h1>
            <h2 className="circle-h2 circle-text">Providing you peace of mind</h2>
            <h4 className="circle-h4 circle-text">Deliver your packages and cargo faster, safer, on-time every time from door-to-door, across town or across the country</h4>
          </div>
          <a className="get-started-button" href="#"><button className="round-button large-circle-button">Get Started</button></a>
          <div className="circle-video">
            <video width="320" height="240" style={{width: '430px'}} loop autoPlay muted>
              <source src="https://www.aaadeliveryservice.com/wp-content/uploads/2022/07/AAADeliveryService-Final-V2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
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
              <div className="column-footer">
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
              <div className="column-footer">
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>
        </Grid>
      </Container>
      
      <div className="bottom-semicircle semicircle-blue">
      </div>
    </div>

    <div className="screen screen-3">
      <div className="top-semicircle semicircle-white">
          <h2 className="circle-h2">Why We Stand Out Above The Rest</h2>
      </div>

      <Container maxWidth="xl" disableGutters>
        <div className="content">
            We provide on-demand, reliable same-day delivery & courier service, on time critical transportation to all 48 states nationwide. Our team, technology, and company marked vehicles provide you with:
            <br /><br />
        </div>


        <Grid container>
            <Grid item xs={12} md={4}>
                <div className="content">
                    <ul>
                      <li> ✓  Customized logistics to fit and adapt to your business needs</li>
                      <li> ✓  Order tracking & geofencing in real-time dashboard</li>
                      <li> ✓  Delivery always on time, no excuses</li>
                      <li> ✓  Customer support around the clock 24/7/365</li>
                    </ul>
                </div>
                <div className="column-footer">
                  <a className="button-link" href="/speak-to-a-specialist"><button className="round-button round-button">Get Started</button></a>
                </div>
            </Grid>


            <Grid item xs={12} md={4}>
                <div className="moving-circles">
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
                <div className="content">
                    <ul>
                      <li> ✓ Professional, fully vetted couriers by uniform</li>
                      <li> ✓ Reliable same-day delivery & courier service</li>
                      <li> ✓ On demand, and express same-day door-to-door delivery</li>
                      <li> ✓ Dependable service you can always count on, and professionalism on every delivery</li>
                    </ul>
                </div>
                <div className="column-footer">
                  <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button light-blue-bg">How It Works</button></a>
                </div>
            </Grid>
        </Grid>
      </Container>

        <div className="bottom-semicircle semicircle-white">
        </div>
    </div>

    <div className="screen screen-4">
        <div className="top-semicircle semicircle-blue">
            <h2 className="circle-h2">Adapting to your business</h2>
        </div>

        <Container maxWidth="xl" disableGutters>


          <Grid container>
              <Grid item xs={12} md={4}>
                  <div className="content">
                    AAA is here to help and ready to step right in, whether you need to expand or supplement your fleet. Our fleet is ready to help you ramp up your operations, so you can meet the growing demands of your business.
                  </div>
                  <div className="column-footer">
                    <a className="button-link" href="/speak-to-a-specialist"><button className="round-button round-button">Get Started</button></a>
                  </div>
              </Grid>


              <Grid item xs={12} md={4}>
                  <video width="320" height="240" style={{margin: 'auto', width: '430px', display: 'block'}} loop autoPlay muted>
                    <source src="https://www.aaadeliveryservice.com/wp-content/uploads/2022/07/AAADeliveryService-Final-V2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </Grid>

              <Grid item xs={12} md={4}>
                  <div className="content">
                    Partner with us, let us become an extension of your company. We will reduce the cost of your aging fleet by supplementing or replacing your fleet with AAA fleet replacements, propelling your same-day delivery capabilities.
                  </div>
                  <div className="column-footer">
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
