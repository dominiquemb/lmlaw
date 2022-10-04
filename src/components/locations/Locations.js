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
    <h1 style={{fontSize:50 , width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
      We are currently serving all 48 states nationwide.
    </h1>

          <Grid item xs={12} md={3}>
          <div className="circle-white"
           style={{width:"90%" , margin : "auto" ,height:"fit-content"  }}>
            <Box sx={{ marginTop :{xs : 0 , md :"50vh"}}} >

              <UsaStatesSelect></UsaStatesSelect>

            </Box>
            
          </div>
              
          </Grid>
          <Grid item xs={12} md={9}>
          <div className="rounded-corners" style={{width:"90%" , margin : "auto"}}>
            <div className="us-map">
              <UsaMap></UsaMap>
            </div>
            
          </div>
              
          </Grid>
    <h1 style={{fontSize:50 , width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
        In the world of logistics, where most situations require timeliness,
        AAA is a must-have option to stay ahead of the competition.
    </h1>
    </Grid>

    </div>
      
      <div className="circle-container what-we-offer" id="circle-container">

        <div className="screen screen-4" style={{height:"fit-content" , border:0}}>
        
      


        <Container maxWidth="xl" disableGutters style={{maxWidth:"100%"}}>

        <h1 style={{fontSize:50 , width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
        Flexibility! Adaptability! Quality! Responsibility!
    </h1>

          <Grid container>
          <Grid item xs={3.5} md={3.5}>
                <ScrollAnimation animateIn='bounce' delay={300}
                  initiallyVisible={true}
                  animateOnce={true}>
                    <div className="content">
                      <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../../assets/warehouse-left.jpg')} alt="Blue Logo" />
                    </div>
                </ScrollAnimation>
              </Grid>


             
              <Grid item xs={5} md={5}>
              <ScrollAnimation animateIn='fadeIn zoomIn' delay={300}
              animateOut='fadeOut'>
                <div className="content">
                  <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../../assets/plane.jpg')} alt="Blue Logo" />
                </div>
                </ScrollAnimation>
              </Grid>
            
              
              <Grid item xs={3.5} md={3.5}>
                <ScrollAnimation animateIn='bounce' delay={300}
                  initiallyVisible={true}
                  animateOnce={true}>
                    <div className="content">
                      <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../../assets/warehouse-right.jpg')} alt="Blue Logo" />
                    </div>
                </ScrollAnimation>
              </Grid>
          </Grid>

          <div className="column-footer" style={{display:"block", marginBottom:150,width:"100%" }}>
                  <a className="button-link" href="/what-we-offer"  style={{marginLeft:"15%"}}>
                    <button className="round-button round-button">
                      Get Started
                    </button>
                  </a>
                  <a className="button-link" href="/speak-to-a-specialist" style={{float:"right",marginRight:"15%"}}>
                    <button className="round-button round-button">
                      How it works
                    </button>
                  </a>
        </div>
        </Container>

      </div>

      </div>

    </>
  );
}

export default Locations;
