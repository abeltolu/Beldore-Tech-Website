import React from 'react';
import styled from 'styled-components';
import CareersHero from '../components/careers/hero.comp';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const CareersPage = () => {
    return (
        <Layout>
            <SEO title="Work With Us" />
            <HeroSection>
                <Header variant="white" />
                <CareersHero />
            </HeroSection>
            <CareersSection>
                <h2 className="section-title">Our Openings</h2>
                <span className="no-openings">
                    Sorry, we do not have any openings at the moment. Be sure to
                    check back very soon.
                </span>
            </CareersSection>
            <Footer />
        </Layout>
    );
};

const HeroSection = styled.section`
    width: 100%;
    min-height: 100vh;
    background: var(--footer-bg-color);
    display: flex;
    flex-direction; column;
    padding: 180px var(--layout-margin-lr);
    padding-bottom: 40px;
`;

const CareersSection = styled.section`
    width: 100%;
    background: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--layout-margin-lr);

    span.no-openings {
        padding: var(--fz-36) 0;
    }
`;

export default CareersPage;
