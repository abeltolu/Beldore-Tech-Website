import React from 'react';
import styled from 'styled-components';
import { IServiceProps } from '../../types/interface';

//Services List
interface IProps {
    services: IServiceProps[];
}
export const HomePageServices: React.FC<IProps> = ({ services }) => {
    return (
        <StWrapper>
            {services.map(({ icon, title, description, key }) => (
                <SingleHomePageService
                    key={key}
                    icon={icon}
                    title={title}
                    description={description}
                />
            ))}
        </StWrapper>
    );
};

const StWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 36px 24px;
`;

//Single Service
export const SingleHomePageService: React.FC<IServiceProps> = React.memo(
    ({ title, icon, description }) => {
        return (
            <StSingleWrapper>
                {icon}
                <span className="title">{title}</span>
                <span className="description">{description}</span>
            </StSingleWrapper>
        );
    }
);

const StSingleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 24px;

    span.title {
        font-size: var(--fz-xl);
        font-style: normal;
        line-height: 1.2;
        color: var(--black);
    }

    span.description {
        font-size: var(--fz-sm);
        font-style: normal;
        line-height: 1.5;
        color: var(--light-black);
    }
`;
