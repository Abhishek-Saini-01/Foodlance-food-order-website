import React from 'react'
import './Testimonials.css'
import { Container, Row, Col } from 'reactstrap'
import testimonialImg from '../../assets/images/review1.png'
import  Slider  from 'react-slick';

const Testimonials = () => {

    const settings ={
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        SlidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    }

  return (
    <section>
        <Container>
            <Row >
                <Col lg='8' sm='12' md='10' className='m-auto '>
                    <div className="slider__wrapper d-flex  align-items-center gap-5">
                        <div className="slide__content w-50">
                            <h2 className='mb-4'>What our Customer are saying</h2>
                            <Slider {...settings}>
                                <div>
                                    <div className="single__testimonial">
                                        <p className="review__content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, fuga delectus? Maxime eaque esse, iste reiciendis consectetur hic error quo.
                                        </p>

                                        <h6>Jhon Doe</h6>
                                        <p>Prof. Chef</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="single__testimonial">
                                        <p className="review__content">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, fuga delectus? Maxime eaque esse, iste reiciendis consectetur hic error quo.
                                        </p>

                                        <h6>Jhon Doe</h6>
                                        <p>Prof. Chef</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                        <div className="slider__img w-50">
                            <img src={testimonialImg} alt="testimonial-image" className='w-100'/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Testimonials