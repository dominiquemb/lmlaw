import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {UsaMap} from "./Map.js"
import UsaStatesSelect from "./UsaStatesDropDown";
import ScrollAnimation from 'react-animate-on-scroll';
import "../../assets/animate.css";
import BeforeFooter from "../BeforeFooter.js";
import OrderTracking from "../order-tracking";

function Locations() {
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

    <div id='map-and-dropdown'>

    <Grid container  style={{marginTop:100}}>
    <h1 className="circle-text" style={{width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
      We are currently serving all 48 states nationwide.
    </h1>

          <Grid item xs={12} md={3}>
          <div className="circle-white"
           style={{width:"90%" , margin : "auto" ,height:"fit-content"  }}>
            <Box sx={{ marginTop :{xs : 0 , md :"20vh"}}} >

              <UsaStatesSelect></UsaStatesSelect>

            </Box>
            
          </div>
              
          </Grid>
          <Grid item xs={12} md={6}>
          <div className="rounded-corners" style={{width:"90%" , margin : "auto"}}>
            <div className="us-map">
              <UsaMap></UsaMap>
            </div>
            
          </div>
              
          </Grid>
          <Grid item xs={12} md={3}>
          <div className="circle-white"
           style={{width:"90%" , margin : "auto" ,height:"fit-content"  }}>
          
            
          </div>
              
          </Grid>
    </Grid>

    </div>

    <div className="screen screen-2" style={{height:'fit-content'}}>


    <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
      <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
        Advantages Of Partnering With AAA Delivery Service
      </h1>

      <Grid container>
          <Grid item xs={12} md={4}>
              <img src={require('../../assets/home/home1.png')}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                Experience
              </div>
              <div className="content ">
                AAA Delivery Service has years of 
                experience in optimizing medical 
                courier systems for laboratories, 
                hospitals, and healthcare providers. 
                We help you streamline your logistics 
                processes, optimize your delivery routes, 
                and improve your overall delivery performance.

              </div>
              <div className="content middle bold-inline">
                Reliable and Efficient
              </div>
              <div className="content">
                AAA has a reputation for being 
                reliable and efficient, providing 
                timely and accurate delivery services 
                to businesses and individuals. This can 
                help ensure that your products are 
                delivered on time and in good condition, 
                which can improve customer satisfaction and loyalty.

              </div>
            <div className="column-footer" >
              <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
            </div>
          </Grid>


          <Grid item xs={12} md={4}>
              <img src={require('../../assets/home/home2.png')}  style={{width:"80%",margin:"auto" , opacity:0}}></img>
              <img src={require('../../assets/home/home2.png')}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                Cost Saving
              </div>
              <div className="content ">
                We have a proven track record of 
                using our experience and customized 
                routing software to help our customers 
                save 10-30% on courier costs. We conduct a 
                thorough evaluation of your existing courier 
                system, analyze the data we gather, and identify 
                your opportunities to save.

              </div>

          </Grid>

          <Grid item xs={12} md={4}>
              <img src={require('../../assets/home/home3.png')}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                Delivery Options
              </div>
              <div className="content ">
                AAA offers a variety of delivery 
                options to meet your business needs, 
                including stat delivery, flexible same-day 
                delivery, overnight/next-day delivery, 
                and scheduled route deliveries. This can 
                help you meet the varying needs of your 
                customers and streamline your logistics processes.

              </div>
              <div className="content middle bold-inline">
                Improved Customer Service
              </div>
              <div className="content ">
                AAA can help you improve your 
                customer service by providing real-time 
                tracking and delivery notifications. This 
                can help you keep your customers informed 
                about their deliveries, reduce the number 
                of missed deliveries, and improve overall 
                customer satisfaction.

              </div>

            <div className="column-footer">
              <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
            </div>
          </Grid>
      </Grid>
    </Container>

    <div className="screen screen-3" style={{height:"fit-content"}}>

<div className="top-semicircle semicircle-white">
    <div className="circle-h2">

    </div>
</div>


<div style={{maxWidth:"90vw",margin:"auto"}} >

<Grid container>
<Grid item xs={12} md={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
<img className="invert" style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/industries-we-serve/industries9.png')} alt="delivery signature" />
</Grid>

<Grid item xs={12} md={4}  sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
              <h2 style={{textAlign:"center"}} className="middle bold-inline">
                Scalability

              </h2>
              <div className="content ">
                Our national presence, alongside 
                our massive fleet and partner carrier 
                network, allows you to grow your business 
                without the added stress, extra restrictions 
                or capital expenses associated with smaller 
                or in-house fleet. 
              </div>
              <div className="content ">
                We actively apply our combined 100+ years of 
                experiences and advanced technologies to create 
                a custom, optimized, and cost-efficient courier 
                model to improve your company and support growth. 
                To learn more, please follow the link.  <a className='red-link' href='/how-it-works'>Learn more.</a>  

              </div>
</Grid>
<Grid item xs={12} md={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} >
<img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={require('../../assets/industries-we-serve/industries9.png')} alt="delivery signature" />
</Grid>


</Grid>

<p className="subheading content">
  We are always available 24/7/365 at any time of the day, during weekends, and all holidays. No matter
  when, our team of specialists are always available to assist you. To learn more. <a className='red-link' href='/speak-to-a-specialist'>Register here.</a>
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
<h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}>Flexibility! Adaptability! Quality! Responsibility!
</h2>



</div>

      

<OrderTracking></OrderTracking>



    </>
  );
}

export default Locations;
