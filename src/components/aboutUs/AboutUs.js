import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextMobileStepper from "./Founders";
export default function AboutUs(){
    return <>
    <Container maxWidth="xl" disableGutters style={{maxWidth:"100%" , marginTop:50}}>
        <Grid container>
            <Grid item xs={12} md={7} style={{padding:30}}>
                    <h1 style={{fontSize:"5vw" , fontWeight:"heavy"}}>
                        Customer Obsession,
                        People Led, Innovation
                        Driven
                    </h1>
                <Box sx={{ display: { xs: 'none', md: 'block'} }}  >         
                    <p>
                        <bold style={{fontWeight:'bold'}}>
                            AAA Delivery Service specializes in customer satisfaction, reliability, and professionalism on every
                            delivery. We consistently inspire our team members to stay focused on safety, and the highest
                            ethical and professional standards, and the needs of our customers and communities. Providing
                            customers with on-demand, express, reliable same-day delivery & courier service, on-time
                            critical transportation to all 48 states nationwide. Expediting packages, any size shipments
                            delivered within your city or across the country, same-day door-to-door delivery.
                        </bold>
                    </p>
                    <p>
                        Customer obsession is the main focus of our organization because we believe that our future lies in the hands
                        of our valued customers. Our leaders start with the customer and work backwards. We work vigorously to earn
                        and keep customer trust. Although our leaders pay attention to our competitors, they obsess over customers.
                        We are all about the long term, delivering value through customer focus leadership. We measure our success
                        in this area through improvements in our net promoter score.
                        As a people led organization, we are guided by the purpose of moving our communities forward by delivering
                        what matters. We are modernizing our strong values-based culture and encouraging our employees, drivers
                        and sub-contractors to bring their energetic selves to work – making AAA a place they enthusiastically
                        recommend to friends and family. We measure our success on this strategic initiative through improvements in
                        likelihood to recommend.
                        Our dedicated innovation team help support and encourage idea sharing throughout our organization. Our
                        Introduction idea sharing platform brings our employees, drivers and sub-contractors together to share,
                        collaborate and generate ideas, whether in-person or virtually, as well to submit their ideas, to comment and
                        vote on ideas from other people. Our idea screening processes is in place so our employees, drivers and subcontractors know that their ideas are being considered. Our team of advocates inspires change throughout our
                        organization, asking questions, supporting ideas, and demanding radical changes.
                    </p>
                </Box>
            </Grid>
            <Grid item xs={12} md={5} >
                <Box sx={{ marginTop: { xs: 0, md: '50%', lg: '50%' } }}  >
                    <img style={{width:"100%" ,overflow:"hidden", display:"block"}}src={require('../../assets/logo-blue.png')} alt="Blue Logo" />

                </Box>
            </Grid>
        </Grid>
    </Container>

    <Container maxWidth="xl" disableGutters style={{maxWidth:"100%" , marginTop:20}}>
        <Grid container>
            <Grid item xs={12} md={4} style={{padding:30}}>
                <h1>MISSION & VISION</h1>
                <hr style={{ border: "3px solid red" , width:"50%" , marginRight:"50%"}}></hr>
                <h2>MISSION</h2>
                <p>
                    To create, implement, and manage logistics solutions.
                    Achieve excellence with unwavering commitment, superior
                    management, processes, and technology. Providing our
                    customers competitive advantages and sustained value. We
                    are guided by our values of Integrity, Leadership,
                    Commitment, Excellence, Safety and Professionalism. We
                    strengthen communities and enhance lives by delivering
                    the things that matter.
                </p>
                <h2>VISION</h2>
                <p>
                    To provide our customers with the utmost reliable,
                    dependable, professional, and technologically advanced
                    delivery service nationwide. Keeping you focus on your core
                    business. Knowing your deliveries are in good hands with
                    AAA. “To Be Indispensable to Our Customers”.
                </p>

            </Grid>
            <Grid item xs={12} md={4} style={{padding:30}}>
            <h1>QUALITY POLICY</h1>
            <p>
                We will continuously strive to delight our
                customers with outstanding quality of
                our courier and delivery service.
            </p>
            <p>
                In our endeavor to achieve this objective, we will;
            </p>
            <ul style={{listStyleType:"square"}}>
                <li style={{marginBottom:10}}>
                    Create and nurture people of quality by continuous education and training.
                </li>

                <li style={{marginBottom:10}}>
                    Maintain and improve the highest standards of logistics and delivery service. 
                </li>

                <li style={{marginBottom:10}}>
                    Establish a “AAA Delivery Service Quality”
                    framework to continually improve the quality
                    management system and realize challenging quality
                    objectives.
                </li>

                <li style={{marginBottom:10}}>
                    Record and control the change points at each stage.
                </li>

                <li style={{marginBottom:10}}>
                    Strengthen courier and delivery service by effective traceability system.
                </li>
            </ul>

            <p>We believe that our future lies in the hands of our valued customers.</p>
            </Grid>
            <Grid item xs={12} md={4} style={{padding:30}}>
            <h1>OUR OBJECTIVE</h1>
            <p>
                Our primary objective is customer satisfaction,
                reliability, on time deliveries, and save our clients
                10-30% in courier cost within our coverage area.
                Also, To Provide a broad range of advanced
                transportation solutions and the availability to
                make sure we meet the expectations of our
                customers, present and future. These solutions can
                be combined and configured to meet changing
                needs and requirements. To learn more, please
                follow the link. <a style={{fontWeight:"bolder"}} href="/portal">Online Portal</a>
            </p>
            <TextMobileStepper/>
            


            </Grid>
        </Grid>
    </Container>
    </>
}