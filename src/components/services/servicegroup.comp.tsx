import React from 'react';
import styled from 'styled-components';
import { IServiceProps } from '../../types/interface';
import AccordionItem from '../accordion/accordion';
import DesignServiceIcon from '../icons/services/design';

const ServiceGroup: React.FC<IServiceProps> = ({
    title,
    description,
    items,
    icon,
    identifier,
}) => {
    return (
        <StWrapper id={`${identifier}`}>
            {icon}
            <span className="service-title">{title}</span>
            <span className="service-description">{description}</span>
            {items
                ? items.map((item, index) => (
                      <AccordionItem
                          key={index}
                          display={index == 0} //expand only the first item
                          title={item.title}
                          content={item.content}
                      />
                  ))
                : null}
        </StWrapper>
    );
};

const StWrapper = styled.div`
    display: flex;
    flex-direction: column;

    span.service-title {
        font-weight: 800;
        font-size: var(--fz-36);
        line-height: 1.3;
        color: var(--black);
        margin: 24px 0px;
    }

    span.service-description {
        font-weight: normal;
        font-size: var(--fz-sm);
        line-height: 1.5;
        color: var(--light-black);
        margin-bottom: 24px;
    }
`;

export default ServiceGroup;
