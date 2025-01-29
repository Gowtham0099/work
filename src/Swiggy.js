import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import css from './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






      
      
      
 
function Swiggy() {
  return (

    
    <div className='swiggy'>
        
        <Container>
            <Row>
        <h1>SWIGGY</h1>
        <div className='top' >
        <h3 >Swiggy Corporate</h3>
        <h3 className='t'>Partner with us</h3>
        
         {/* <Nav.Item >
        <Nav.Link href="/home">Swiggy Corporate</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link eventKey="link-1">Partner with us</Nav.Link>
      </Nav.Item> */}
     
      
        <button>Get the App🢅</button>
        <button variant="dark">SIGNIN</button>
        </div>
        </Row>
        </Container>
        
        <h1 className='main'>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
        <input type="text" placeholder="Enter your delivery location"/>
        <input type="text" placeholder="Search for restaurant, item or more"/>
        <button>Search</button>

        
        <div class="features">
    <div class="feature">
      <h3>Food Delivery</h3>
      <p>From restaurants. Upto 60% OFF</p>
    </div>
    <div class="feature">
      <h3>Instamart</h3>
      <p>Instant grocery. Upto 40% OFF</p>
    </div>
    <div class="feature">
      <h3>Dineout</h3>
      <p>Eat out & save more</p>
    </div>
    <div class="feature">
      <h3>Genie</h3>
      <p>Pick-up & drop</p>
    </div>
  </div>
        
       

    </div>
    
  )
}

export default Swiggy