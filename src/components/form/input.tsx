import { transparentize } from 'polished';
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    margin: 0;
    padding: 0;
    border: none;
    font-size: var(--fz-sm);
    line-height: 1.2;
    font-weight: 400;
    padding-bottom: 10px;
    background: var(--white);
    border-bottom: 1px solid ${transparentize(0.5, '#000')};
    outline: none;

    &:focus,
    &:active {
        border-bottom: 1px solid ${transparentize(0.1, '#56BCA0')};
    }
`;

export default StyledInput;
