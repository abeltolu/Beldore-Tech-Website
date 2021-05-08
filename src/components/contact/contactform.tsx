import React from 'react';
import styled from 'styled-components';
import StyledInput, { StyledTextArea } from '../form/input';
import ArrowLeftIcon from '../icons/arrowleft';
import { contactServices } from '../../config';
import StyledSelect from '../form/select';

const ContactForm = () => {
    const options = contactServices.map((service) => ({
        value: service,
        label: service,
    }));
    return (
        <StWrapper>
            <StFormInputs>
                <StyledInput placeholder="Full Name" />
                <StyledInput placeholder="Email Address" />
                <StyledInput placeholder="Phone Number" />
                <StyledSelect
                    options={options}
                    isMulti={true}
                    placeholder="Interested Services"
                />
                <StyledTextArea placeholder="Tell us more about your project" />
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
    gap: 40px;
`;

const StFormInputs = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 40px;
`;

export default ContactForm;
