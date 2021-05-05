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
                <img src={imageData} width={'100%'} />
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
