import React from 'react';
import { Container } from "react-bootstrap";
import Blog from "../components/Blog";
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Title from '../components/Title';

export default () => {
    return (
        <>
            <Navigation></Navigation>
            <section>
                <Container>
                    <Title title="Blog" />
                    <BlogPost></BlogPost>
                    {/* <Blog></Blog> */}
                </Container>
            </section>
            <Footer></Footer>
        </>
    );
}