import { css } from 'styled-components';

const ButtonStyles = css`
    .button {
        text-decoration: none;
        border-radius: 4px;
        transition-duration: 250ms;
        transition-property: background, box-shadow, color, transform, height;
        transition-timing-function: ease-in-out;
        &:hover {
            transform: translateY(-1px);
        }
    }

    .button--green {
        color: var(--white);
        background-color: var(--green);

        &:hover {
            color: var(--white);
        }
    }

    .button--medium {
        padding: 20px 24px;
        font-size: var(--fz-md);
        line-height: calc(var(--fz-md) / 2);
    }

    .button--shadow-green {
        width: max-content;
        border-radius: 0px;
        border-bottom: 1px solid var(--green);
        &:after {
            content: '';
            z-index: -1;
            height: 50%;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            background: var(--light-green);
        }
    }
`;

export default ButtonStyles;
