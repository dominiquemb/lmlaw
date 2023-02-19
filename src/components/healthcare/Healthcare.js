import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PathMap from "../animated-path-map"
import home_page_top_right from '../../assets/blue-circles.png';


function SameDayDelivery() {


  return (
    <div className="home" >
    <div style={{padding:"0 5vw" , paddingTop:"clamp(1cm,10vh,3cm)" }} >
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} sm={7}   >
          <h1 className="circle-h1  textLeft" style={{ marginTop:0}} >Healthcare Courier Services</h1>
          <p className="circle-text textLeft" >
            We provide you with reliability, experience, and professionalism on every delivery. With our same-day courier services, you are guaranteed faster, safer, and on-time deliveries.
          </p>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={5} >
        <Box className="content background-blue-circles" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} style={{  backgroundImage: `url(${home_page_top_right})`}} >

          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"90%",
            margin:" auto",
            borderRadius:"clamp(10px,3%,50px)",
            boxShadow:"1px 1px 6px -2px grey",

           }} src={require('../../assets/healthcare-images/healthcare.jpg')} alt="delivery signature" />

           </div>
          </Box>
        </Grid>

      </Grid>

      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>

        <Grid justifyContent="center" item xs={12} sm={4} >
          
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"4vh auto"
        }} src={require('../../assets/healthcare-images/healthcare1.png')} alt="delivery signature" />

            <h2 className="centered">Medical Laboratories</h2>
           </div>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"4vh auto"
           }} src={require('../../assets/healthcare-images/healthcare2.png')} alt="delivery signature" />
            <h2 className="centered">Hospitals & Health Systems</h2>
           </div>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"4vh auto"
        }} src={require('../../assets/healthcare-images/healthcare3.png')} alt="delivery signature" />

            <h2 className="centered">Pharmacies</h2>

           </div>
        </Grid>

      </Grid>


    </div>
    <div className="circle-container what-we-offer" id="circle-container">
      <div className="screen screen-3"  style={{height:"fit-content" , border:0}}>

<div className="top-semicircle semicircle-white">
    <div className="circle-h2">

    </div>
</div>

<div className="screen screen-3" style={{height:"fit-content"}}>


<div style={{maxWidth:"90vw",margin:"auto"}} >
<h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}>Why Choose AAA?</h2>

<Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
  <Grid justifyContent="center" item xs={12} md={6} >
    <div style={{width: '100%'}}>

     <img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/healthcare-images/healthcare4.png')} alt="delivery signature" />

     </div>
  </Grid>

  <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
    <h2 class="  textLeft">Medical Laboratories</h2>
    <p className=" textLeft" >
      We serve medical laboratories throughout the United States with our same-day, on-
      demand delivery services. Our couriers are trained and meet all necessary
      requirements in the proper handling and transportation of ambient, refrigerated,
      and frozen specimens. Our Couriers are in compliant with HIPPA guidelines and
      OSHA certified. Our couriers are equipped with Bio-hazardous coolers for ambient,
      refrigerated, and frozen specimens, spill kits, barcode scanner, GPS, mobile data
      units, and identification badges.  <a className='red-link' href='/how-it-works'>Learn more.</a>    </p>
  </Grid>
</Grid>
<Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
<Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
    <h2 class="  textLeft">Hospitals & Health Systems</h2>
    <p className=" textLeft" >
        Whether you need medical specimens, medical supplies, medical devices, health
    care equipment, prescription medications, x-rays, or any other exclusive equipment
    transported, with our fleet and extensive network, we can tailor a solution around
    your needs. We strengthen communities and enhance lives by delivering the things
    that matter, providing you with responsive, flexible service keeping you focused on
    your core business. To learn more, please follow the link. <a className='red-link' href='/speak-to-a-specialist'>Speak To A Specialist.</a>
    </p>
  </Grid>
  <Grid justifyContent="center" item xs={12} md={6} >
    <div style={{width: '100%'}}>

    <img style={{
    display:'block',
    width:"80%",
    margin:"auto"
    }} src={require('../../assets/healthcare-images/healthcare5.png')} alt="delivery signature" />

    </div>
  </Grid>

</Grid>
<Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
  <Grid justifyContent="center" item xs={12} md={6} >
    <div style={{width: '100%'}}>

     <img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/healthcare-images/healthcare6.png')} alt="delivery signature" />

     </div>
  </Grid>

  <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
    <h2 class="  textLeft">Pharmacy Companies</h2>
    <p className=" textLeft" >
      We take a customer-first approach to tailor a solution for your pharmacy, providing
      on-demand, same-day delivery and route services to enhance customer satisfaction
      and increase customer convenience through our same-day delivery services. We
      strengthen communities and enhance lives by delivering the things that matter.
      Providing faster, safer, on-time, deliveries from door-to-door, across town or across
      the country.  <a className='red-link' href='/what-we-offer'> What We Offer.</a>
    </p>
  </Grid>
</Grid>
<Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
  <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
    <h2 className="  textLeft"  style={{}}>Get one-on-one support</h2>
    <p className=" textLeft" >
      We assign and provide a centralized account specialists alongside our dedicated
      dispatchers and fully vetted couriers to your laboratory. Providing your company,
      a single point of contact for your day-to-day delivery needs, to ensure you are
      getting quality, performance, and exceptional customer care. We take a
      fundamental approach to eliminate wasted time and deliver urgent goods, right
      when you need them most, providing you peace of mind. To learn more, please
      follow the link.  <a className='red-link' href='/speak-to-a-specialist'>Get Started. </a>
    </p>
  </Grid>
  <Grid justifyContent="center" item xs={12} md={6} >
    <div style={{width: '100%'}}>

     <img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/healthcare-images/healthcare7.png')} alt="delivery signature" />

     </div>
  </Grid>

</Grid>
<p className="subheading content">
  We are always available 24/7/365 at any time of the day, during weekends, and all holidays. No matter
  when, our team of specialists are always available to assist you. To learn more.  <a className='red-link' href='/speak-to-a-specialist'>Register Here.</a>
</p>

</div>
<Grid container>
<Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
<img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/home/home8.png')} alt="delivery signature" />
</Grid>

<Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
<img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/home/home9.png')} alt="delivery signature" />
</Grid>
<Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} >
<img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/home/home10.png')} alt="delivery signature" />
</Grid>


</Grid>

  
</div>
      </div>
      <h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}>Delivery Always On Time! Every Time! No Excuses!</h2>

        
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

    </div>
  );
}

export default SameDayDelivery;
