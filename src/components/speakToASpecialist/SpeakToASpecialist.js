import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function SpeakToASpecialist() {
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
      <div
        className="circle-container speak-to-a-specialist"
        id="circle-container"
      >
        <div className="screen-1 screen">
          <div className="large-circle">
            <div className="circle-header">
              <h1 className="circle-h1 circle-text">
                Ready to Speak to a Specialist?
              </h1>
              <h4 className="circle-h4 circle-text">
                Provide us with some basic information so we can learn more
                about your business delivery needs, so one of our logistics
                specialists can craft and customize a solution for your
                business.
              </h4>
            </div>
            <div className="circle-video">
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
            </div>
          </div>

          <div className="speak-to-a-specialist-form light-blue-bg rounded-corners box-shadow">
            <form>
              <FormControl>
                <TextField
                  id="first-name"
                  label="First name"
                  value={firstName}
                  sx={{ margin: "5px" }}
                  onChange={(evt) =>
                    updateValue(setFirstName, evt.target.value)
                  }
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="last-name"
                  label="Last name"
                  value={lastName}
                  sx={{ margin: "5px" }}
                  onChange={(evt) => updateValue(setLastName, evt.target.value)}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="email"
                  label="Email"
                  sx={{ margin: "5px" }}
                  value={email}
                  onChange={(evt) => updateValue(setEmail, evt.target.value)}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="phone"
                  label="Phone"
                  sx={{ margin: "5px" }}
                  value={phone}
                  onChange={(evt) => updateValue(setPhone, evt.target.value)}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="company"
                  sx={{ margin: "5px" }}
                  label="Company"
                  value={company}
                  onChange={(evt) => updateValue(setCompany, evt.target.value)}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="address"
                  label="Address"
                  sx={{ margin: "5px" }}
                  value={address}
                  onChange={(evt) => updateValue(setAddress, evt.target.value)}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="city"
                  label="City"
                  sx={{ margin: "5px" }}
                  value={city}
                  onChange={(evt) => updateValue(setCity, evt.target.value)}
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="state"
                  label="State"
                  sx={{ margin: "5px" }}
                  value={state}
                  onChange={(evt) => updateValue(setState, evt.target.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  id="message"
                  sx={{ margin: "5px", marginBottom: "20px" }}
                  multiline
                  rows={4}
                  label="Message"
                  value={firstName}
                  onChange={(evt) => updateValue(setMessage, evt.target.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <a className="submit" href="#">
                  <button className="round-button large-circle-button">
                    Submit
                  </button>
                </a>
              </FormControl>
            </form>
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
          <div className="top-semicircle semicircle-blue">
            <h2 className="circle-h2">What You Can Expect From Us</h2>
          </div>

          <Container maxWidth="xl" disableGutters>
            <div className="content">
              Once you're in our system, you are ready to start, simply place
              and track orders all in one place. Schedule and customize a pick
              up from anywhere, available from any device. Visibility and
              insights, order tracking & geofrencing in real-time dashboard.
              Signature or photo-base PODs for each order, alongside the
              scheduled and actual arrival time.
            </div>

            <Grid container>
              <Grid item xs={12} md={6}>
                <h4>Thing you can do from our portal:</h4>
                <div className="content">
                  <ul>
                    <li>Place and track orders all in one central hub</li>
                    <li>Schedule and customize any pickup</li>
                    <li>Gain visibility and insights</li>
                    <li>
                      View order tracking & geofencing in real-time dashboard
                    </li>
                    <li>View signature or photo-base PODs for each order</li>
                    <li>Create and maintain a private address book</li>
                    <li>
                      View, customize and print reports of your shipping history
                    </li>
                    <li>
                      Create EZ-ship commands, enabling you to ship instantly
                      with just a couple of keystrokes
                    </li>
                    <li>
                      Customize how you are notified of package delivery status
                    </li>
                  </ul>
                </div>
              </Grid>

              {/* <Grid item xs={12} md={1}>
              </Grid> */}

              <Grid item xs={12} md={6}>
                <video
                  width="320"
                  height="240"
                  style={{ width: "430px", margin: "auto", display: "block" }}
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
            </Grid>
          </Container>

          <div className="bottom-semicircle semicircle-blue"></div>
        </div>

        <div className="screen screen-3">
          <div className="top-semicircle semicircle-white">
            <h2 className="circle-h2">Why We Stand Out Above The Rest</h2>
          </div>

          <Container maxWidth="xl" disableGutters>
            <div className="content">
              We provide on-demand, reliable same-day delivery & courier
              service, on time critical transportation to all 48 states
              nationwide. Our team, technology, and company marked vehicles
              provide you with:
              <br />
              <br />
            </div>

            <Grid container>
              <Grid item xs={12} md={3}>
                <div className="content">
                  <ul>
                    <li>
                      {" "}
                      ✓ Customized logistics to fit and adapt to your business
                      needs
                    </li>
                    <li>
                      {" "}
                      ✓ Order tracking & geofencing in real-time dashboard
                    </li>
                    <li> ✓ Delivery always on time, no excuses</li>
                    <li> ✓ Customer support around the clock 24/7/365</li>
                  </ul>
                </div>
                <div className="column-footer">
                  <div className="centered circle small-circle smallest">
                    Picture insert here
                  </div>
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
                <div className="content">
                  <ul>
                    <li> ✓ Professional, fully vetted couriers by uniform</li>
                    <li> ✓ Reliable same-day delivery & courier service</li>
                    <li>
                      {" "}
                      ✓ On demand, and express same-day door-to-door delivery
                    </li>
                    <li>
                      {" "}
                      ✓ Dependable service you can always count on, and
                      professionalism on every delivery
                    </li>
                  </ul>
                </div>
                <div className="column-footer">
                  <div className="centered circle small-circle smallest">
                    Picture insert here
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>

          <div className="bottom-semicircle">
            <div className="bottom-text">
              Our goal is to provide our customers with the utmost reliable,
              dependable and professional delivery serviee, keeping your on your
              core business, knowing your choices are in a prod branch with AAA.
            </div>
          </div>
        </div>

        <div className="screen screen-4">

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

export default SpeakToASpecialist;
