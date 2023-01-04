import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormTextFields from "./Form";
import BeforeFooter from "../BeforeFooter";
import home_page_top_right from "../../assets/blue-column.png"
import OrderTracking from "../order-tracking";



function SpeakToASpecialist() {

 
  return <>
  <Container maxWidth="xl" disableGutters style={{maxWidth:"100%" , backgroundImage: `url(${home_page_top_right})`  , backgroundRepeat:"no-repeat" , backgroundPosition:"right" , backgroundSize : "auto  100%" , marginTop:80 , marginRight:80}}>
      <Grid container
>
          <Grid item 
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
          xs={12} md={6} style={{padding:30 , height:"fit-content"}}>


                <h1  class = "circle-h1" style={{
                  letterSpacing:3,
                  fontWeight:500,
                  textAlign:"center"
                }}>Ready To Speak To A Specialist?</h1>
                <p style={{
                  fontWeight:600,
                }}>
                  Provide us with some basic information so we can learn more about
                  your business delivery needs, so one of our logistics specialists
                  can craft and customize a solution for your business.
                </p>


                <div  style={{width:"80%" , margin:"auto" , borderWidth:20 , borderRadius:10 }}>
                  <video
                    style={{width:"100%" }}
                    loop
                     autoPlay 
                    muted
                  >
                    <source
                        src={require('../../assets/videos/AAADeliveryService-Final-V2.mp4')}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.

                  </video>
                </div>

          </Grid>

        <Grid item xs={12} md={6} >
        <div  >
        <div  style={{margin:"10%"}}>
            <FormTextFields />
          </div>
        </div>
          
                
        </Grid>
      </Grid>
  </Container>

  <div className="screen screen-2" style={{height:'fit-content' , backgroundColor:"#367bdc" , color:"white", marginBottom:20}}>


      <div className="top-semicircle semicircle-white">
          <div className="circle-h2" >
          <h1 style={{width :"80%", margin:"auto",textAlign:"center" , color:"black" }}>What You Can Expect from Us</h1>

          </div>
      </div>


      <p className="content" style={{
                  fontWeight:600,
                  width:"80%",
                  margin:"auto",
                  color:"white"
                }}>
                  Once you’re in our system, you are ready to start, simply place and track orders all in one place. Schedule and customize a pick up from
                  anywhere, available from any device. Visibility and insights, order tracking & geofencing in real-time dashboard. Signature or photobase PODs for each order, alongside the scheduled an actual arrival time.
                </p>


      <Container maxWidth="xl" disableGutters>

        <Grid container style={{marginTop:50,marginBottom:200}}>
            <Grid item xs={12} md={6}>
              <div style={{width:"80%" , margin:"auto"}} >
                <h2>
                Things you can do from our portal:
                </h2>
                <ul  className="checked">
                    <li >
                      Place and track orders all in one central hub.
                    </li>

                    <li >
                      Schedule and customize any pickup.
                    </li>

                    <li >
                      Gain visibility and insights.
                    </li>

                    <li >
                      View order tracking in real-time dashboard.
                    </li>
                    <li >
                      View signature or photo-base PODs for each order.
                    </li>
                    <li >
                      Create and maintain a private address book.
                    </li>
                    <li >
                      View, customize and print reports of your shipping history.
                    </li>
                    <li >
                      Create EZ-ship commands, enabling you to ship instantly with just a couple of keystrokes.
                    </li>
                    <li >
                      Customize how you are notified of package delivery status.
                    </li>
                </ul>
              </div>

            </Grid>


            <Grid item xs={12} md={6}>
            <div  style={{width:"80%" , margin:"auto"  ,  borderRadius:10 }}>
                  <video
                    style={{width:"100%" }}
                    loop
                     autoPlay
                    muted
                    controls
                  >
                    <source
                        src={require('../../assets/videos/aaa4-1080p-221016.mp4')}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.

                  </video>
                </div>
            </Grid>

            
        </Grid>
      </Container>
      
      <div className="bottom-semicircle semicircle-white">
      </div>
  </div>

  <div className="screen screen-2" style={{height:"fit-content",marginBottom:"3vw"}}>
  <div className="top-semicircle semicircle-white">
          <div className="circle-h2" >
          <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , color:"black"  }}>Why choose AAA?</h1>

          </div>
      </div>


      <Container maxWidth="xl" disableGutters style={{marginBottom:150}}>
        <div className="content" style={{width:"80%" , margin:"auto"}}>
          AAA is more than a delivery service. We are a business enabler, our primary objective is customer satisfaction,
          reliability, on-time deliveries, and with our custom one-to-one approach means we always deliver on time,
          every time. We will become your trusted business partner, delivering the things that matter most. We provide:
          <br /><br />
        </div>


        <Grid container >
            <Grid item xs={12} md={4}>
                <div className="content" style={{width:"90%" }}>
                    <ul className="checked">
                      <li>  Reliability, experience, one-to-one approach, delivery always on time, no excuses</li>
                      <li>   Order tracking & geofencing in real-time dashboard</li>
                      <li>   On-demand, and express same-day door-to-door delivery</li>
                      <li>   Dependable service you can always count on.</li>
                      <li>   Customer support around the clock 24/7/365</li>
                    </ul>
                </div>

            </Grid>


            <Grid item xs={0} md={4} >
            <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
>
            <img  style={{width:"100%"  }} src={require('../../assets/Mv3.png')} alt="Blue Logo" />

            </Box>
            </Grid>

            <Grid item xs={12} md={4} >
                <div className="content" style={{width:"90%" }}>
                    <ul className="checked">
                      <li>  Dedicated, fully vetted couriers by uniform</li>
                      <li>  Custom logistics to fit and adapt to your business</li>
                      <li>  Professionalism on every delivery</li>
                      <li>  Transparency and visibility into every single shipment</li>
                      <li>  Custom notification of package delivery status, based on your preference</li>
                    </ul>
                </div>

            </Grid>
        </Grid>
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



      </Container>



    </div>


  <div>

  <div style={{width:"100%", backgroundColor:"#367bdc" }}>
  
    <div className="top-semicircle semicircle-white" style={{borderRadius:"0px 0px 100% 100%"}}>
    </div>

    <div className="content" style={{width:"80%",margin:"auto",paddingTop:"3em",paddingBottom:150, color:"white"}}>
          Our goal is to provide our customers with the utmost reliable, dependable and
          professionalism on every delivery, keeping your focus on your core business.
          Knowing your deliveries are in good hands with AAA.
          <br /><br />
    </div>

    <Grid container className="screen-3">
      <Grid item xs={12} md={4} sx={{display:{xs:"none" , md:"block"}}} >
        <img  style={{width:"100%"  }} src={require('../../assets/speak-to-a-specialist/speak1.png')} alt="Blue Logo" />
        <h2 className="centered" >Medical Laboratories</h2>
      </Grid>
      <Grid item xs={12} md={4}>
        <img  style={{width:"100%"  }} src={require('../../assets/speak-to-a-specialist/speak2.png')} alt="Blue Logo" />
        <h2 className="centered" >Hospitals & Health Systems</h2>

      </Grid>
      <Grid item xs={12} md={4} sx={{display:{xs:"none" , md:"block"}}} >
        <img  style={{width:"100%"  }} src={require('../../assets/speak-to-a-specialist/speak3.png')} alt="Blue Logo" />
        <h2 className="centered" >Pharmacies</h2>

      </Grid>

    </Grid>

  </div>

  <h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}>Delivery Always On Time! Every Time! No Excuses!</h2>


    <OrderTracking/>
  </div>





  </>
  
}

export default SpeakToASpecialist;

