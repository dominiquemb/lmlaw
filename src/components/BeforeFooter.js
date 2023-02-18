import React from 'react';
import Grid from "@mui/material/Grid";
import "../assets/animate.css";
import PathMap from "./animated-path-map"

import Box from "@mui/material/Box";
export  default function BeforeFooter(){
    return  <>
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


    </>
}