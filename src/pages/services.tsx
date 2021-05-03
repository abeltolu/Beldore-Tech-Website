import React from 'react';
import styled from 'styled-components';
import Footer from '../components/footer';
import Header from '../components/header';
import LetsBuildJumbotron from '../components/jumbotrons/letsbuild';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ServicesPageHero from '../components/services/hero.comp';
import ServicesHeroImage from '../components/services/heroimage.comp';
import ServiceGroupList from '../components/services/servicegrouplist.comp';

const ServicesPage = () => {
    return (
        <Layout>
            <SEO title="Services" />
            <HeroSection>
                <Header variant="black" />
                <ServicesPageHero />
            </HeroSection>
            <ServiceListSection>
                <ServicesHeroImage />
                <ServiceGroupList />
            </ServiceListSection>
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

const ServiceListSection = styled.section`
    width: 100%;
    background: var(--white);
    min-height: 100vh;
    position: relative;
    padding: 100px var(--layout-margin-lr);
    padding-top: 450px;
`;

export default ServicesPage;
