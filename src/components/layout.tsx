/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { deviceMax, theme } from '../styles/theme';
import Header from './header';
import GlobalStyle from '../styles/globalStyle';
import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Root>{children}</Root>
        </ThemeProvider>
    );
};

const Root = styled.div`
    width: 100%;
`;

export default Layout;
