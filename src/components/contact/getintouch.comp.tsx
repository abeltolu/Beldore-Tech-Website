import React from 'react';
import styled from 'styled-components';
import { contactInfo } from '../../config';
import { IContactInfo } from '../../types/interface';

const GetInTouch = () => {
    return (
        <StGetInTouch>
            <h1 className="page-title">Get In Touch</h1>
            <span className="page-description">
                Share your project scope, timeframes, or business challenges
                you'd like to solve. Our team will carefully study them and then
                we'll figure out the next move together.
            </span>
            <ContactDetailsSection />
        </StGetInTouch>
    );
};

const StGetInTouch = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--fz-36);

    h1.page-title {
        font-size: var(--hero-h1-fz);
        font-weight: normal;
        line-height: var(--hero-h1-lh);
        color: var(--black);
    }

    span.page-description {
        font-size: var(--fz-md);
        font-weight: normal;
        line-height: 1.5;
        color: var(--light-black);
    }
`;

const ContactDetailsSection = () => {
    return (
        <StContactDetailsSection>
            {Object.keys(contactInfo).map((key, index) => (
                <ContactInfo key={index} {...contactInfo[key]} />
            ))}
        </StContactDetailsSection>
    );
};

const StContactDetailsSection = styled.div`
    display: grid;
    gap: var(--fz-36);
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
        'phone email'
        /*'location location'*/;
    > * {
        grid-area: email;
        &:first-child {
            grid-area: phone;
        }
        /*&:last-child {
            grid-area: location;
        }*/
    }
`;

const ContactInfo: React.FC<IContactInfo> = ({ icon, title, details }) => {
    return (
        <StContactInfo>
            <div className="top">
                {icon}
                <span className="title">{title}</span>
            </div>
            <div className="bottom">{details}</div>
        </StContactInfo>
    );
};

const StContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    div.top {
        display: flex;
        align-items: center;
        gap: 24px;

        span.title {
            font-size: var(--fz-md);
            font-weight: normal;
            line-height: 1.5;
            color: var(--black);
        }
    }

    div.bottom {
        font-size: var(--fz-md);
        font-weight: normal;
        line-height: 1.5;
        color: var(--footer-link-color);
    }
`;

export default GetInTouch;
