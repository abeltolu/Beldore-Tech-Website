import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { navLinks } from '../config';
import { ILogoVariants } from './logo';

interface INavProps {
    variant?: ILogoVariants;
}
const Nav: React.FC<INavProps> = ({ variant }) => {
    return (
        <StOrderedList>
            {navLinks.map((nav, index) => (
                <StListItem key={index} to={nav.url} color={variant}>
                    {nav.name}
                </StListItem>
            ))}
        </StOrderedList>
    );
};

const StOrderedList = styled.nav`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 60px;
`;

const colorMaps = {
    white: 'var(--white)',
    black: 'var(--black)',
};
const StListItem = styled(Link)`
    color: ${({ color }) => colorMaps[color] || 'var(--black)'};
    font-size: var(--fz-md);
    font-weight: normal;
    transition-duration: 250ms;
    transition-property: background, box-shadow, color, transform;
    transition-timing-function: ease-in-out;
    &:hover {
        transform: translateY(-1px);
    }
`;

export default Nav;
