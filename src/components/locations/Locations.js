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
      <div className="circle-container what-we-offer" id="circle-container">
        <div className="screen-1 screen" style={{border:0}}>

          <div className="large-circle circle-white">
            <div className="circle-header">
              <h1 className="circle-h1 circle-text">States We Serve </h1>
              <h3 className="circle-h3 circle-text">
                We are currently serving all 48 states nationwide.
              </h3>
              <h4 className="circle-h3 circle-text">
                "In the world of logistics, where most situations require
                timeliness, AAA is a must-have option to stay ahead of the
                competition".{" "}
              </h4>
              <UsaStatesSelect></UsaStatesSelect>

            </div>
            
          </div>


          <div className="speak-to-a-specialist-form  rounded-corners box-shadow">
            <div className="us-map">
              <UsaMap></UsaMap>
            </div>
            
          </div>

         
        </div>


        <div className="screen screen-4" style={{height:"fit-content" , border:0}}>
        
        <div >
            <div  style={{display:"block",marginBottom:50,width:"100%"}}>
                  <a className="button-link" href="#"  style={{marginLeft:50 , float:"left"}}>
                    <button className="round-button round-button">
                      Get Started2
                    </button>
                  </a>
                  <a className="button-link" href="#" style={{float:"right",marginRight:50}}>
                    <button className="round-button round-button">
                      Get Started
                    </button>
                  </a>
                </div>
          </div>



        <Container maxWidth="xl" disableGutters>

      
          <Grid container>
          <Grid item xs={12} md={3.5}>
                <ScrollAnimation animateIn='bounce' delay={300}
                  initiallyVisible={true}
                  animateOnce={true}>
                    <div className="content">
                      <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../../assets/warehouse-left.jpg')} alt="Blue Logo" />
                    </div>
                </ScrollAnimation>
              </Grid>


             
              <Grid item xs={12} md={5}>
              <ScrollAnimation animateIn='fadeIn zoomIn' delay={300}
              animateOut='fadeOut'>
                <div className="content">
                  <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../../assets/plane.jpg')} alt="Blue Logo" />
                </div>
                </ScrollAnimation>
              </Grid>
            
              
              <Grid item xs={12} md={3.5}>
                <ScrollAnimation animateIn='bounce' delay={300}
                  initiallyVisible={true}
                  animateOnce={true}>
                    <div className="content">
                      <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../../assets/warehouse-right.jpg')} alt="Blue Logo" />
                    </div>
                </ScrollAnimation>
              </Grid>
          </Grid>
        </Container>

      </div>

      </div>

    </>
  );
}

export default Locations;
