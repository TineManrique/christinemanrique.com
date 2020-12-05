import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col } from 'react-bootstrap';
import BlogPost from './BlogPost';

const Blog = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section>
      <Row className="blog-wrapper">
        <BlogPost></BlogPost>
        {/* <Col md={6} sm={12}>
          <Fade bottom duration={1000} delay={600} distance="30px">
          </Fade>
        </Col>
        <Col md={6} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          </Fade>
        </Col> */}
      </Row>
    </section>
  );
};

export default Blog;
