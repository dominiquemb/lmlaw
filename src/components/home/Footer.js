import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Footer() {

  return (
    <>
        <div className="footer" style={{height:"fit-content" , paddingBottom:20}}>
            <Container maxWidth="xl" disableGutters  style={{ padding:30}}>
                <Grid container spacing={1} alignContent="center">
                    <Grid item xs={12} sm={12} md = {3} alignItems="center" style={{ padding:10}}>
                        
                        <a className="logo" href="https://www.aaadeliveryservice.com/">
                            <img src="https://www.aaadeliveryservice.com/wp-content/uploads/2021/12/aaadellogonbgwhtpblk-1.svg" alt="AAA Delivery Service" className="logo-1"  /> 
                        </a>
                        <div class="content" style={{textAlign:"left",fontSize:"1rem"}}>
                            In the world of logistics, where most situations require timeliness, AAA is a must-have option to stay ahead of the competition.
                        </div>
                        <div class="column-footer">
                            HIPPA COMPLIANT
                        </div>
                        <div>
                            <img src={require('../../assets/medical.svg').default}  style={{width:"20%" ,display:"block" , margin:"auto" , marginTop:10,marginBottom:50}}></img>
                        </div>
                    </Grid>
                    <Grid item xs={0} sm={0} md={2}  >
                                <div style={{width:"100%"}}>
                                </div>
                               
                    </Grid>
                    <Grid item xs={12} sm={3} md = {2}  >
                                <div class="footer-col-header">
                                    Our services
                                </div>
                                <ul>
                                    <li>
                                    <a href="/">Home</a>
                                    </li>
                                    <li>
                                    <a href="/what-we-offer"> What we offer</a>
                                    </li>
                                    <li>
                                    <a href="/how-it-works">How it works</a>
                                    </li>
                                    <li>
                                    <a href="/locations">Our locations</a>
                                    </li>
                                </ul>
                    </Grid>
                    <Grid item xs={12} sm={3} md = {2} style={{padding:5}}>
                                <div class="footer-col-header">
                                Our Company
                                </div>
                                <ul>
                                    <li>
                                        <a href="/about-us">About Us</a>
                                    </li>
                                    <li>
                                        Careers
                                    </li>
                                    <li>
                                        Drive for us
                                    </li>
                                    <li>
                                        <a href="/our-locations">Our locations</a>
                                    </li>
                                </ul>
                    </Grid>
                    <Grid item xs={12} sm={3} md = {3} style={{padding:5}}>
                                <div class="footer-col-header">
                                    Contact Us
                                </div>
                                <ul>
                                    <li>
                                        <a href="/speak-to-a-specialist">Speak to a Specialist</a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@aaadeliveryservice.com">info@aaadeliveryservice.com</a>
                                    </li>
                                    <li>
                                        <a href="tel:1844 AAA-0206">1844 AAA-0206</a>
                                        
                                    </li>
                                    <li>
                                        2101 Terminal Road
                                        <br />
                                        Fort Worth, Texas 76106
                                    </li>
                                </ul>
                    </Grid>
                </Grid>
            </Container>
        </div>
    </>
  );
}

export default Footer;
