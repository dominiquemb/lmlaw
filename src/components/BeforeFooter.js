import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ScrollAnimation from 'react-animate-on-scroll';
import "../assets/animate.css";
import Box from "@mui/material/Box";


export  default function BeforeFooter(){
    return  <Container maxWidth="xl" disableGutters style={{maxWidth:"100%"}}>
    <Grid container>
    <Grid item xs={0} md={3.5}>
          <Box sx = {{ display:{xs:'none' , md:'block'} }} >
              <div className="content">
                <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../assets/warehouse-left.jpg')} alt="Blue Logo" />
              </div>
          </Box>
      </Grid>


       
        <Grid item xs={12} md={5}>
        <ScrollAnimation animateIn='fadeIn zoomIn' delay={300}
        animateOut='fadeOut'>
          <div className="content">
            <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../assets/plane.jpg')} alt="Blue Logo" />
          </div>
          </ScrollAnimation>
        </Grid>
      
        
        <Grid item xs={0} md={3.5}>
        <Box sx = {{ display:{xs:'none' , md:'block'} }} >

              <div className="content">
                <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../assets/warehouse-right.jpg')} alt="Blue Logo" />
              </div>
        </Box>

        </Grid>
    </Grid>
  </Container>
}