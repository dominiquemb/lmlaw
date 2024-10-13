import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormTextFields from "./Form";
import home_page_top_right from "../../assets/blue-column.png";

import { BlueSection2 } from "../services/blue-section.js";
import BeforeFooter from "../BeforeFooter";
import Markdown from "../markdown.js";

var data = require("../../pages.json");
var page = data["speak-to-a-specialist"]["ready-to-speak-to-a-specialist.json"];

function SpeakToASpecialist() {
  return (
    <>
      <Container
        maxWidth="xl"
        disableGutters
        style={{
          maxWidth: "100%",
          backgroundImage: `url(${home_page_top_right})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "auto  100%",
          marginTop: "120px",
          marginRight: 80,
        }}
      >
        <Grid container>
          <Grid
            item
            direction="column"
            alignItems="center"
            justifyContent="center"
            xs={12}
            md={6}
            style={{ padding: 30, height: "fit-content" }}
          >
            <h1
              className="circle-h1"
              style={{
                letterSpacing: 3,
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              {" "}
              {page["title"]}{" "}
            </h1>
            <p
              style={{
                fontWeight: 600,
                textJustify: "none",
              }}
            >
              <Markdown
                content={page["subtitle"].replace("\n", "<br/>")}
              ></Markdown>
            </p>

            <div
              style={{
                width: "80%",
                margin: "auto",
                marginBottom: "100px",
                borderWidth: 20,
                borderRadius: 10,
              }}
            >
              {/* <video style={{ width: "100%" }} loop autoPlay muted>
                <source src={page["top-image"]} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <img src={"./images/hits_happen.png"} style={{ width: "100%" }} />
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div>
              <div style={{ margin: "10%" }}>
                <FormTextFields />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SpeakToASpecialist;
