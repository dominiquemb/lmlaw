import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PathMap from "../animated-path-map"

function SameDayDelivery() {


  return (
    <>
    <div style={{ marginTop:"5%",padding:"0 5vw", paddingBottom:"10vh"}} >
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} sm={7} style={{ marginTop:"5%"}}  >
          <h1 className="circle-h1  textLeft big-title"  >Ground Transportation</h1>
          <p className="circle-text textLeft" >
            We provide unique business solutions and educated decisions along a set of ground transportation services, expedite, same day, and less than truck load. Providing transparency and visibility into every single shipment and delivery. 
          </p>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={5} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:" auto"
           }} src={require('../../assets/Mv3.png')} alt="delivery signature" />

           </div>
        </Grid>

      </Grid>

      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>

        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"4vh auto"
        }} src={require('../../assets/ground-images/ground1.png')} alt="delivery signature" />

            <h2 className="centered">Door-To-Door Delivery</h2>
           </div>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"4vh auto"
           }} src={require('../../assets/ground-images/ground2.png')} alt="delivery signature" />
            <h2 className="centered">Warehouse Shipping</h2>
           </div>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"4vh auto"
        }} src={require('../../assets/ground-images/ground3.png')} alt="delivery signature" />

            <h2 className="centered">Ground Transportation</h2>

           </div>
        </Grid>

      </Grid>


    </div>
    <div className="circle-container what-we-offer" id="circle-container">
      <div className="screen screen-3"  style={{height:"fit-content" , border:0}}>

<div className="top-semicircle semicircle-white">
  <h2  className="circle-h2 schedule" style={{textAlign:"center"  }}>Time Critical Specialists</h2>
</div>


<Container maxWidth="xl" disableGutters style={{padding:40}}>
 

  
<p className="content" style={{marin:"auto",width:"70%"}}>
    AAA Delivery Service handles time-sensitive shipments and deliveries with our massive fleet and partner carrier network, providing solutions for any urgent need and on-time critical transportation to all 48 states nationwide.
</p>
 


  <Grid container>
    <Grid item xs={12} md={6}>
 
      <Grid container className="" style={{margin:"auto"}} >
        <Grid item xs={2} md={2}>
        <img  style={{width:"60%"}} src={require('../../assets/head-images/head1.png')} alt="Blue Logo" />
        </Grid>
        <Grid item xs={10} md={10}>
          <h2>Specialized Networkk</h2>
          <div className="content textLeft" >
            We have the couriers, the vehicles, and technology alongside our massive fleet and partner carrier network to meet your logistics need. We have the experiences that are effective to your business and your customers. We provide a set of ground transportation services, same-day, expedite, and less than truck load, providing transparency and visibility into every single shipment and delivery.
          </div>
        </Grid>
      </Grid>

    </Grid>
    <Grid item xs={12} md={6}>
 
 <Grid container className="" style={{margin:"auto"}} >
   <Grid item xs={2} md={2} >
   <img  style={{width:"60%"}} src={require('../../assets/head-images/head6.png')} alt="Blue Logo" />
   </Grid>
   <Grid item xs={10} md={10}>
     <h2>Reliable Partners</h2>
     <div className="content textLeft" >
      We blend advanced technologies with a network of 
      carriers to move your freight-simply and reliably. Put the 
      power of AAA behind your shipments and deliveries, with 
      a partner that’s here to meet the demands of today, and 
      help you navigate the road ahead. We’re always there to 
      help you propel your transportation delivery capabilities 
      forward. Learn why so many companies choose AAA.
     </div>
   </Grid>
 </Grid>

</Grid>

  </Grid>
  <Grid container>
    <Grid item xs={12} md={6}>
 

      <Grid container className="" style={{margin:"auto"}} >
        <Grid item xs={2} md={2}>
          <img  style={{width:"60%"}} src={require('../../assets/head-images/head5.png')} alt="Blue Logo" />
        </Grid>
        <Grid item xs={10} md={10}>
          <h2>Our Technology</h2>
          <div className="content textLeft" >
            Our customized fully integrated software allows accurate, in-depth order tracking, POD capture, and audit trails. Driver tracking and geofencing to ensure physical delivery. Barcode scanning, signature, and photo capture. Detailed records of all events along order lifecycle. API / EDI integrations for connected sales and real-time order updates. Customizable automatic order alerts and updates via text or email. Web portal allowing you to place and track orders. Delivery performance insights in real-time dashboard.
          </div>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} md={6}>
 

 <Grid container className="" style={{margin:"auto"}} >
   <Grid item xs={2} md={2}>
   <img  style={{width:"60%"}} src={require('../../assets/head-images/head4.png')} alt="Blue Logo" />
   </Grid>
   <Grid item xs={10} md={10}>
     <h2>Our Portal</h2>
     <div className="content textLeft" >
      Our online portal is easy and convenient to use, 
      seamlessly place and track orders all in one central hub. 
      Schedule and customize a pickup from anywhere with accurate ETA, 
      available from any-device. Get the visibility and insights you need 
      with order tracking and reporting functionality. Auto-verified addresses 
      to ensure delivery accuracy. Piece-level and invoice reference tracking 
      and detailed notes available. View signature or photo-based PODs for each 
      order and actual arrival time. <a className='red-link' href='/speak-to-a-specialist'> Online Portal .</a>
     </div>
   </Grid>
 </Grid>
</Grid>

  </Grid>

  <p className="content" style={{marin:"auto",width:"70%"}}>
    We are always available 24/7/365 at any time of the day, during weekends, and all holidays. No matter when, our team of specialists are always available to assist you. To learn more, pleas follow the link.  <a className='red-link' href='/speak-to-a-specialist'>Register Here.</a> 
  </p>

  <Grid container>
      <Grid item xs={12} md={4} sx={{display:{xs:"none" , md:"block"}}} >
        <img  style={{width:"100%"  }} src={require('../../assets/ground-images/ground4.png')} alt="Blue Logo" />
      </Grid>
      <Grid item xs={12} md={4}>
        <img  style={{width:"100%"  }} src={require('../../assets/ground-images/ground5.png')} alt="Blue Logo" />
      </Grid>
      <Grid item xs={12} md={4} sx={{display:{xs:"none" , md:"block"}}} >
        <img  style={{width:"100%"  }} src={require('../../assets/ground-images/ground3.png')} alt="Blue Logo" />
      </Grid>

    </Grid>

</Container>


      </div>
      <h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}>Reliability! Safety! Transparency! Visibility!</h2>


      </div>

      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} sm={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
        <Box  style={{margin:"auto"}} >
            <h2>Order Tracking In Real-Time</h2>
              <div className="content textLeft" >
                Gain visibility on every single shipment and delivery, GPS tracking in real-time, on a live map through the entire process and accurate ETA. Automatic order alerts and updates via text or email, POD for each order and actual arrival time. 
              </div>
        </Box>
        <Box  style={{margin:"auto"}} >
            <h2>Transparency & Visibility</h2>
              <div className="content textLeft" >
                We breathe transparency into every single shipment and delivery through innovative technologies. Our software allows our customers to keep all their shipments and deliveries information at their fingertips.
              </div>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
              <PathMap></PathMap>
        </Grid>           
      </Grid>

    </>
  );
}

export default SameDayDelivery;
