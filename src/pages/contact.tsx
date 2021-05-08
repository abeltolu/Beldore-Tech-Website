import React from 'react';
import styled from 'styled-components';
import GetInTouch from '../components/contact/getintouch.comp';
import Footer from '../components/footer';
import Header from '../components/header';
import ContactForm from '../components/contact/contactform';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact Us" />
            <HeroSection>
                <Header variant="black" />
                <GetInTouch />
                <ContactForm />
            </HeroSection>
            <Footer />
        </Layout>
    );
};

const HeroSection = styled.section`
    width: 100%;
    min-height: 100vh;
    background: var(--light-green);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    align-items: center;
    padding: 180px var(--layout-margin-lr);
`;

export default ContactPage;
