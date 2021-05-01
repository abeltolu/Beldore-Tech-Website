import { Link } from 'gatsby';
import { transparentize } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { footerLinks } from '../config';
import { IFooterLinkSection } from '../types/interface';
import LogoFavicon from './icons/logo-favicon';

const Footer = () => {
    return (
        <StRoot>
            <div className="top">
                <BusinessDetails />
                {footerLinks.map((section, index) => (
                    <FooterLinks
                        title={section.title}
                        links={section.links}
                        key={index}
                    />
                ))}
            </div>
            <div className="bottom">
                <span className="bottom--text">
                    &copy; Beldore 2021. All rights reserved.
                </span>
            </div>
        </StRoot>
    );
};

const StRoot = styled.section`
    width: 100%;
    background: var(--footer-bg-color);
    padding: 100px var(--layout-margin-lr);
    display: flex;
    flex-direction: column;

    .top {
        display: grid;
        grid-template-columns: 350px 1fr 1fr 1fr;
        grid-gap: 20px;
        padding-bottom: 40px;
        margin-bottom: 20px;
        border-bottom: 1px solid ${transparentize(0.9, '#FFF')};
    }

    .bottom {
        display: flex;
        justify-content: space-between;

        span.bottom--text {
            font-size: var(--fz-xs);
            line-height: 1.3;
            font-weight: 400;
            color: var(--footer-link-color);
        }
    }
`;

//business details
const BusinessDetails = () => {
    return (
        <StBusinessDetails>
            <LogoFavicon />
            <span className="description">
                We build custom software that allows businesses to meet their
                needs and constraints.
            </span>
        </StBusinessDetails>
    );
};
const StBusinessDetails = styled.div`
    display: flex;
    flex-direction: column;

    span.description {
        margin-top: 20px;
        font-size: var(--fz-sm);
        line-height: 1.5;
        color: var(--white);
        font-weight: 400;
    }
`;

//footer links
const FooterLinks: React.FC<IFooterLinkSection> = ({ title, links }) => {
    return (
        <StFooterLink>
            <span className="link-top">{title}</span>
            <div className="links">
                {links
                    ? links.map((link, index) => (
                          <Link to={link.url} className="link">
                              {link.title}
                          </Link>
                      ))
                    : null}
            </div>
        </StFooterLink>
    );
};
const StFooterLink = styled.div`
    display: flex;
    flex-direction: column;

    span.link-top {
        display: flex;
        align-items: center;
        height: 48px;
        font-size: var(--fz-sm);
        line-height: 1.3;
        font-weight: 500;
        color: var(--white);
        margin-bottom: 20px;
        text-transform: uppercase;
    }

    div.links {
        display: flex;
        flex-direction: column;
        grid-gap: 20px;

        .link {
            font-size: var(--fz-xs);
            line-height: 1.3;
            font-weight: 400;
            color: var(--footer-link-color);
            transition-duration: 250ms;
            transition-property: background, box-shadow, color, transform;
            transition-timing-function: ease-in-out;
            &:hover {
                color: var(--green);
                transform: translateY(-1px);
            }
        }
    }
`;

export default Footer;
