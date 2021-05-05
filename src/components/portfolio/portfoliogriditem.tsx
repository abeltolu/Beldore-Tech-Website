import React from 'react';
import styled from 'styled-components';
import { IProjectProps } from '../../types/interface';

interface IPortfolioGrid extends IProjectProps {
    className: string;
}
const PortfolioGridItem: React.FC<IPortfolioGrid> = ({
    title,
    description,
    imageData,
    className,
}) => {
    return (
        <StWrapper className={className}>
            <div className="image">
                <img src={imageData} />
            </div>
            <span className="title">{title}</span>
            <span className="description">{description}</span>
        </StWrapper>
    );
};

const StWrapper = styled.div`
    display: flex;
    flex-direction: column;

    div.image {
        width: 100%;
        height: auto;
        margin-bottom: 24px;

        img {
            width: 100%;
            transition-duration: 250ms;
            transition-property: background, box-shadow, color, transform;
            transition-timing-function: ease-in-out;
            &:hover {
                transform: scale(1.03);
            }
        }
    }

    span.title {
        font-size: var(--fz-md);
        line-height: 1.3;
        font-weight: 600;
        color: var(--black);
        margin-bottom: 12px;
    }

    span.description {
        font-size: var(--fz-sm);
        line-height: 1.5;
        font-style: normal;
        color: var(--light-black);
    }
`;

export default PortfolioGridItem;
