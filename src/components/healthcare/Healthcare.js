import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PathMap from "../animated-path-map"


function SameDayDelivery() {


  return (
    <>
    <div style={{ marginTop:"5%",padding:"0 5vw"}} >
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} sm={7} style={{ marginTop:"5%"}}  >
          <h1 className="circle-h1  textLeft big-title"  >Healthcare Courier Services</h1>
          <p className="circle-text textLeft" >
            We provide you with reliability, experience, and professionalism on every delivery. With our same-day courier services, you are guaranteed faster, safer, and on-time deliveries.
          </p>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={5} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:" auto"
           }} src={require('../../assets/healthcare-images/healthcare.png')} alt="delivery signature" />

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


<Container maxWidth="xl" disableGutters style={{padding:40}}>

  
<h1  style={{ width :"80%", margin:"auto",textAlign:"center",paddingBottom:40 }}>Healthcare Businesses We Serve</h1>

<div >
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} sm={8} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <h1 className="circle-h1  textLeft big-title"  style={{}}>At Home Same-Day Delivery</h1>
          <p className=" textLeft" >
            At AAA, we provide same-day, door-to door delivery, so your small business can save time and money while offering customers flexible, and competitive shipping options.
          </p>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:" auto"
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
            margin:" auto"
           }} src={require('../../assets/same-day-images/same-day2.png')} alt="delivery signature" />

           </div>
        </Grid>
        <Grid item xs={12} sm={8} style={{ marginTop:"5%",padding:"0 5vw"}} order={{ xs: 1 , sm: 2 }} >
          <h2 className="  textLeft "  style={{}}>On-Demand Delivery</h2>
          <p className=" textLeft" >
            We provide you with reliability, experience, and professionalism on every delivery. With our same-day courier services, you are guaranteed faster, safer, and on-time deliveries. Simply place and track orders all in one place, reduce costs, save money, and improve inter office productivity, knowing your deliveries are in good hands with AAA, Providing you peace of mind. To learn more, please follow the link. Click Here 
          </p>
        </Grid>

      </Grid>
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} sm={8} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <h2 className="  textLeft"  style={{}}>Get Same-Day Local Delivery</h2>
          <p className="textLeft" >
            At AAA, we work with small and mid-size businesses, providing same-day deliveries from door-to-door, across town or across the country to enable an easy, cost-effective solution for urgent and same-day delivery, giving you more time to focus on running your business. Whether you need a primary delivery partner, or an occasional solution. AAA is an easy, flexible choice that’s as good for your customers, as it is for your bottom line.
          </p>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:" auto"
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
            margin:" auto"
           }} src={require('../../assets/same-day-images/same-day1.png')} alt="delivery signature" />

           </div>
        </Grid>

        <Grid item xs={12} sm={8} style={{ marginTop:"5%",padding:"0 5vw"}}  order={{ xs: 1, sm: 2 }} >
          <h2 className="  textLeft"  style={{}}>Get one-on-one support</h2>
          <p className=" textLeft" >
            We assign and provide a centralized account specialists to your Business, providing your company, a single point of contact for your day-to-day deliveries, to ensure you are getting quality, performance, and exceptional customer care. We take a fundamental approach to eliminate wasted time and deliver urgent goods, right when you need them most, providing quality expedited services. To learn more, please follow the link. Register Here 
          </p>
        </Grid>
      </Grid>
    </div>

</Container>


      </div>
        <div className="screen screen-4" style={{height:"fit-content" , paddingBottom:'10vh'}}>
          
          <div className="top-semicircle semicircle-blue">
        <h2  className="circle-h2 schedule" style={{textAlign:"center",  padding: "0 20vw"  }}>Reliability! Flexibility! Availability! Scalability!</h2>

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
