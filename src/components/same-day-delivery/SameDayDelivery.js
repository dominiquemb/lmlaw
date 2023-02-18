import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import home_page_top_right from '../../assets/blue-column.png';
import PathMap from "../animated-path-map"


function SameDayDelivery() {


  return (
    <>
    <div >
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} sm={8} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <h1 className="circle-h1 circle-text textLeft "  style={{}}>At Home Same-Day Delivery</h1>
          <p className=" textLeft" >
            At AAA, we provide same-day, door-to door delivery, so your small business can save time and money while offering customers flexible, and competitive shipping options.
          </p>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"auto"
           }} src={require('../../assets/same-day-images/same-day1.png')} alt="delivery signature" />

           </div>
        </Grid>

      </Grid>
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}> 
        <Grid justifyContent="center" item xs={12} sm={4} order={{ xs: 2 , sm: 1 }}>
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"auto"
           }} src={require('../../assets/same-day-images/same-day2.png')} alt="delivery signature" />

           </div>
        </Grid>
        <Grid item xs={12} sm={8} style={{ marginTop:"5%",padding:"0 5vw"}} order={{ xs: 1 , sm: 2 }} >
          <h2 className=" circle-text textLeft "  style={{}}>On-Demand Delivery</h2>
          <p className="textLeft" >
            We provide you with reliability, experience, and professionalism on every delivery. With our same-day courier services, you are guaranteed faster, safer, and on-time deliveries. Simply place and track orders all in one place, reduce costs, save money, and improve inter office productivity, knowing your deliveries are in good hands with AAA, Providing you peace of mind. To learn more, please follow the link. <a className='red-link' href='/how-it-works'>Click Here.</a> 
          </p>
        </Grid>

      </Grid>
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} sm={8} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <h2 className=" circle-text textLeft"  style={{}}>Get Same-Day Local Delivery</h2>
          <p className=" textLeft" >
            At AAA, we work with small and mid-size businesses, providing same-day deliveries from door-to-door, across town or across the country to enable an easy, cost-effective solution for urgent and same-day delivery, giving you more time to focus on running your business. Whether you need a primary delivery partner, or an occasional solution. AAA is an easy, flexible choice that’s as good for your customers, as it is for your bottom line.
          </p>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"auto"
           }} src={require('../../assets/same-day-images/same-day3.png')} alt="delivery signature" />

           </div>
        </Grid>

      </Grid>
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid justifyContent="center" item xs={12} sm={4} order={{ xs: 2, sm: 1 }} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"auto"
           }} src={require('../../assets/same-day-images/same-day1.png')} alt="delivery signature" />

           </div>
        </Grid>

        <Grid item xs={12} sm={8} style={{ marginTop:"5%",padding:"0 5vw"}}  order={{ xs: 1, sm: 2 }} >
          <h2 className=" circle-text textLeft"  style={{}}>Get one-on-one support</h2>
          <p className=" textLeft" >
            We assign and provide a centralized account specialists 
            to your Business, providing your company, a single point 
            of contact for your day-to-day deliveries, to ensure you 
            are getting quality, performance, and exceptional customer 
            care. We take a fundamental approach to eliminate wasted time 
            and deliver urgent goods, right when you need them most, providing 
            quality expedited services. To learn more, please follow the link.  <a className='red-link' href='/speak-to-a-specialist'>Register Here.</a> 
          </p>
        </Grid>
      </Grid>
    </div>
    <div className="circle-container what-we-offer" id="circle-container">
      <div className="screen screen-3"  style={{height:"fit-content" , border:0}}>

<div className="top-semicircle semicircle-white">
    <div className="circle-h2">

    </div>
</div>


<Container maxWidth="xl" disableGutters style={{padding:40}}>

  
<h1  style={{ width :"80%", margin:"auto",textAlign:"center",paddingBottom:40 }}>Why Choose AAA?</h1>

 


  <Grid container>
    <Grid item xs={12} md={6}>
 
      <Grid container className="" style={{margin:"auto"}} >
        <Grid item xs={2} md={2}>
        <img  style={{width:"60%"}} src={require('../../assets/head-images/head1.png')} alt="Blue Logo" />
        </Grid>
        <Grid item xs={10} md={10}>
          <h2>Dedicated Team</h2>
          <div className="content textLeft" >
            Our team of specialists and our fully vetted couriers are here to help and ready to step right in, whether you need to expand or supplement your fleet. Our team of specialists are ready to help you ramp up your operations, so you can meet the growing demands of your same-day deliveries. Register Here 
          </div>
        </Grid>
      </Grid>
      <Grid container className="" style={{margin:"auto"}} >
        <Grid item xs={2} md={2}>
          <img  style={{width:"60%"}} src={require('../../assets/head-images/head3.png')} alt="Blue Logo" />
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
   <img  style={{width:"60%"}} src={require('../../assets/head-images/head2.png')} alt="Blue Logo" />
   </Grid>
   <Grid item xs={10} md={10}>
     <h2>Dedicated Couriers</h2>
     <div className="content textLeft" >
       Our couriers are trained and meet all necessary requirements in the proper handling and transportation of small and midsize cargo. Our couriers are incompliant with FMCSA, HIPPA and OSHA certified, and are equipped with barcode scanner, GPS, mobile data units, and identification badges.
     </div>
   </Grid>
 </Grid>
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
       with order tracking and reporting functionality. 
       Auto-verified addresses to ensure delivery accuracy. 
       Piece-level and invoice reference tracking and detailed notes available. 
       View signature or photo-based PODs for each order and actual arrival time. 
       <a className='red-link' href='https://aaa.e-courier.com/aaa/home/index.asp'> Online Portal .</a>
     </div>
   </Grid>
 </Grid>
</Grid>

  </Grid>

  <p className="content" style={{marin:"auto",width:"70%"}}>
  We are always available 24/7/365 at any time of the day, during weekends, and all holidays. No matter when, our team of specialists are always available to assist you. To learn more, please follow the link. <a className='red-link' href='/speak-to-a-specialist'>Register Here.</a> 

  </p>

  
  <Grid container>
      <Grid item xs={12} md={4} sx={{display:{xs:"none" , md:"block"}}} >
        <img  style={{width:"100%"  }} src={require('../../assets/same-day-images/same-day6.png')} alt="Blue Logo" />
      </Grid>
      <Grid item xs={12} md={4}>
        <img  style={{width:"100%"  }} src={require('../../assets/same-day-images/same-day8.png')} alt="Blue Logo" />
      </Grid>
      <Grid item xs={12} md={4} sx={{display:{xs:"none" , md:"block"}}} >
        <img  style={{width:"100%"  }} src={require('../../assets/same-day-images/same-day7.png')} alt="Blue Logo" />
      </Grid>

    </Grid>

</Container>


      </div>
        <div className="screen screen-4" style={{height:"fit-content" , paddingBottom:'10vh'}}>
          
          <div className="top-semicircle semicircle-blue">
        <h2  className="circle-h2 schedule" style={{textAlign:"center"  }}>Reliability! Flexibility! Availability! Scalability!</h2>

        </div>

        </div>
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
