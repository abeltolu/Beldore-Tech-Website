import React from 'react';
import styled from 'styled-components';
import StaticQueryImage from '../staticimage';

const ServicesHeroImage = () => {
    return (
        <StWrapper>
            <StaticQueryImage path="services_hero.png" alt="Beldore Services" />
        </StWrapper>
    );
};

const StWrapper = styled.div`
    position: absolute;
    top: -130px;
    left: 100px;
    right: 100px;
    width: auto;
    height: 548px;
`;

export default ServicesHeroImage;
