import React from 'react';
import styled from 'styled-components';

const PortfolioHeroText = () => {
    return (
        <HeroText>
            <h1 className="main">Our Works</h1>
        </HeroText>
    );
};

const HeroText = styled.div`
    text-align: center;
    width: 100%;

    h1.main {
        font-size: var(--hero-h1-fz);
        font-weight: normal;
        line-height: var(--hero-h1-lh);
        color: var(--black);
    }
`;

export default PortfolioHeroText;
