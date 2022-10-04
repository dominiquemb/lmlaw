import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Footer() {

  return (
    <>
        <div className="footer">
            <Container maxWidth="xl" disableGutters  style={{ padding:30}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <a className="logo" href="https://www.aaadeliveryservice.com/">
                            <img src="https://www.aaadeliveryservice.com/wp-content/uploads/2021/12/aaadellogonbgwhtpblk-1.svg" alt="AAA Delivery Service" className="logo-1" /> 
                        </a>
                        <div class="content">
                            In the world of logistics, where most situations require timeliness, AAA is a must-have option to stay ahead of the competition.
                        </div>
                        <div class="column-footer">
                            HIPPA COMPLIANT
                        </div>
                        <img src={require('../../assets/medical-symbol.png')}  style={{width:"50%" , marginLeft:"25%" , marginTop:10}}></img>

                    </Grid>
                    <Grid item xs={12} md={9}>
                        <div class="columns">
                            <div class="col">
                                <div class="footer-col-header">
                                    Get Started
                                </div>
                                <ul>
                                    <li>
                                    <a href="/home">Home</a>
                                    </li>
                                    <li>
                                    <a href="/what-we-offer"> What we offer</a>
                                    </li>
                                    <li>
                                    <a href="/how-it-works">How it works</a>
                                    </li>
                                    <li>
                                        <a href="/our-locations">Our locations</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col">
                                <div class="footer-col-header">
                                    About Us
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
                            </div>
                            <div class="col">
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
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    </>
  );
}

export default Footer;
