import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { deviceMax } from '../styles/theme';
import Logo, { ILogoVariants } from './logo';
import Nav from './nav';

interface IHeaderProps {
    variant?: ILogoVariants;
}
const Header: React.FC<IHeaderProps> = ({ variant }) => (
    <StHeader>
        <Logo variant={variant} />
        <Nav variant={variant} />
        <Link to="/contact" className="button button--green button--medium">
            Get in Touch
        </Link>
    </StHeader>
);

const StHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 40px;
    left: var(--layout-margin-lr);
    right: var(--layout-margin-lr);

    @media ${deviceMax.tablet} {
        left: var(--layout-margin-lr-tablet);
        right: var(--layout-margin-lr-tablet);
    }

    @media ${deviceMax.mobileL} {
        left: var(--layout-margin-lr-mobile);
        right: var(--layout-margin-lr-mobile);
    }
`;

export default Header;
