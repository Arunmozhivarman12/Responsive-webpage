import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo1 from './icon-01.png';
import logo2 from './icon-02.png';
import logo3 from './icon-03.png';
import logo4 from './icon-04.png';

import image9 from './popular-01.png';
import image8 from './popular-02.png';
import image7 from './popular-03.png';
import image6 from './popular-04.png';

function Section2() {
    return(
        <div>
            <Container className='rendu'>
                <Row>
                    <Col lg = "6"  sm='12'>
                       <p className='first'> OUR CATEGORIES</p>
                       <p className='second'>Check Out <mark className='unique'>Popular</mark> Contest <mark className='unique'>Categories</mark></p>
                       </Col>
                   <Col lg='6' sm='12'> 
                   <span className='lbtn ' type = "button">Discover All Categories</span>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col lg = "3" md='6' sm='12'>
                        <div className='details'>
                            <div>
                            <div className='left'>
                            <img src={logo1} alt='imk'/>
                            </div>
                            <div className='right'>
                             <h5 className='head1'>Nature Pic Contest</h5>
                             <p className='word'><mark className='num'>126</mark> Available Contests</p>
                            </div>
                            </div>
                            <div>
                                <img className='cim' src={image9 } alt='ima'/>
                            </div>
                            <div className='tbtn' type='button'>Browse Nature Pic Contests</div>
                        </div>
                    </Col>
                    <Col lg = "3" md='6' sm='12' >
                    <div className='details'>
                    <div>
                            <div className='left'>
                            <img src={logo2} alt='imk'/>
                            </div>
                            <div className='right'>
                             <h5 className='head1'>Random Pic Contest</h5>
                             <p className='word'><mark className='num'>116</mark> Available Contests</p>
                            </div>
                            </div>
                            <div>
                                <img className='cim' src={image8 } alt='ima'/>
                            </div>
                            <div className='tbtn' type='button'>Browse Random Pic Contests</div>
                       

                    </div>
                    </Col>
                    <Col lg = "3" md='6' sm='12' >
                    <div className='details'>
                    <div >
                            <div className='left'>
                            <img src={logo3} alt='imk'/>
                            </div>
                            <div className='right'>
                             <h5 className='head1'>Portrait Pic Contest</h5>
                             <p className='word'><mark className='num'>164</mark> Available Contests</p>
                            </div>
                            </div>
                            <div>
                                <img className='cim' src={image7 } alt='ima'/>
                            </div>
                            <div className='tbtn' type='button'>Browse Portrait Pic Contests</div>

                    </div>

                    </Col>
                    <Col lg = "3" md='6' sm='12' >
                    <div className='details'>
                    <div>
                            <div className='left'>
                            <img className='big' src={logo4} alt='imk'/>
                            </div>
                            <div className='right'>
                             <h5 className='head1'>Space Pic Contest</h5>
                             <p className='word'><mark className='num'>135</mark> Available Contests</p>
                            </div>
                            </div>
                            <div>
                                <img className='cim' src={image6 } alt='ima'/>
                            </div>
                            <div className='tbtn' type='button'> Browse Spaces  Pic Contests</div>
                        
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Section2;