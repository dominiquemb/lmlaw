import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";


export default function BlueSection(){
    return <>
    
    <div className="circle-container what-we-offer" id="circle-container">
      <div className="screen screen-3"  style={{height:"fit-content" , border:0}}>

<div className="top-semicircle semicircle-white">
    <div className="circle-h2">

    </div>
</div>

<div className="screen screen-3" style={{height:"fit-content"}}>
<h2  className=" schedule " style={{textAlign:"center"  }}>Guaranteed On-Time Delivery, Shipping Nationwide</h2>


<div style={{maxWidth:"90vw",margin:"auto"}} >

<Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>

  <Grid justifyContent="center" item xs={12} md={6} >
    <div style={{width: '100%'}}>

     <img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/industries-we-serve/industries4.png')} alt="delivery signature" />

     </div>
  </Grid>

  <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
    <h2 class="  textLeft">Why Choose AAA?</h2>
    <p className=" textLeft" >
      We are all about the long term, delivering value through customer focus leadership.
      Every day, we provide our customers with a full spectrum of quality same-day delivery
      services, where packages reach its destination in a fraction of time. We partner with
      hundreds of couriers available all over the United States to deliver fast, safely, and
      efficiently, regardless of where points A and B might be.  <a className='red-link' href='/what-we-offer'>What we offer.</a>
    </p>
  </Grid>
</Grid>
<Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
<Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
    <h2 class="  textLeft">Scalability</h2>
    <p className=" textLeft" >
      Our national presence, alongside our massive fleet and partner carrier network, 
      allows you to grow your business without the added stress, extra restrictions or 
      capital expenses associated with smaller or in-house fleet. We actively apply our 
      combined 100+ years of experiences and advanced technologies to create a custom, 
      optimized, and cost-efficient courier model to improve your company and support growth. 
      To learn more, please follow the link. <a className='red-link' href='/about-us'>Learn more.</a>
    </p>
  </Grid>
  <Grid justifyContent="center" item xs={12} md={6} >
    <div style={{width: '100%'}}>

    <img style={{
    display:'block',
    width:"80%",
    margin:"auto"
    }} src={require('../../assets/industries-we-serve/industries9.png')} alt="delivery signature" />

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
    }} src={require('../../assets/industries-we-serve/industries5.png')} alt="delivery signature" />

    </div>
  </Grid>
  <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
    <h2 class="  textLeft">How It Works</h2>
    <p className=" textLeft" >
      Contact us to discuss your needs, review options and provide feedback. Get your
      custom solutions, track your shipments and deliveries in real-time throughout
      the entire prosses, by gaining visibility over the shipments journey. Our team of
      specialists are ready to help you ramp up your operations, so you can meet the
      growing demands of your business, propelling your same-day capabilities
      forward.  <a className='red-link' href='/how-it-works'>How It Works.</a>
    </p>
  </Grid>

</Grid>

<Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>

<Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
    <h2 class="  textLeft">Get one-on-one support</h2>
    <p className=" textLeft" >
      We assign and provide a centralized account specialists alongside our dedicated
      dispatchers and fully vetted couriers to your business. Providing your company,
      a single point of contact for your day-to-day delivery needs, to ensure you are
      getting quality, performance, and exceptional customer care. We take a
      fundamental approach to eliminate wasted time and deliver urgent goods, right
      when you need them most, providing you peace of mind. To learn more, please follow the link.  <a className='red-link' href='/speak-to-a-specialist'>Get Started.</a>
    </p>
  </Grid>
  <Grid justifyContent="center" item xs={12} md={6} >
    <div style={{width: '100%'}}>

     <img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/industries-we-serve/industries6.png')} alt="delivery signature" />

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
    
        </>
}