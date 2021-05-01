import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '../icons/arrowleft';

const HomepageAbout = () => {
    return (
        <StWrapper>
            <div className="overview">
                We create and build thoughtful digital experiences for the
                modern world. As a full-service digital agency, we work closely
                with our clients to define, design and develop transformative
                user experiences across all platforms and brand’s touchpoints.
            </div>
            <div className="quick-info">
                <div className="single-info">
                    <span className="big">15+</span>
                    <span className="small">Team Strength</span>
                </div>
                <div className="single-info">
                    <span className="big">7 years</span>
                    <span className="small">Experience</span>
                </div>
                <div className="single-info">
                    <span className="big">50+</span>
                    <span className="small">Happy Clients</span>
                </div>
            </div>
            <div className="about-link">
                <Link
                    to="/about"
                    className="button button--shadow-green button--underlined text-black"
                >
                    <span className="text">About Beldore</span>
                    <ArrowLeftIcon />
                </Link>
            </div>
        </StWrapper>
    );
};

const StWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div.overview {
        font-size: var(--fz-xl);
        color: var(--black);
        line-height: 1.5;
        text-align: center;
        max-width: 1053px;
        margin: 0 auto;
    }

    div.quick-info {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        div.single-info {
            text-align: center;
            span.big {
                display: block;
                font-size: var(--fz-56);
                color: var(--green);
                font-weight: 500;
                line-height: 1.3;
                margin-bottom: 4px;
            }

            span.small {
                display: block;
                font-size: var(--fz-xs);
                color: var(--light-black);
                font-weight: normal;
                line-height: 1.3;
            }
        }
    }

    div.about-link {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default HomepageAbout;
