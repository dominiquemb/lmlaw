import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ScrollAnimation from 'react-animate-on-scroll';
import "../assets/animate.css";

export  default function BeforeFooter(){
    return  <Container maxWidth="xl" disableGutters style={{maxWidth:"100%"}}>
    <Grid container>
    <Grid item xs={3.5} md={3.5}>
          <ScrollAnimation animateIn='bounce' delay={300}
            initiallyVisible={true}
            animateOnce={true}>
              <div className="content">
                <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../assets/warehouse-left.jpg')} alt="Blue Logo" />
              </div>
          </ScrollAnimation>
        </Grid>


       
        <Grid item xs={5} md={5}>
        <ScrollAnimation animateIn='fadeIn zoomIn' delay={300}
        animateOut='fadeOut'>
          <div className="content">
            <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../assets/plane.jpg')} alt="Blue Logo" />
          </div>
          </ScrollAnimation>
        </Grid>
      
        
        <Grid item xs={3.5} md={3.5}>
          <ScrollAnimation animateIn='bounce' delay={300}
            initiallyVisible={true}
            animateOnce={true}>
              <div className="content">
                <img style={{width:"inherit", display:"block",margin:"auto"}}src={require('../assets/warehouse-right.jpg')} alt="Blue Logo" />
              </div>
          </ScrollAnimation>
        </Grid>
    </Grid>
  </Container>
}