import React from "react";
import Box from "@mui/material/Box";

import {Link} from "react-router-dom";

import background_carrier from '../../assets/carrier/mountain-background.png';

export default function Carrier(){
    return <>
        <div style={{
             backgroundImage: `url(${background_carrier})`,
             backgroundRepeat: "no-repeat",
             backgroundAttachment: "fixed",
             backgroundPosition: "center",
             backgroundSize: "cover",
             backgroundOrigin: "padding-box",
             width: "100%",
             paddingTop: "20vh",
             paddingBottom: "10vh", 
        }}>

            <Box
                style={{
                    margin:"auto",
                    minHeight: "100vh",
                }}
                sx={{
                    width: "90%"
                }}
            >
                <h2 className="bold-inline" >
                    Welcome! Thank you for your interest in becoming an approved carrier for AAA. We look forward to working with you.
                </h2>
                <ol>
                    <li>Provide your MC/MX# or DOT# to begin registration. Intrastate carriers without a DOT# may provide an applicable state registration number to begin registration.</li>
                    <li>Supply your company contact information.</li>
                    <li>Submit an electronic W9 (have your Tax-ID available).</li>
                    <li>Complete the Carrier Profile.</li>
                    <li>Read and ACCEPT the Agreement(s).</li>
                    <li>Certificate of Insurance with AAA Delivery Service LLC as Certificate Holder:</li>
                    <li>Provide a Certificate of Insurance that meets the insurance minimum requirements below. Certificates must be submitted from your insurance producer (agent) </li>
                        <ul>
                            <li>$100,000 Cargo Coverage</li>
                            <li>$1,000,000 Auto Coverage</li>
                        </ul>
                    <li>If RMIS does not already have a copy of your certificate on file, we will request one for you from your insurance agent (producer).</li>
                    <li>You will be required to meet the following requirements:</li>
                    <li>Active Common or Contract Authority.</li>
                        <ul>
                            <li>Safety Rating must be Satisfactory, Conditional or None.</li>
                            <li>Authority active for at least 90 days.</li>
                        </ul>

                </ol>
                <Link to="/carrier-registration" class="black-link">
                    <h2 className="centered"
                        style={{
                            backgroundColor: 'white',
                            color:"rgb(54, 123, 220)"
                        }}>GO TO NEXT STEP
                    </h2>
                </Link>







            </Box>

        </div>
        <div style={{
            backgroundColor:"rgba(0,0,0,0.1)"
        }}>
            <div className= "carrier-grey-text" style={{
                width:"80%",
                margin:"auto",
                textAlign:"center",
                padding:"5vh 0",

            }}>
            <img style={{width:"clap(1cm,5vw,10cm)",display:"inline-block",alignSelf:"center"}} src={require('../../assets/logo.png')}  alt="AAA Delivery Service" className="logo-1" /> 
                <div style={{display:"inline-block"}}>
                    For help or questions regarding the registration process on this website, contact RMIS at 888-643-8174.<br/>
                    © 2022 Registry Monitoring Insurance Services, Inc. <br/>
                    RMIS Privacy Policy | Do Not Sell My Personal Information <br/>
                    RMIS © Status - All Systems Operational 
                </div>
            <img style={{width:"clap(1cm,5vw,10cm)",display:"inline-block"}} src={require('../../assets/logo.png')}  alt="AAA Delivery Service" className="logo-1" /> 



            </div>

        </div>


   </>

}