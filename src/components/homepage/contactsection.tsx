import React from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';
import BigArrow from '../icons/bigarrow.tsx';

const HomepageContactSection = () => {
    return (
        <StFormDetails>
            <Slide direction="left" triggerOnce>
                <h2 className="section-title">
                    Have a Project?
                    <br />
                    Tell us about it
                </h2>
                <BigArrow />
            </Slide>
        </StFormDetails>
    );
};

const StFormDetails = styled.div`
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export default HomepageContactSection;
