import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import { Link, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import { graphql } from "gatsby";

const About = () => {
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

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about-profile.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width: 320, height: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <Img fixed={data.file.childImageSharp.fixed} className="about-wrapper__profile-image"
              alt="profile"/>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  I graduated with a degree in Computer Engineering and been coding for seven years including my five-year professional experience as a Software Engineer / Full Stack Developer.
                </p>
                <p className="about-wrapper__info-text">
                  As a full-stack developer, I have hands-on experience for both Client-side and Server-side development.
                  I have been involved in projects ranging from registration and payment pages to third party integrations.
                  I am proficient in Front-end technologies such as <b className="about-wrapper__info-text--emphasize">HTML, CSS, Javascript, Angular and React JS</b>.
                  In Back-end, I am knowledgeable in <b className="about-wrapper__info-text--emphasize">REST API, PHP, Node JS and Python</b>. 
                  I also worked with <b className="about-wrapper__info-text--emphasize">MySQL, PostgreSQL and MariaDB</b> databases.
                </p>
                <p className="about-wrapper__info-text">
                  I have been a good follower and an efficient leader. I led team sprints and became a sub lead of my own team.
                  I am an <b className="about-wrapper__info-text--emphasize">AWS Certified Cloud Practioner</b>. I also took online courses which I earned certificates.
                </p>
                <p className="about-wrapper__info-text">
                  <b className="about-wrapper__info-text--emphasize">
                    <i>Get to know me more by previewing my resume below or go to 
                    <Link to='/about'> About </Link>page</i>
                  </b>
                </p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--secondary"
                    href='https://christinemanrique-gen-public.s3-ap-southeast-1.amazonaws.com/Manrique-Resume.pdf'
                  >
                    My Resume
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
