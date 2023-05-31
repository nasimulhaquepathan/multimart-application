import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/home.css";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";

import products from "../assets/data/products";
import Clock from "../components/UI/Clock";

import counterImg from '../assets/images/counter-timer-img.png'

const Home = () => {
  const [trending_products, setTrendingProducts] = useState([])
  const [data, setData] = useState(products);
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProduct] = useState([])

  const year = new Date().getFullYear();

  useEffect(() => {
    const filterProducts = products.filter((item) => item.category === "sofa");
    const filterBestProducts = products.filter((item) => item.category === "chair");

    const filterMobileProducts = products.filter((item) => item.category === "mobile");

    const filterWirelessProducts = products.filter((item) => item.category === "wireless");

    const filterPopularProducts = products.filter((item) => item.category === "watch");

    setData(filterProducts);
    setTrendingProducts(filterBestProducts);
    setMobileProducts(filterMobileProducts)
    setWirelessProducts(filterWirelessProducts)
    setPopularProduct(filterPopularProducts)
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero_content'>
                <p className='hero_subtitle'>Trending product {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p className='mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  voluptas quidem accusantium molestias magnam illo?
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'>
                  <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className='hero_img'>
                <img src={heroImg} alt='heroImg' width='100%' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className='trending_products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'>Trending Products</h2>
            </Col>
            <ProductList data={data} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList data={trending_products} />
          </Row>
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="clock_top-content">
                <h4 className="text-white fs-5 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button whileTap={{scale: 1.2}} className="buy_btn mt-4">
                <Link to='/shop'>Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg='6' md='6' className="text-end text-white counter_img ">
              <img src={counterImg} alt="" />
            </Col> 
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
          </Row>
        </Container>
      </section>
      <section className="wireless_product">
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className="section_title">Wireless Products</h2>
            </Col>
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular_product">
        <Container>
          <Row>
            <Col lg='12' className="text-center mb-5">
              <h2 className="section_title">Popular Products</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default Home;
