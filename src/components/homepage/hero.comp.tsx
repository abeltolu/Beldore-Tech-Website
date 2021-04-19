import React from 'react';
import styled from 'styled-components';

const HomePageHero = () => {
    return (
        <HeroText>
            We inspire businesses to <br />
            <span className="highlighted">bring innovative ideas to life</span>
        </HeroText>
    );
};

const HeroText = styled.h1`
    font-size: var(--hero-h1-fz);
    font-weight: normal;
    line-height: var(--hero-h1-lh);
    text-align: center;
    color: var(--white);
    max-width: 953px;

    span.highlighted {
        color: var(--green);
    }
`;

export default HomePageHero;
