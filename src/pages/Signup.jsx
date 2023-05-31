import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Signup = () => {
  const signupNameRef = useRef();
  const singupEmailRef = useRef();
  const singupPassRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form action="" className="form mb-5" onSubmit={submitHandler}>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form_group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={singupEmailRef}
                  />
                </div>
                <div className="form_group">
                  <input
                    type="password"
                    placeholder="Password..."
                    required
                    ref={singupPassRef}
                  />
                </div>
                <button type="submit" className="addToCart_btn">
                  Register
                </button>
              </form>
              <Link to="/login">Already have an account? login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;