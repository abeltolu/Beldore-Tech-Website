import React from 'react';
import styled from 'styled-components';

const ServicesPageHero = () => {
    return (
        <HeroText>
            <h1 className="hero-title">Our Services</h1>
            <span className="hero-description">
                At Beldore, We build custom software that allows businesses to
                meet their needs and constraints. We serve as a strategic
                partner, and help our clients digitally transform to improve
                their products, speed up service delivery, increase operational
                efficiency, and expand to new markets.
            </span>
        </HeroText>
    );
};

const HeroText = styled.div`
    max-width: 960px;
    text-align: center;

    h1.hero-title {
        font-weight: normal;
        font-size: var(--hero-h1-fz);
        line-height: var(--hero-h1-lh);
        color: var(--black);
        margin-bottom: 60px;
    }

    span.hero-description {
        font-weight: 400;
        font-size: var(--fz-lg);
        line-height: 1.8;
        color: var(--light-black);
    }
`;

export default ServicesPageHero;
