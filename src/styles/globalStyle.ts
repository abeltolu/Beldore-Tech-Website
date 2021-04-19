import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';
import TransitionStyles from './transitionStyles';
import { transparentize } from 'polished';
import ButtonStyles from './buttonStyles';

const GlobalStyle = createGlobalStyle`
    ${Fonts}
    :root {
        --black: #000000;
        --light-black: ${transparentize(0.5, '#000000')};
        --white: #FFFFFF;
        --green: #56BCA0;
        --light-green: #DEFFF6;
        --bg-black: #1D1D1D;
        --font-sans: 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
        --fz-xxs: 12px;
        --fz-xs: 14px;
        --fz-sm: 16px;
        --fz-md: 18px;
        --fz-lg: 20px;
        --fz-22: 22px;
        --fz-xl: 24px;
        --fz-xxl: 48px;
        --fz-56: 56px;
        --nav-height: 120px;
        --header-margin-bottom: 48px;
        --header-margin-bottom-mobile: 24px;

        --layout-margin-lr: 100px;
        --layout-margin-lr-tablet: 50px;
        --layout-margin-lr-mobile: 25px;
        --page-padding-top: 40px;

        --hero-margin: 30px;
        --hero-h1-fz: 72px;
        --hero-h1-lh: 1.2;
        --about-paragraph-spacing: 20px;
        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    html {
        box-sizing: border-box;
        width: 100%;
    }
    
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    
    ::selection {
        background-color: var(--green);
        color: var(--light-black);
    }

    h1, h2, h3, h4, h5, h6, p, button {
        padding: 0;
        margin: 0;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--white);
        color: var(--light-black);
        font-family: var(--font-sans);
        font-size: var(--fz-sm);
        line-height: 1.5;
    }

    a {
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;

        &:hover, &:focus {
            color: var(--green);
        }
    }
    
    ${ButtonStyles}
    ${TransitionStyles}
`;

export default GlobalStyle;
