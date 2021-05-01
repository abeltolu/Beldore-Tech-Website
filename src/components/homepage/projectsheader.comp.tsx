import React from 'react';
import styled from 'styled-components';

const ProjectsHeader = () => {
    return <Stheader className="section-title">Our Latest Projects</Stheader>;
};

const Stheader = styled.h2`
    padding: 0px var(--layout-margin-lr);
    margin-left: 661px;
    margin-bottom: 40px;
`;

export default ProjectsHeader;
