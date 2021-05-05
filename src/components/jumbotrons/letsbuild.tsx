import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '../icons/arrowleft';

const LetsBuildJumbotron = () => {
    return (
        <StWrapper>
            <div className="wrapper">
                <span className="main">
                    Let’s build something awesome for you
                </span>
                <Link
                    to="/contact"
                    className="button button--shadow-green button--underlined text-black"
                >
                    <span className="text">Hire Us</span>
                    <ArrowLeftIcon />
                </Link>
            </div>
        </StWrapper>
    );
};

const StWrapper = styled.section`
    position: relative;
    width: 100%;
    background: var(--light-green);
    padding: var(--layout-margin-lr);

    div.wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 750px;
        margin: 0 auto;
    }

    span.main {
        font-weight: normal;
        font-size: var(--hero-h1-fz);
        line-height: var(--hero-h1-lh);
        color: var(--black);
        margin-bottom: 60px;
    }
`;

export default LetsBuildJumbotron;
