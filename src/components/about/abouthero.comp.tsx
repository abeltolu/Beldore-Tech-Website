import React from 'react';
import styled from 'styled-components';

const AboutHero = () => {
    return (
        <HeroText>
            <h1 className="main">
                We create and build thoughtful digital experiences for the
                modern world
            </h1>
        </HeroText>
    );
};

const HeroText = styled.div`
    text-align: center;
    max-width: 80%;
    margin: 0 auto;

    h1.main {
        font-size: var(--hero-h1-fz);
        font-weight: normal;
        line-height: var(--hero-h1-lh);
        color: var(--black);
    }
`;

export default AboutHero;
