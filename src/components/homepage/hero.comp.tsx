import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import styled from 'styled-components';

const HomePageHero = () => {
    return (
        <Zoom triggerOnce>
            <HeroText>
                We inspire businesses to <br />
                <span className="highlighted">
                    bring innovative ideas to life
                </span>
            </HeroText>
        </Zoom>
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
