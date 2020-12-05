import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

function Navigation({hasNavBackground}) {
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
        <div className={!hasNavBackground ? 'navbar-background' : ''}>
            <Fade top={isDesktop} duration={1000} delay={500} distance="30px">
                <Navbar id="navigation">
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse>
                    <Nav as="ul">
                        <Nav.Item as="li">
                            <Link to="/" activeClassName="active">Home</Link>
                            <Link to="/about" activeClassName="active">About</Link>
                            <Link to="/blog" activeClassName="active">Blog</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Fade>
        </div>
    );
}

export default Navigation;