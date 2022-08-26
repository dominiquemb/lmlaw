import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Footer() {

  return (
    <>
        <div className="footer">
            <Container maxWidth="xl" disableGutters>
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
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <div class="columns">
                            <div class="col">
                                <div class="footer-col-header">
                                    Get Started
                                </div>
                                <ul>
                                    <li>
                                        Home
                                    </li>
                                    <li>
                                        What we offer
                                    </li>
                                    <li>
                                        How it works
                                    </li>
                                    <li>
                                        Our locations
                                    </li>
                                </ul>
                            </div>
                            <div class="col">
                                <div class="footer-col-header">
                                    About Us
                                </div>
                                <ul>
                                    <li>
                                        About Us
                                    </li>
                                    <li>
                                        Careers
                                    </li>
                                    <li>
                                        Drive for us
                                    </li>
                                    <li>
                                        Our locations
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
                                        info@aaadeliveryservice.com
                                    </li>
                                    <li>
                                        1 844 AAA-0206
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
