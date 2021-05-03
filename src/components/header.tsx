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
