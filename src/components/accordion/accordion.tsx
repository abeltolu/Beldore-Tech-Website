import React, { useState } from 'react';
import styled from 'styled-components';
import { ExpandDown, ExpandRight } from '../icons/expandarrows';

interface IProps {
    display?: boolean;
    title: string;
    content: string;
}
const AccordionItem: React.FC<IProps> = ({ display, title, content }) => {
    const [show, setShow] = useState(display);
    return (
        <StWrapper>
            <StTitle onClick={() => setShow(!show)}>
                <span className="title">{title}</span>
                {show ? <ExpandDown /> : <ExpandRight />}
            </StTitle>
            {show ? <StContent>{content}</StContent> : null}
        </StWrapper>
    );
};

const StWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 12px;
    border-bottom: 1px solid rgb(226, 232, 240);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    span.title {
        font-size: var(--fz-lg);
        font-weight: 600;
        line-height: 1.5;
        color: var(--black);
    }

    &:hover {
        background: rgba(0, 0, 0, 0.04);
    }
`;

const StContent = styled.div`
    padding: 16px 12px;
    font-size: var(--fz-sm);
    font-style: normal;
    line-height: 1.5;
    color: var(--light-black);
    transition: all 0.2s ease-in 0s;
`;

export default AccordionItem;
