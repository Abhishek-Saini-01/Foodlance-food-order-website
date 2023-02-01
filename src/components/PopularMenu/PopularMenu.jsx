import React from 'react'
import './PopularMenu.css'
import { Container, Row, Col } from 'reactstrap'
import { popularMenuFood } from '../../assets/fake-data/products'
import ProductCard from '../ProductCard/ProductCard'

const PopularMenu = () => {
  return (
    <section>
        <Container className='pt-0'>
            <Row>
                <Col lg="12" className='mb-5'>
                    <h2 className='popular__menu__title' >Popular Food Menu</h2>
                </Col>

                {
                    popularMenuFood.map((item)=> (
                        <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
                            <ProductCard item={item} />                            
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default PopularMenu