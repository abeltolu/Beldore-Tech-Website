import React from 'react';
import styled from 'styled-components';
import BigArrow from '../icons/bigarrow.tsx';

const HomepageContactSection = () => {
    return (
        <StFormDetails>
            <h2 className="section-title">
                Have a Project?
                <br />
                Tell us about it
            </h2>
            <BigArrow />
        </StFormDetails>
    );
};

const StFormDetails = styled.div`
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export default HomepageContactSection;
