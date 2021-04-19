import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { deviceMax } from '../styles/theme';
import Logo from './logo';
import Nav from './nav';

const Header = () => (
    <StHeader>
        <Logo />
        <Nav />
        <Link to="/contact" className="button button--green button--medium">
            Get in Touch
        </Link>
    </StHeader>
);

const StHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px var(--layout-margin-lr);
    position: absolute;
    width: 100%;
    top: 40px;

    @media ${deviceMax.tablet} {
        padding: 0px var(--layout-margin-lr-tablet);
    }

    @media ${deviceMax.mobileL} {
        padding: 0px var(--layout-margin-lr-mobile);
    }
`;

export default Header;
