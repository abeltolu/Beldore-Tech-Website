import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import IconLogo from './icons/logo';

const Logo = () => {
    return (
        <StWrapper to={'/'}>
            <IconLogo />
        </StWrapper>
    );
};

const StWrapper = styled(Link)`
    height: 34px;
`;

export default Logo;
