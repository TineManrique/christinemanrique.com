import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../style/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang='en' />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
          </Fade>
        </Container>
      </section>
    </>
  );
};
