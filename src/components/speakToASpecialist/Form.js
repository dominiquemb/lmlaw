import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const updateValue = (func, value) => {
    if (func) {
      func(value);
    }
  };
  
export default function FormTextFields() {
    const [firstName, setFirstName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [message, setMessage] = React.useState("");


    
  return (
    <Box

      style={{backgroundColor:"#8bbafb" , width:"100%" , margin:"auto" , borderWidth:20 , borderStyle:"solid" , borderColor:"#8bbafb" , borderRadius:10 }}

    >
            <form>
                <TextField
                  fullWidth 
                  id="first-name"
                  label="First and last name "
                  value={firstName}
                  sx={{ margin: "5px" }}
                  onChange={(evt) =>
                    updateValue(setFirstName, evt.target.value)
                  }
                />
              
              
              
                <TextField
                  fullWidth 
                  id="email"
                  label="Email"
                  sx={{ margin: "5px" }}
                  value={email}
                  onChange={(evt) => updateValue(setEmail, evt.target.value)}
                />
              
              
                <TextField
                  fullWidth 
                  id="phone"
                  label="Phone"
                  sx={{ margin: "5px" }}
                  value={phone}
                  onChange={(evt) => updateValue(setPhone, evt.target.value)}
                />
              
              
                <TextField
                  fullWidth 
                  id="company"
                  sx={{ margin: "5px" }}
                  label="Company"
                  value={company}
                  onChange={(evt) => updateValue(setCompany, evt.target.value)}
                />
              
              
                <TextField
                  fullWidth 
                  id="address"
                  label="Full address"
                  sx={{ margin: "5px" }}
                  value={address}
                  onChange={(evt) => updateValue(setAddress, evt.target.value)}
                />
              
              

                <TextField
                  fullWidth 
                  id="message"
                  sx={{ margin: "5px", marginBottom: "20px" }}
                  multiline
                  rows={4}
                  label="Message"
                  value={message}
                  onChange={(evt) => updateValue(setMessage, evt.target.value)}
                />
              
                <a className="submit" href="#">
                  <button className="round-button large-circle-button">
                    Submit
                  </button>
                </a>
              
            </form>
    </Box>
  );
}
