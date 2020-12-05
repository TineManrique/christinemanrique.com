import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Navigation from './Navigation';

const Banner = () => {
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
    <section id="hero" className="jumbotron">
      <Navigation hasNavBackground="false"></Navigation>
      <div className="banner" style={{display: 'flex'}}>
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              Hi there, I'm 
              <span className="text-color-main"> Christine Manrique</span>
              <br />
              <p>Welcome to my website</p>
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--primary">
                <Link to="about" smooth="true" duration={1000}>
                  Explore more
                </Link>
              </span>
            </p>
          </Fade>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
