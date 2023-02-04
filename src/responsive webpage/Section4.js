import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pricing1 from './pricing-01.jpg';
import pricing2 from './pricing-02.jpg';
import pricing3 from './pricing-03.jpg';

function Section4(){
    return(
        <div>
            <Container className='lcont'>
            <Row>
                    <Col lg = '10' className=" m-auto lbs">
                        <p className="words">OUR PRICING</p>
                        <h3 className="anounce"> <mark className="mark1">Photography </mark> Contest Plans <mark className="mark1">And Price  </mark> Awards</h3>
                    </Col>
            </Row>
            <Row className='mt-5'>
                    <Col lg='4' md='12' sm='12'>
            <Container fluid className='details2'>
                
                <img src={pricing1} className='limg' alt='limg5'/>
                <Container>
                <h5 className='lhead'>Basic Plan</h5>
                </Container>
                <ul className='list1'>
                    <li> Lorem Ipsum Dolores Sonte </li>
                    <li>Songe Lorem Ipsum Do  </li>
                    <li>Matrios Venga Heptuss  </li>
                    <li>Denim Sriracha Kogi  </li>
                    <li>Digital Photography Awards</li>
                </ul>
                <h2 className='lhead1'>$25 USD</h2>
                <Button className='signin1'> Choose This Plan  </Button>
            </Container>

                      </Col>
                    <Col lg='4' md='12' sm='12'>
                        <Container fluid className='details2'>
                        <img src={pricing2} className='limg' alt='limg1'/>
                <Container>
                <h5 className='lhead'>Standard Plan</h5>
                </Container>
                <ul className='list1'>
                    <li> Lorem Ipsum Dolores Sonte </li>
                    <li>Songe Lorem Ipsum Do  </li>
                    <li>Matrios Venga Heptuss  </li>
                    <li>Denim Sriracha Kogi  </li>
                    <li>Digital Photography Awards</li>
                </ul>
                <h2 className='lhead1'>$45 USD</h2>
                <Button className='signin1'> Choose This Plan  </Button>
                        </Container> </Col>
                    
                    <Col lg='4' md='12' sm='12'> 
                    <Container fluid className='details2'>
                    <img src={pricing3} className='limg' alt='limg2'/>
                <Container>
                <h5 className='lhead'>Advanced Plan</h5>
                </Container>
                <ul className='list1'>
                    <li> Lorem Ipsum Dolores Sonte </li>
                    <li>Songe Lorem Ipsum Do  </li>
                    <li>Matrios Venga Heptuss  </li>
                    <li>Denim Sriracha Kogi  </li>
                    <li>Digital Photography Awards</li>
                </ul>
                <h2 className='lhead1'>$85 USD</h2>
                <Button className='signin1'> Choose This Plan  </Button>

                        </Container>
                        </Col>
                    
                </Row>
                
            </Container>
            <Container fluid className='tend'>
                Copyright © 2048 <a  href='https://snapx.com/' className='llk'>SnapX</a> Photo Contest Co., Ltd. All rights reserved. Design: <a href='https://snapx.com/' className='llk'>TemplateMo</a>
                </Container>
        </div>

    )
}

export default Section4;