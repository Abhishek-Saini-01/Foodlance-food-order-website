import React from 'react'
import './Footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

const footerQuickLinks = [
    { display: 'Terms & Conditions', url: '#' },
    { display: 'Privacy Policy', url: '#' },
    { display: 'Return & Refund', url: '#' },
    { display: 'Payment Methods', url: '#' },
]
const footerLinks = [
    { display: 'About Us', url: '#' },
    { display: 'Menu', url: '#' },
    { display: 'Recipes', url: '#' },
    { display: 'Contact', url: '#' },
]

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__top">
            <Container>
                <Row>
                    <Col lg='4' md='4' sm='6'>
                        <div className="logo">
                            <h2 className=" d-flex align-items-center gap-1 mb-4">
                            <span>
                                <i class="ri-restaurant-2-line"></i>
                            </span>{" "}
                            Foodlance
                            </h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quae accusamus facilis ullam molestiae praesentium corrupti iusto voluptatem? Similique, dolore.</p>
                        </div>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className="footer__link__title">Quick Links</h5>
                        <ListGroup className='div'>
                            {
                                footerQuickLinks.map((item,i)=> (
                                    <ListGroupItem key={i} className='link__item'>
                                        <a href={item.url}>{item.display}</a>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>


                    <Col lg='2' md='4' sm='6'>
                        <h5 className="footer__link__title">Info Links</h5>
                        <ListGroup>
                            {
                                footerLinks.map((item,i)=> (
                                    <ListGroupItem key={i} className='link__item'>
                                        <a href={item.url}>{item.display}</a>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>

                    <Col lg='3' md='4' sm='6'>
                        <h5 className="footer__link__title">Contact</h5>
                        <ListGroup>
                            <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                <i className="ri-map-pin-line"></i>
                                Rajasthan, India
                            </ListGroupItem>
                            <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                <i className="ri-mail-line"></i>
                                abhisheksaii655@gmail.com
                            </ListGroupItem>
                            <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                <i className="ri-phone-line"></i>
                                +91 82012-34515
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="footer__bottom">
            <Container>
                <Row>
                    <Col lg='12'>
                        <p>Copyright 2023, Foodlance. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </footer>
  )
}

export default Footer