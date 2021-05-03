import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { IconLogoBlack, IconLogoWhite } from './icons/logo';

export type ILogoVariants = 'white' | 'black';
interface IProps {
    variant?: ILogoVariants;
}
const Logo: React.FC<IProps> = ({ variant = 'black' }) => {
    return (
        <StWrapper to={'/'}>
            {variant == 'black' ? <IconLogoBlack /> : <IconLogoWhite />}
        </StWrapper>
    );
};

const StWrapper = styled(Link)`
    height: 34px;
`;

export default Logo;
