import { Link } from 'gatsby';
import { string } from 'prop-types';
import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import styled from 'styled-components';
import ArrowLeftIcon from '../icons/arrowleft';

interface ISingleStats {
    top: string;
    bottom: string;
    topColor?: string;
}
export const SingleStats: React.FC<ISingleStats> = ({
    top,
    bottom,
    topColor,
}) => {
    return (
        <StSingleStats color={topColor}>
            <span className="big">{top}</span>
            <span className="small">{bottom}</span>
        </StSingleStats>
    );
};

const StSingleStats = styled.div`
    text-align: center;
    span.big {
        display: block;
        font-size: var(--fz-56);
        color: ${({ color }) => color || 'var(--green)'};
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
`;

const HomepageAbout = () => {
    return (
        <StWrapper>
            <Zoom triggerOnce>
                <div className="overview">
                    We create and build thoughtful digital experiences for the
                    modern world. As a full-service digital agency, we work
                    closely with our clients to define, design and develop
                    transformative user experiences across all platforms and
                    brand’s touchpoints.
                </div>
                <div className="quick-info">
                    <SingleStats top="15+" bottom="Team Strength" />
                    <SingleStats top="7 years" bottom="Experience" />
                    <SingleStats top="50+" bottom="Happy Clients" />
                </div>
            </Zoom>
            <div className="about-link">
                <Link
                    to="/about"
                    className="button button--shadow-green button--underlined text-black"
                >
                    <Zoom triggerOnce>
                        <span className="text">About Beldore</span>
                        <ArrowLeftIcon />
                    </Zoom>
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
    }

    div.about-link {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default HomepageAbout;
