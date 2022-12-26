import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import home_page_top_right from '../../assets/home_page_top_right.png';
import "../../assets/animate.css";
import {UsaMap} from "../locations/Map.js"
import CircleMapPath from "../circle-animated-path-map";
import PathMap from "../animated-path-map"

function HomeScreen() {

  return ( 
    <>
    <div className="home">
    <Grid container  style={{ marginBottom:0, height:"fit-content"}}>
          <Grid item xs={12} lg={6} style={{ paddingLeft:"5%",paddingRight:"5%"}}  >

          <h1 className="circle-h1 circle-text"  >
                Reliable Same-Day Delivery & Courier Service 
	            </h1>

              <h4 className="circle-h4 circle-text">
                Deliver your packages and cargo faster, safer, on-time every time from door-to-door, across town or across the country
              </h4>

              
          </Grid>
          <Grid item xs={0} lg={6} >
          <Box className="content" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} style={{  backgroundImage: `url(${home_page_top_right})`  , backgroundRepeat:"no-repeat" , backgroundPosition:"right" , backgroundSize : "auto  100%" , padding:"50px 0"}} >

          <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{width:"80%" }}>
            <video  controls    autoPlay loop  muted style={{borderRadius:10  , width:"100%"  }}>
                      <source src="https://www.aaadeliveryservice.com/wp-content/uploads/2022/07/AAADeliveryService-Final-V2.mp4"  type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
          </div>

          </Box  >

              
          </Grid>

    </Grid>


    <div className="screen screen-2" style={{height:'fit-content'}}>


      <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
      <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>Guaranteed On-Time Delivery. Custom Logistics. Indispensable Service.</h1>

        <p className="subheading content">
          We understand every business is different and can change from day-to-day, that’s why we customize our logistics to fit and adapt to your business needs.
        </p>

        <Grid container>
            <Grid item xs={12} md={4}>
                <img src={require('../../assets/home/home1.png')}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                Healthcare Industry
              </div>
              <div className="content middle-subheader">
                Reliability
              </div>
              <div className="content textLeft">
                We provide on-demand, reliable same-day delivery service, delivering medical specimens,
                supplies, interoffice mail, and x-rays. Our drivers are in compliant with HIPPA guidelines
                and OSHA certified. Providing on-the-ground insights, streamlined PODs, tracking in real-time,
                 geofencing to ensure driver is at delivery location. <bold className="bold-inline">“You See What We See”</bold>.
              </div>
              <div className="column-footer" style={{marginBottom:30}}>
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>


            <Grid item xs={12} md={4}>
              <UsaMap/>
              <img src={require('../../assets/home/home2.png')}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                At Home
              </div>
              <div className="content middle-subheader">
                Availability
              </div>

            </Grid>

            <Grid item xs={12} md={4}>
              <img src={require('../../assets/home/home3.png')}  style={{width:"80%",margin:"auto"}}></img>

              <div className="content middle bold-inline">
                Freight Industry
              </div>
              <div className="content middle-subheader">
                Transparency
              </div>
              <div className="content textLeft" >
                We blend advanced technologies with a network of carriers to
                move your freight-simply and reliably. Put the power of AAA
                behind your shipments, with a partner that’s here to meet the
                demands of today, and help you navigate the road ahead.
                We’re always there to help you propel your capabilities
                forward. <bold className="bold-inline">“Learn why so many companies choose AAA”.</bold>
              </div>
              <div className="column-footer" style={{marginBottom:150}}>
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>
        </Grid>
      </Container>
      
     
    </div>

    <div className="screen screen-3" style={{height:"fit-content"}}>

      <div className="top-semicircle semicircle-white">
          <div className="circle-h2">
          <h1 style={{width :"80%", margin:"auto",textAlign:"center" }}>Why We Stand Out Above The Rest</h1>

          </div>
      </div>
      <p className="subheading content">
        We have the couriers, the vehicles, and technology alongside our massive fleet and partner carrier network to meet
        your logistics needs. We have the experiences that makes a difference to your business and your clients. We provide
        on-demand, reliable same-day delivery & courier service, on time critical transportation to <a className='red-link' href='/locations'>all 48 states nationwide.</a>
        Providing you with:
      </p>

      <div style={{maxWidth:"90vw",margin:"auto"}} >
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid justifyContent="center" item xs={12} md={6} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"auto"
           }} src={require('../../assets/home/home4.png')} alt="delivery signature" />

           </div>
        </Grid>

        <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <div className="content checked">
                    <ul>
                      <li> Reliability, experience, delivery always on time, no excuses</li>
                      <li>
                        Order tracking & geofencing in real-time dashboard
                      </li>
                      <li>
                        On-demand, and same-day door-to-door delivery
                      </li>
                      <li>
                        Dependable service you can always count on
                      </li>
                      <li> Customer support around the clock 24/7/365</li>
                    </ul>
          </div>
        </Grid>
      </Grid>
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <div className="content checked">
            <ul>
              <li> Reliability, experience, delivery always on time, no excuses</li>
              <li>
                Order tracking & geofencing in real-time dashboard
              </li>
              <li>
                On-demand, and same-day door-to-door delivery
              </li>
              <li>
                Dependable service you can always count on
              </li>
              <li>
                 Customer support around the clock 24/7/365
              </li>
            </ul>
          </div>
        </Grid>
        <Grid justifyContent="center" item xs={12} md={6} >
          <div style={{width: '80%'}}>
            <CircleMapPath></CircleMapPath>
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
           }} src={require('../../assets/home/home6.png')} alt="delivery signature" />

           </div>
        </Grid>

        <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <h2 class="  textLeft">One-On-One Support</h2>
          <p className=" textLeft" >
            We assign and provide a centralized account specialists alongside our dedicated
            dispatchers and fully vetted couriers to your business. Providing your company,
            a single point of contact for your day-to-day delivery needs, to ensure you are
            getting quality, performance, and exceptional customer care. We take a
            fundamental approach to eliminate wasted time and deliver urgent goods, right
            when you need them most, providing you peace of mind. To learn more, please
            follow the link. <a className='red-link' href='/speak-to-a-specialist'>Register here.</a>
          </p>
        </Grid>
      </Grid>
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} md={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <h2 className="  textLeft"  style={{}}>Adapting To Your Business</h2>
          <p className=" textLeft" >
            AAA is here to help and ready to step right in, whether you need to expand or
            supplement your fleet. Our team of specialists are ready to help you ramp up your
            operations, so you can meet the growing demands of your business. Partner with
            us, let us become an extension of your company. We can help control cost and save
            you money, by supplementing or replacing your fleet with AAA fleet replacement,
            propelling your same-day delivery capabilities forward.<a className='red-link' href='/speak-to-a-specialist'>Get Started.</a>
          </p>
        </Grid>
        <Grid justifyContent="center" item xs={12} md={6} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"auto"
           }} src={require('../../assets/home/home7.png')} alt="delivery signature" />

           </div>
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
    <h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}>Delivery Always On Time! Every Time! No Excuses!</h2>


    <div className="screen screen-4" style={{height:"fit-content"}}>


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

  
  </div>
</>
  );
}

export default HomeScreen;
