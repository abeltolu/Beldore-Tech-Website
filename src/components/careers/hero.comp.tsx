import React from 'react';
import styled from 'styled-components';
import { DoubleDownArrows } from '../icons/expandarrows';

const CareersHero = () => {
    return (
        <HeroText>
            <div className="top">
                <h1 className="header-title">Work with us!</h1>
                <span className="header-content">
                    To extend our skilled teams, we don't just look for experts
                    with great technical backgrounds. We look for people with
                    excellent soft skills, inquiring minds, and great aspiration
                    for self-perfection and constant development.
                </span>
            </div>
            <div className="round-button">
                <DoubleDownArrows />
            </div>
        </HeroText>
    );
};

const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    max-width: 80%;
    margin: 0 auto;

    div.top {
        display: flex;
        flex-direction: column;
        h1.header-title {
            font-size: var(--hero-h1-fz);
            font-weight: normal;
            line-height: var(--hero-h1-lh);
            color: var(--white);
            margin-bottom: var(--fz-36);
        }

        span.header-content {
            font-size: var(--fz-xl);
            font-weight: normal;
            line-height: 1.8;
            color: var(--white);
        }
    }

    div.round-button {
        width: 72px;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: var(--green);
        align-self: center;
    }
`;

export default CareersHero;
