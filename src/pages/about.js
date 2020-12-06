import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/About';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default () => {
    return (
        <>
        <Helmet>
            <script type="text/javascript" async src="//cdn.youracclaim.com/assets/utilities/embed.js"></script>
            <meta charSet="utf-8" />
            <title>Christine Manrique | Developer</title>
            <html lang='en'/>
            <meta name="description" content='Portfolio | christinemanrique.com' />
        </Helmet>
            <Navigation></Navigation>
            <About></About>
            <Footer></Footer>
        </>
    );
}