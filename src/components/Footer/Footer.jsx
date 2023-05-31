import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
// import logo from "../../assets/images/eco-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6' xm='6'>
            <div className='logo footer_logo text-start'>
              <div>
                <h5 className='logoTitle'>Multimart</h5>
                <small className='footer_text mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta lorem amet consectetur adipisicing elit.
                  Soluta lorem..
                </small>
              </div>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6' xm='6'>
            <h5 className='footer_title'>Delivery Time</h5>
            <ListGroup className='delivery_time-list'>
              <ListGroupItem className=' delivery_time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=' delivery_time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6' xm='6'>
            <h5 className='footer_title'>Contact</h5>
            <ListGroup className='delivery_time-list'>
              <ListGroupItem className=' delivery_time-item border-0 ps-0'>
                <p>Location: Netrokona, Mymensingh, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className=' delivery_time-item border-0 ps-0'>
                <span>Phone: 01629558696</span>
              </ListGroupItem>

              <ListGroupItem className=' delivery_time-item border-0 ps-0'>
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6' xm='6'>
            <h5 className='footer_title'>Newsletter</h5>
            <p className='subscibe_desc'>Subscribe our newsletter</p>
            <div className='newsletter'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-100'
              />
              <span>
                <i className='ri-send-plane-line'></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col lg='6' md='6' sm='6' xm='12' className='m-auto p-2'>
            <div className='social_links d-flex align-items-center gap-4 justify-content-center'>
              <span>
                <Link to='#'>
                  <i className='ri-facebook-line'></i>
                </Link>
              </span>
              <span>
                <Link to='#'>
                  <i className='ri-github-line'></i>
                </Link>
              </span>
              <span>
                <Link to='#'>
                  <i className='ri-linkedin-line'></i>
                </Link>
              </span>
              <span>
                <Link to='#'>
                  <i className='ri-youtube-line'></i>
                </Link>
              </span>
            </div>
          </Col>
          <Col lg='6' md='6' sm='12' xm='12'>
            <p className='copyrights_text text-center'>
              Copyright - 2022, website mady by Nasim Ahmed, All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
