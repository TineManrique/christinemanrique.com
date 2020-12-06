import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="#navigation" smooth="true" duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          <a
            href='https://github.com/TineManrique'
            rel="noopener noreferrer"
            target="_blank"
            aria-label="github"
          >
            <i className={`fa fa-github fa-inverse`} />
          </a>
          <a
            href='https://www.linkedin.com/in/christinemanrique'
            rel="noopener noreferrer"
            target="_blank"
            aria-label="linkedin"
          >
            <i className={`fa fa-linkedin fa-inverse`} />
          </a>
          <a
            href='https://www.instagram.com/christinemanrique/'
            rel="noopener noreferrer"
            target="_blank"
            aria-label="instagram"
          >
            <i className={`fa fa-instagram fa-inverse`} />
          </a>
        </div>
        <hr />
        <p className="footer__text">
          <Link to='/terms'>Terms and Condition </Link>&nbsp;|&nbsp;
          <Link to='/privacy'> Privacy Policy</Link>
        </p>
        <p className="footer__text">
          © {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
