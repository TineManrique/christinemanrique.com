import React from 'react';
import { Container } from "react-bootstrap";
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Title from '../components/Title';

export default () => {
    return (
        <>
            <Navigation></Navigation>
            <section>
                <Container>
                    <Title title="About Her" />
                </Container>
            </section>
            <Footer></Footer>
        </>
    );
}