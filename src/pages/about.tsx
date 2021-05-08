import React from 'react';
import styled from 'styled-components';
import AboutHero from '../components/about/abouthero.comp';
import {
    AboutCompanyStats,
    AboutInfo,
} from '../components/about/aboutinfo.comp';
import Footer from '../components/footer';
import Header from '../components/header';
import LetsBuildJumbotron from '../components/jumbotrons/letsbuild';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
            <HeroSection>
                <Header variant="black" />
                <AboutHero />
            </HeroSection>
            <AboutDetailsSection>
                <AboutInfo />
                <AboutCompanyStats />
            </AboutDetailsSection>
            <LetsBuildJumbotron />
            <Footer />
        </Layout>
    );
};

const HeroSection = styled.section`
    width: 100%;
    min-height: 100vh;
    background: var(--light-green);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AboutDetailsSection = styled.section`
    width: 100%;
    min-height: 100vh;
    background: var(--white);
    display: grid;
    grid-template-columns: 550px 1fr;
    align-items: center;
    padding: var(--layout-margin-lr);
`;

export default AboutPage;
