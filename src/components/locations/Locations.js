import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
        <div className="screen-1 screen">
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
            </div>
          </div>

          <div className="speak-to-a-specialist-form light-blue-bg rounded-corners box-shadow">
            <div className="us-map">
              <img
                style={{ width: "410px" }}
                src="https://www.aaadeliveryservice.com/wp-content/uploads/2022/05/usa-map-2.jpeg"
              />
            </div>
          </div>

          <div id="small-circle-container" className="small-circle-container">
            <div className="circle small-circle small-circle-1">
              Picture insert
            </div>

            <div className="circle small-circle small-circle-2">
              Picture insert
            </div>

            <div className="circle small-circle small-circle-3">
              Picture insert
            </div>
          </div>

          <div className="bottom-semicircle semicircle-white">
            <div className="bottom-text">
              Indispensable custom-built delivery & courier services for your
              business.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Locations;
