import { Link } from 'gatsby';
import React from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';
import styled from 'styled-components';
import ArrowLeftIcon from '../icons/arrowleft';

const WhatWeDo = () => {
    return (
        <StWrapper>
            <Slide direction="left" triggerOnce>
                <h2 className="section-title">What We Do</h2>
                <p className="content">
                    At Beldore, We build custom software that allows businesses
                    to meet their needs and constraints. we serve as a strategic
                    partner, and help our clients digitally transform to improve
                    their products, speed up service delivery, increase
                    operational efficiency, and expand to new markets.
                </p>
            </Slide>
            <Link
                to="/services"
                className="button button--shadow-green button--underlined text-black"
            >
                <Slide direction="left" triggerOnce>
                    <span className="text">Our Services</span>
                    <ArrowLeftIcon />
                </Slide>
            </Link>
        </StWrapper>
    );
};

const StWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 30px;

    h2.title {
        font-size: var(--fz-xxl);
        font-style: normal;
        line-height: 1.5;
        color: var(--black);
    }

    p.content {
        font-size: var(--fz-sm);
        font-style: normal;
        line-height: 1.5;
        color: var(--light-black);
    }
`;

export default WhatWeDo;
