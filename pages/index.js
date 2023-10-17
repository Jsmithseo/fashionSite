import React from 'react';
import Image from 'next/image';
import coat1 from '../public/coat1.jpg';
import coat2 from '../public/coat2.png';
import ContactUs from './components/ContactUsform';
import { Button as MuiButton } from '@mui/material';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import MaterialContactform from './components/MaterialContactform';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Index() {
  const MainStyle = {
    overflowX: 'hidden',
  };

  const companyTitle = {
    textAlign: 'center',
    fontFamily: 'avenir',
  };

  const copy = {
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'avenir',
  };
  return (
    <div style={MainStyle}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2 style={companyTitle}><b>SAY MY NAME: I AM BREONNA TAYLOR.</b></h2>
          <div style={copy}>
            The BREONNA TAYLOR coat is the first design from STACI DeARMAN’s
            eponymous exclusive label, available in two options:{' '}
            <b>RIP BREONNA TAYLOR</b>, and <b>I AM BREONNA TAYLOR.</b>
          </div>
          <br></br>
               <center>
            <Image
              src={coat1}
              alt="Description of Image"
              width={400}
              height={750}
            />
          </center>
          <br></br>
          <br></br>
          <center>
            <Image
              src={coat2}
              alt="Description of Image"
              width={400}
              height={750}
            />
          </center>
          <br></br>
          <center>
          <div><h2>Pre-Orders Available Now in Time for Christmas 2023.</h2></div>
          </center>
          
          <center>
            <Link href="https://checkout.stripe.com/c/pay/cs_live_b10xd2pyZygEY0Q4CcecYiLj2ZCqsqLP7DWQRkF9eAWd0pvdnPA203JGPf#fidkdWxOYHwnPyd1blppbHNgWjA0S3ZzfURAbW5GaU53Y25INDVGPG5mRDFAM1N0czxwXUFTPX1nPV1dRnxTUjBISGZgSm9VbkZTR099VU1nb2Y3c3B2XU8xQ2BUanQ9YE5SQWRfN2ZdaWBENTV9dkBVczdBQycpJ3VpbGtuQH11anZgYUxhJz8nZks3PEBBZk1PY2QyZDNENz09J3gl">
              <Button variant="contained" color="primary" type="submit" style={{backgroundColor:"red"}}>
            Order Now
              </Button>
            </Link>
          </center>
          <br></br>
          <center>
            <div style={{fontSize:"20px", fontWeight: "bold", paddingTop: "20px"}}>10% of every purchase will go to the Breonna taylorfoundation.org.</div>
            <div style={{fontSize:"20px", fontWeight: "bold", paddingTop: "20px"}}>No refunds. Exchanges Only.</div>

            <div style={{fontSize:"30px", fontWeight: "bold", paddingTop: "20px"}}>Coat Nuances and Details:</div>
            <div style={{fontSize:"20px", fontWeight: "bold", paddingTop: "10px",listStyleType:"none"}}>
              <ul style={{listStyleType:"none"}}>
                <li>White Wool</li>
                <li>Fully Lined</li>
                <li>Gold Monogrammed SDA Buttons</li>
                <li>Imitation rose</li>
                <li>Ms. Taylor's nightgown adorned in moon and star sequins </li>
                <li>Dry Clean Only</li>
              </ul>
            </div>
            <div style={{fontSize:"20px", fontWeight: "bold", paddingTop: "10px"}}>
            Night shirt adorned in moon and star sequins.
            </div>
            <div style={{fontSize:"20px",paddingTop: "20px"}}>Each oversized bullet (6 total) trimmed in tiny silver rhinestones represents where Ms. Taylor was shot: Upper chest, upper arm, abdomen, thigh, right foot, left foot.</div>

            <div style={{fontSize:"20px", paddingTop: "20px"}}><b>Rose</b> placement on the back of your coat might be found in alternate locations due to comfort level versus aesthetics.</div>
            <div style={{fontSize:"20px", paddingTop: "20px"}}>Hair <b>trim</b> and the color of the <b>comforter set</b> may vary due to manufacture availability.</div>
            <div style={{fontSize:"20px", paddingTop: "30px"}}>A luxurious form of storytelling, where we cut a long story short, by featuring it on the front and back of a garment. Characters made from supple vegan leather, trimmed in rhinestones, dipped in sequins make the story come alive… As in the case of this riveting, handcrafted Breonna Taylor tragedy. It represents the vivacious Ms. Taylor, sleeping an eternal sleep, having been hit 6 times out of - a zillion shots fired - from dangerous, unhinged gunmen. Ohhh, “How the Mighty Have Fallen”!</div>
            <div style={{fontSize:"20px", paddingTop: "30px"}}><b>Please Rock This Piece in Unapologetic Peace.</b> Fearlessly, yet elegantly holding the torch for all those wrongfully slain and in solidarity with your fellow trailblazers of funk and fashion!</div>

          </center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </React.Fragment>
      <div></div>
    </div>
  );
}
