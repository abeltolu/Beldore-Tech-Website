import * as React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import { HomePageServices } from '../components/services/homepage.comp';
import { servicesList } from '../config';
import WhatWeDo from '../components/services/whatwedo.comp';
import HomePageHero from '../components/homepage/hero.comp';
import ProjectsHeader from '../components/homepage/projectsheader.comp';
import HomePageProjects from '../components/projects/homepage.comp';
import HomepageAbout from '../components/about/homepage.comp';
import HomepageContactSection from '../components/homepage/contactsection';
import HomepageContactForm from '../components/contact/contactform';
import Footer from '../components/footer';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <HeroSection>
            <Header variant="white" />
            <HomePageHero />
        </HeroSection>
        <ServicesSection>
            <WhatWeDo />
            <HomePageServices services={servicesList} />
        </ServicesSection>
        <ProjectsSsection>
            <ProjectsHeader />
            <HomePageProjects />
        </ProjectsSsection>
        <AboutSection>
            <HomepageAbout />
        </AboutSection>
        <FormSection>
            <HomepageContactSection />
            <HomepageContactForm />
        </FormSection>
        <Footer />
    </Layout>
);

const HeroSection = styled.section`
    width: 100%;
    min-height: 100vh;
    background: var(--bg-black);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ServicesSection = styled.section`
    width: 100%;
    min-height: 100vh;
    background: var(--white);
    padding: 100px var(--layout-margin-lr);
    display: grid;
    grid-template-columns 440px 1fr;
    grid-gap: 70px;
`;

const ProjectsSsection = styled.section`
    width: 100%;
    min-height: 100vh;
    background: var(--white);
    position: relative;
`;

const AboutSection = styled.section`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background: var(--white);
    padding: 100px var(--layout-margin-lr);
`;

const FormSection = styled.section`
    width: 100%;
    min-height: 100vh;
    background: var(--light-green);
    padding: 100px var(--layout-margin-lr);
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
`;

export default IndexPage;
