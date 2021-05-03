import React from 'react';
import styled from 'styled-components';
import { servicesList } from '../../config';
import ServiceGroup from './servicegroup.comp';

const ServiceGroupList = () => {
    return (
        <StWrapper>
            {servicesList.map((service, index) => (
                <ServiceGroup
                    key={index}
                    identifier={service.key}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    items={service.items}
                />
            ))}
        </StWrapper>
    );
};

const StWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 48px;
`;

export default ServiceGroupList;
