import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '../icons/arrowleft';

const WhatWeDo = () => {
    return (
        <StWrapper>
            <h2 className="title">What We Do</h2>
            <p className="content">
                At Beldore, We build custom software that allows businesses to
                meet their needs and constraints. we serve as a strategic
                partner, and help our clients digitally transform to improve
                their products, speed up service delivery, increase operational
                efficiency, and expand to new markets.
            </p>
            <Link
                to="/services"
                className="button button--shadow-green our-services"
            >
                <span className="text">Our Services</span>
                <ArrowLeftIcon />
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

    a.our-services {
        display: flex;
        align-items: center;
        span.text {
            font-size: var(--fz-xl);
            font-weight: 500;
            line-height: 1.5;
            color: var(--black);
            margin-right: 8px;
        }
    }
`;

export default WhatWeDo;
