import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PathMap from "../animated-path-map"
import home_page_top_right from '../../assets/blue-circles.png';

import BlueSection from '../services/blue-section.js';
import BeforeFooter from '../BeforeFooter';
import Markdown from '../markdown.js'
import {BlueZone} from '../markdown.js'

var data = require("../../pages.json");
var page = data["Healthcare"]["healthcare-courier-services.json"];


function SameDayDelivery() {


  return (
    <div className="home" >
      <Grid container  style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} lg={6} style={{ paddingLeft:"5%",paddingRight:"5%"}}  >

            <h1 className="circle-h1 textLeft" style={{paddingRight:"5%"}}  >
              {page["title"]}
	          </h1>

              <p className="industries-paragraph" >
                {page["subtitle"]}
              </p>

              
          </Grid>
          <Grid item xs={0} lg={6} >
          <Box className="content background-blue-circles" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} style={{  backgroundImage: `url(${home_page_top_right})`}} >

          <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{width:"80%" }}>

           <img style={{
            display:'block',
            width:"100%",
            margin:" auto",
            borderRadius:"clamp(10px,3%,50px)",
            boxShadow:"1px 1px 6px -2px grey",

           }} src={page["top-image"]} alt="delivery signature" />

          </div>

          </Box  >

              
          </Grid>

    </Grid>



    <BlueSection page = {page}></BlueSection>


    <BeforeFooter></BeforeFooter>

    </div>
  );
}

export default SameDayDelivery;
