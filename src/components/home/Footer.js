import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Testimonials from "./Testimonials";

var data = require("../../pages.json");
var page = data["footer"]["footer.json"];

function Footer() {
  return (
    <>
      <div
        className="footer"
        style={{ height: "fit-content", paddingBottom: 20 }}
      >
        <Container maxWidth="xl" disableGutters style={{ padding: 30 }}>
          <Grid container spacing={1} alignContent="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              alignItems="center"
              style={{ padding: 10 }}
            >
              <div className="footer-col-header">
                {page["testimonialstitle"]}
              </div>
              <Testimonials />
              {/* <p className="content" style={{ textAlign: "left" }}>
               " In the world of logistics, where most situations require
                timeliness, AAA is a must-have option to stay ahead of the
                competition."
              </p> */}

              {/* <CertificationsPopover></CertificationsPopover> */}
            </Grid>
            <Grid
              item
              xs={0}
              sm={0}
              md={2}
              sx={{ display: { sm: "none", md: "block" } }}
            >
              <div style={{ width: "100%" }}></div>
            </Grid>
            {/* <Grid item xs={12} sm={6} md={2}> */}
            {/* <div className="footer-col-header">Our services</div>
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
                  <a href="/industries-we-serve">Industries</a>
                </li>
                <li>
                  <a href="/locations">Our locations</a>
                </li>
              </ul> */}
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={6} md={2}> */}
            {/* <div className="footer-col-header">Industries</div>
              <ul>
                <li>
                  <a href="/healthcare">Healthcare</a>
                </li>
                <li>
                  <a href="/ground-transportation">Freight</a>
                </li>
                <li>
                  <a href="/at-home">At Home</a>
                </li>
              </ul> */}
            {/* </Grid> */}
            <Grid item xs={12} sm={6} md={2} style={{ padding: 5 }}>
              <div className="footer-col-header">About Us</div>
              <ul>
                <li>
                  <a href="/">Our Team</a>
                </li>
                {/* <li>Careers</li>
                <li>Drive for us</li>
                <li>
                  <a href="/carriers">Carriers</a>
                </li>
                <li>
                  <a href="/locations">Our locations</a>
                </li> */}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ padding: 5 }}>
              <div className="footer-col-header">Contact Us</div>
              <ul>
                <li>
                  <a href={`mailto:${page["email"]}`}>{page["email"]}</a>
                </li>
                <li>
                  <a href={`tel:${page["phone"]}`}>{page["phone"]}</a>
                </li>
                <li>
                  {page["address1"]}
                  <br />
                  {page["address2"]}
                </li>
              </ul>
            </Grid>
          </Grid>
          <hr style={{ color: "white" }}></hr>

          <div
            style={{
              color: "white",
              fontSize: "1.5vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={require("../../assets/planet.png")}
              style={{ width: "2vw", display: "inline-block" }}
            ></img>
            Copyright 2024 LM Law Group LLC. All Rights Reserved.
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
