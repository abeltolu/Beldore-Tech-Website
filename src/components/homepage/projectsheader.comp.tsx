import React from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';

const ProjectsHeader = () => {
    return (
        <Slide direction="right" triggerOnce>
            <Stheader className="section-title">Our Latest Projects</Stheader>
        </Slide>
    );
};

const Stheader = styled.h2`
    padding: 0px var(--layout-margin-lr);
    margin-left: 661px;
    margin-bottom: 40px;
`;

export default ProjectsHeader;
