import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './waiting-01.jpg';
import image2 from './waiting-02.jpg';
import image3 from './waiting-03.jpg';
import Button from 'react-bootstrap/Button';




function Section1(){
    return(  
<div>
<Container fluid className='section1'>
    <Row >
        <Col lg = "10" className="m-auto">
    <h2 className='quote'>Enter a World of 
    <mark className='span'>Photos</mark>
     & Amazing <mark className='span'>Awards</mark>
     </h2>
     <p className='text'>SnapX Photography is a professional website template with 5 different HTML pages for maximum customizations. It is free for commercial usage. This Bootstrap v5.1.3 CSS layout is provided by TemplateMo Free CSS Templates.</p>
     <span className='button' type="Button">
      Explore SnapX Contest
     </span>
     <Button className='video' type='button'>Watch Our Video <br/> Now</Button>
     </Col>
     </Row>
</Container>
<Container>
<Carousel className='section2'>
      <Carousel.Item>
        <Row>
          <Col  lg = "4" md = "6" sm = "12">
        <img
          className="d-block w-100 carousel1"
          src={image1}
          alt="First slide"
        />
        </Col>
        <Col   lg = "4" md = "6" > 
        <img
          className="d-block w-100 carousel1"
          src={image2}
          alt="second slide"
         
        />
        
        </Col>
        <Col   lg = "4" > 
        <img
          className="d-block w-100 carousel1"
          src={image3}
          alt="third slide"
        />
        </Col>

        </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row>
          <Col  lg = "4" md = "6" sm = "12">
        <img
          className="d-block w-100 carousel1"
          src={image1}
          alt="First slide"
        />
        </Col>
        <Col   lg = "4" md = "6" > 
        <img
          className="d-block w-100 carousel1"
          src={image2}
          alt="second slide"
        />
        </Col>
        <Col   lg = "4" > 
        <img
          className="d-block w-100 carousel1"
          src={image3}
          alt="third slide"
        />
        </Col>

        </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row>
          <Col  lg = "4" md = "6" sm = "12">
        <img
          className="d-block w-100 carousel1"
          src={image1}
          alt="First slide"
        />
        </Col>
        <Col   lg = "4" md = "6" > 
        <img
          className="d-block w-100 carousel1"
          src={image2}
          alt="second slide"
        />
        </Col>
        <Col   lg = "4" > 
        <img
          className="d-block w-100 carousel1"
          src={image3}
          alt="third slide"
        />
        </Col>

        </Row>
        
      </Carousel.Item>
    </Carousel>
    
    </Container>
   
</div>



    )  
}

export default Section1;