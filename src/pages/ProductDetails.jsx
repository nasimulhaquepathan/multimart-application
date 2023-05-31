import React, { useEffect, useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductList from "../components/UI/ProductList";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/product-details.css";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    productName,
    price,
    imgUrl,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
    toast.success('Review submitted!')
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        Image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product added successfully.");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt='' />
            </Col>
            <Col lg='6'>
              <div className='product_details'>
                <h2>{productName}</h2>
                <div className='product_rating d-flex align-items-center gap-5 mb-3'>
                  <div>
                    <span>
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-half-s-line'></i>
                    </span>
                  </div>
                  <p>({avgRating}ratings)</p>
                </div>

                <span className='product_price mt-2'>${price}</span>
                <p className='py-4'>{shortDesc}</p>

                <button className='buy_btn' onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='tab_wrapper d-flex align-items-center gap-5 pb-4'>
                <h6
                  className={`${tab === "desc" ? "active_tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active_tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className='tab_content mt-2'>
                  <p>{description}</p>
                </div>
              ) : (
                <div className='product_review'>
                  <div className='review_wrapper'>
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className='mb-4'>
                          <h6>Jhon Doe</h6>
                          <span>{item.rating} (rating) </span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className='review_form'>
                      <h4>Leave your experience</h4>
                      <form action='' onSubmit={submitHandler}>
                        <div className='form_group'>
                          <input
                            type='text'
                            placeholder='Enter name'
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div className='form_group d-flex align-items-center gap-5 '>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1 <i className='ri-star-s-fill'></i>{" "}
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2 <i className='ri-star-s-fill'></i>{" "}
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3 <i className='ri-star-s-fill'></i>{" "}
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4 <i className='ri-star-s-fill'></i>{" "}
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5 <i className='ri-star-s-fill'></i>{" "}
                          </motion.span>
                        </div>

                        <div className='form_group'>
                          <textarea
                            ref={reviewMsg}
                            type='text'
                            rows={4}
                            placeholder='Review Message..'
                            required
                          />
                        </div>

                        <button type='submit' className='buy_btn'>
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg='12'>
              <h2 className='related_title mt-5 mb-4'>You might also like</h2>
            </Col>
            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
