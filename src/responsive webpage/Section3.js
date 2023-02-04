import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import closed1 from './closed-01.jpg';
import closed2 from './closed-02.jpg';
import closed3 from './closed-03.jpg';
import Button from 'react-bootstrap/Button';

function Section3(){
    return(
        <div>
            <Container fluid className="section3">
                <Row>
                    <Col lg = '10' className=" m-auto lbs">
                        <p className="words">CLOSED PHOTOGRAPHY CONTESTS</p>
                        <h3 className="anounce">Previous Contests <mark className="mark1">With Handpicked</mark> Winners</h3>

                    </Col>
                </Row>
                 <Container>
<Carousel className='section4'>
      <Carousel.Item>
        <Row>
          <Col  lg = "4" md = "6" sm = "12" >
        <img
          className="d-block w-100 carousel2"
          src={closed1}
          alt="First slide"
        />
        <Container className="end">
            <Row className="anaa">
                <Col>
                <h5 className="lead1">88 Participants</h5>
                <p className="lead2">Number Of Artists</p>
                </Col>
                <Col className="view">
                <h5 className="lead1">320 Pictures </h5>
                <p className="lead2">Submitted Pics</p>
                </Col>
            </Row>
        </Container>
        </Col>
        <Col   lg = "4" md = "6" > 
        <img
          className="d-block w-100 carousel2"
          src={closed2}
          alt="second slide"
         
        />
         <Container className="end">
            <Row className="anaa">
                <Col>
                <h5 className="lead1">96 Participants</h5>
                <p className="lead2">Number Of Artists</p>
                </Col>
                <Col className="view">
                <h5 className="lead1">410 Pictures </h5>
                <p className="lead2">Submitted Pics</p>
                </Col>
            </Row>
        </Container>
        
        </Col>
        <Col   lg = "4" > 
        <img
          className="d-block w-100 carousel2"
          src={closed3}
          alt="third slide"
        />
         <Container className="end">
            <Row className="anaa">
                <Col>
                <h5 className="lead1">74 Participants</h5>
                <p className="lead2">Number Of Artists</p>
                </Col>
                <Col className="view">
                <h5 className="lead1">284 Pictures </h5>
                <p className="lead2">Submitted Pics</p>
                </Col>
            </Row>
        </Container>
        </Col>

        </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row>
          <Col  lg = "4" md = "6" sm = "12">
        <img
          className="d-block w-100 carousel2"
          src={closed1}
          alt="First slide"
        />
         <Container className="end">
            <Row className="anaa">
                <Col>
                <h5 className="lead1">88 Participants</h5>
                <p className="lead2">Number Of Artists</p>
                </Col>
                <Col className="view">
                <h5 className="lead1">320 Pictures </h5>
                <p className="lead2">Submitted Pics</p>
                </Col>
            </Row>
        </Container>
        </Col>
        <Col   lg = "4" md = "6" > 
        <img
          className="d-block w-100 carousel2"
          src={closed2}
          alt="second slide"
        />
         <Container className="end">
            <Row className="anaa">
                <Col>
                <h5 className="lead1">96 Participants</h5>
                <p className="lead2">Number Of Artists</p>
                </Col>
                <Col className="view">
                <h5 className="lead1">410 Pictures </h5>
                <p className="lead2">Submitted Pics</p>
                </Col>
            </Row>
        </Container>
        </Col>
        <Col   lg = "4" > 
        <img
          className="d-block w-100 carousel2"
          src={closed3}
          alt="third slide"
        />
         <Container className="end">
            <Row className="anaa">
                <Col>
                <h5 className="lead1">74 Participants</h5>
                <p className="lead2">Number Of Artists</p>
                </Col>
                <Col className="view">
                <h5 className="lead1">284 Pictures </h5>
                <p className="lead2">Submitted Pics</p>
                </Col>
            </Row>
        </Container>
        </Col>

        </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row>
          <Col  lg = "4" md = "6" sm = "12">
        <img
          className="d-block w-100 carousel2"
          src={closed1}
          alt="First slide"
        />
         <Container className="end">
            <Row className="anaa">
                <Col>
                <h5 className="lead1">88 Participants</h5>
                <p className="lead2">Number Of Artists</p>
                </Col>
                <Col className="view">
                <h5 className="lead1">320 Pictures </h5>
                <p className="lead2">Submitted Pics</p>
                </Col>
            </Row>
        </Container>
        </Col>
        <Col   lg = "4" md = "6" > 
        <img
          className="d-block w-100 carousel2"
          src={closed2}
          alt="second slide"
        />
        <Container className="end">
            <Row className="anaa">
                <Col>
                <h5 className="lead1">96 Participants</h5>
                <p className="lead2">Number Of Artists</p>
                </Col>
                <Col className="view">
                <h5 className="lead1">410 Pictures </h5>
                <p className="lead2">Submitted Pics</p>
                </Col>
            </Row>
        </Container>
        </Col>
        <Col   lg = "4" > 
        <img
          className="d-block w-100 carousel2"
          src={closed3}
          alt="third slide"
        />
         <Container className="end">
            <Row className="anaa">
                <Col>
                <h5 className="lead1">74 Participants</h5>
                <p className="lead2">Number Of Artists</p>
                </Col>
                <Col className="view">
                <h5 className="lead1">284 Pictures </h5>
                <p className="lead2">Submitted Pics</p>
                </Col>
            </Row>
        </Container>
        </Col>

        </Row>
        
      </Carousel.Item>
    </Carousel>
    <Container className="center" >
        
    <Button className="  signin1">Browse Open Contests</Button>
    </Container>
    
    </Container>
    
            </Container>
           
        </div>

    )
}

export default Section3;