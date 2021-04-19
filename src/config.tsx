import React from 'react';
import GithubIcon from './components/icons/github';
import LinkedInIcon from './components/icons/linkedin';
import TwitterIcon from './components/icons/twitter';
import { IServiceProps } from './types/interface';
import DesignServiceIcon from './components/icons/services/design';
import DevelopmentServiceIcon from './components/icons/services/development';
import DevOpsServiceIcon from './components/icons/services/devops';
import MarketingServiceIcon from './components/icons/services/marketing';

export const navLinks = [
    { name: 'Services', url: '/services' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: 'About', url: '/about' },
    { name: 'Careers', url: '/careers' },
];

export const portfolioLinks = {
    joinder: 'https://www.joinderapp.com/',
    nubitz: 'https://nubitz.io/',
    tofa: 'https://www.tradersofafrica.com/',
    ninepay: 'https://9pay.com.ng/',
    fichaya: 'https://fichaya.com/',
    cib: 'https://www.chicagoinstituteofbusiness.com/',
};

export const socialLinks = [
    {
        name: 'Github',
        href: 'https://github.com/abeltolu',
        icon: <GithubIcon />,
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/abeltolu',
        icon: <TwitterIcon />,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/adetulatolulopeabel/',
        icon: <LinkedInIcon />,
    },
];

export const servicesList: IServiceProps[] = [
    {
        key: 'design',
        title: 'Design',
        description:
            'A new website in the style of your company? Or do you prefe completely new visual identity? We bring out the unique style of your company.',
        icon: <DesignServiceIcon width={80} height={80} />,
    },
    {
        key: 'development',
        title: 'Development',
        description:
            'Your new website, application or internal platform? Our developers create the very best digital solution for your company.',
        icon: <DevelopmentServiceIcon width={80} height={80} />,
    },
    {
        key: 'devops',
        title: 'DevOps',
        description:
            'We design, oversee and control your operational processes to ensure that resources are right-sized to serve business workloads in a cost-effective manner.',
        icon: <DevOpsServiceIcon width={80} height={80} />,
    },
    {
        key: 'marketing',
        title: 'Digital Marketing & Strategy',
        description:
            'Our online advertisements, email campaigns, social media services would help attract your business to its target audience.',
        icon: <MarketingServiceIcon width={80} height={80} />,
    },
];
