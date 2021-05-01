import React from 'react';
import styled from 'styled-components';
import StyledInput from '../form/input';
import ArrowLeftIcon from '../icons/arrowleft';

const HomepageContactForm = () => {
    return (
        <StWrapper>
            <StFormInputs>
                <StyledInput placeholder="Full Name" />
                <StyledInput placeholder="Email Address" />
                <StyledInput placeholder="Phone Number" />
                <StyledInput placeholder="About Project" />
            </StFormInputs>

            <button className="button button--shadow-green button--underlined text-black">
                <span className="text">Send Message</span>
                <ArrowLeftIcon />
            </button>
        </StWrapper>
    );
};

const StWrapper = styled.div`
    padding: 45px;
    background: var(--white);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StFormInputs = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 40px;
`;

export default HomepageContactForm;
