import React from 'react';
import styled from 'styled-components';
import { SingleStats } from './homepage.comp';

export const AboutInfo = () => {
    return (
        <StAboutInfo>
            As a full-service digital agency, we work closely with our clients
            to define, design and develop transformative user experiences across
            all platforms and brand's touchpoints. We build thoughtful digital
            experiences for the modern world. We have created an environment to
            encourage warm exchanges around brands. In a permanent adaptation,
            the ideas are concretized by the bonds which we weave between our
            customers and our talents.
        </StAboutInfo>
    );
};

const StAboutInfo = styled.div`
    font-size: var(--fz-22);
    font-style: normal;
    line-height: 1.6;
    color: var(--black);
`;

export const AboutCompanyStats = () => {
    return (
        <StAboutCompanyStats>
            <SingleStats
                top="15+"
                bottom="Team Strength"
                topColor="var(--black)"
            />
            <SingleStats
                top="7 years"
                bottom="Experience"
                topColor="var(--black)"
            />
            <SingleStats
                top="50+"
                bottom="Happy Clients"
                topColor="var(--black)"
            />
        </StAboutCompanyStats>
    );
};

const StAboutCompanyStats = styled.div`
    justify-self: center;
    padding: 80px;
    border: 2px dashed var(--green);
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;

    display: grid;
    grid-auto-flow: row;
    grid-gap: 24px;
`;
