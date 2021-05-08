import React from 'react';
import GithubIcon from './components/icons/github';
import LinkedInIcon from './components/icons/linkedin';
import TwitterIcon from './components/icons/twitter';
import {
    IContactInfo,
    IFooterLinkSection,
    IProjectProps,
    IServiceProps,
} from './types/interface';
import DesignServiceIcon from './components/icons/services/design';
import DevelopmentServiceIcon from './components/icons/services/development';
import DevOpsServiceIcon from './components/icons/services/devops';
import MarketingServiceIcon from './components/icons/services/marketing';
import BooklifyPNG from './images/projects_booklify.png';
import CreativeAgencyPNG from './images/projects_creative_agency.png';
import DivincentiPNG from './images/projects_divincenti.png';
import FichayaPNG from './images/projects_fichaya.png';
import FirstWorldPNG from './images/projects_firstworld.png';
import {
    CustomerSupportIcon,
    OnlineSupportIcon,
    LocationIcon,
} from './components/icons/contact';

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
        items: [
            {
                title: 'Branding',
                content:
                    'Our graphic designers can help your business make great impressions and deliver an impact that truly matters through your names, logos, and colours.',
            },
            {
                title: 'Digital Design',
                content:
                    'We make tailor-made designs that communicate visually way before words start making an impact.',
            },
            {
                title: 'Illustration',
                content:
                    'Be it for product marketing, social media, books, explainers, storyboard, or anything where you feel that the words alone won’t just cut it, let us illustrate your ideas with graphics that intrigue the eyes.',
            },
            {
                title: 'Print Design',
                content:
                    'It is one thing to get something digitally right, but it takes skills of another level entirely to get it right on print as well. We understand the demands of the physical medium, be it the colours or the dimensions.',
            },
        ],
    },
    {
        key: 'development',
        title: 'Development',
        description:
            'Your new website, application or internal platform? Our developers create the very best digital solution for your company.',
        icon: <DevelopmentServiceIcon width={80} height={80} />,
        items: [
            {
                title: 'Mobile Development',
                content:
                    'Our developers are specialist in building native and cross-platform mobile applications  for Android and iOS. We manage development, testing, deployment to app stores, and continuous delivery to your customers.',
            },
            {
                title: 'Web Development',
                content:
                    'A well thought-out web application that scores in all areas? That is the specialty of our developers. We build responsive, scalable enterprise and cloud-based applications for the web.',
            },
            {
                title: 'Product Design',
                content:
                    'From idea conceptualization to delivery, we handle wireframing, prototyping, UI/UX design',
            },
        ],
    },
    {
        key: 'devops',
        title: 'DevOps',
        description:
            'We design, oversee and control your operational processes to ensure that resources are right-sized to serve business workloads in a cost-effective manner.',
        icon: <DevOpsServiceIcon width={80} height={80} />,
        items: [
            {
                title: 'Infrastructure & Operational Management',
                content:
                    'We help manage interactions between your cloud and on-premises environments, servers, storage, network, virtualization software and security.',
            },
            {
                title: 'AI Deployments',
                content:
                    'We build and deploy containerized AI/ML models within cloud and on-premises applications.',
            },
            {
                title: 'Continuous Integration & Deployment',
                content:
                    'We design and implement Continuous Integration (CI) and Continuous Delivery (CD) for software development.',
            },
            {
                title: 'Code Inspection & Integration',
                content:
                    'We help aggregate data and gain insights to enhance application and process agility, reliability and security.',
            },
        ],
    },
    {
        key: 'marketing',
        title: 'Digital Marketing & Strategy',
        description:
            'Our online advertisements, email campaigns, social media services would help attract your business to its target audience.',
        icon: <MarketingServiceIcon width={80} height={80} />,
        items: [
            {
                title: 'Content Marketing',
                content:
                    'Quality content ensures quality visitors. Our content marketers know which type of content works best for you.',
            },
            {
                title: 'Email Marketing',
                content:
                    'Your emails should be a source of information and inspiration. Our marketers would ensure its properly optimized and yields conversions.',
            },
            {
                title: 'Social Media Marketing',
                content:
                    'Facebook, Twitter, LinkedIn, Snapchat,… Which social media are right for your company, and which ones should you ignore? No two social media platforms are alike, and not every platform is there for everyone. Let us help with your online presence, and hit the arrow where it makes the most impact.',
            },
            {
                title: 'Digital Strategy',
                content:
                    'Everything revolves around the digital goals of your business. Together with you, we will look for those goals and see how we will achieve them together.',
            },
            {
                title: 'SEO',
                content:
                    "The number 1 position in Google is every entrepreneur's dream. We can help your business occupy that position as optimally as possible.",
            },
        ],
    },
];

export const projectsList: IProjectProps[] = [
    {
        key: 'fichaya',
        title: 'Fichaya',
        description:
            "Fichaya is your go-to app for booking home cleaning and post-constrction cleaning services in Nigeria. It's simple,  it’s easy, and it’s completely hassle-free.",
        imagePath: 'projects_fichaya.png',
        tags: ['UI/UX Design', 'Web Development'],
        bgColor: '#000b7c',
        imageData: FichayaPNG,
    },
    {
        key: 'booklify',
        title: 'Booklify',
        description:
            'Booklify is an easy appointment scheduler that helps clients schedule meetings without the back-and-forth emails.',
        imagePath: 'projects_booklify.png',
        tags: ['UI/UX Design', 'Web Development'],
        bgColor: '#003767',
        imageData: BooklifyPNG,
    },
    {
        key: 'firstworld',
        title: 'FirstWorld UK',
        description:
            'FirstWorld is on a mission to provide life skills, and techniques to elicit human potential development.',
        imagePath: 'projects_firstworld.png',
        tags: ['UI/UX Design', 'Web Development'],
        bgColor: '#7B2675',
        imageData: FirstWorldPNG,
    },
    {
        key: 'divincenti',
        title: 'Divincenti',
        description:
            'Divincenti is a leading regional and full independent broker and trader servicing based in Louisiana-USA with over 500 domestic and international clients.',
        imagePath: 'projects_divincenti.png',
        tags: ['UI/UX Design', 'Web Development'],
        bgColor: '#1F2A5A',
        imageData: DivincentiPNG,
    },
    {
        key: 'creative-agency',
        title: 'Creative Agency',
        description:
            'Agency website for one of the leading digital agencies serving the European and American Markets.',
        imagePath: 'projects_creative_agency.png',
        tags: ['UI/UX Design', 'Web Development'],
        bgColor: '#6415ff',
        imageData: CreativeAgencyPNG,
    },
];

export const footerLinks: IFooterLinkSection[] = [
    {
        title: 'Company',
        links: [
            {
                title: 'About',
                url: '/about',
            },
            {
                title: 'Portfolio',
                url: '/portfolio',
            },
            {
                title: 'Contact',
                url: '/contact',
            },
            {
                title: 'Careers',
                url: '/careers',
            },
        ],
    },
    {
        title: 'Services',
        links: [
            {
                title: 'Design',
                url: '/services#design',
            },
            {
                title: 'Development',
                url: '/services#development',
            },
            {
                title: 'DevOps',
                url: '/services#devops',
            },
            {
                title: 'Digital Marketing & Strategy',
                url: '/services#marketing',
            },
        ],
    },
    {
        title: 'Social',
        links: [
            {
                title: 'LinkedIn',
                url: '/',
            },
            {
                title: 'Twitter',
                url: '/',
            },
        ],
    },
];

export const contactInfo: Record<string, IContactInfo> = {
    customerService: {
        icon: <CustomerSupportIcon />,
        title: 'Customer Service',
        details: '+2348178508462',
    },
    onlineSupport: {
        icon: <OnlineSupportIcon />,
        title: 'Online Support',
        details: 'hey@beldoretech.com',
    },
    /*location: {
        icon: <LocationIcon />,
        title: 'Location',
        details: '50, Olonode Street, Alagomeji, Yaba, Lagos.',
    },*/
};

export const contactServices = [
    'Brand Strategy & Design',
    'Content Strategy',
    'Game Development',
    'Web Development',
    'Software Development',
    'Infographics',
    'UX & UI Design',
    'App Design & Development',
    'Digital Marketing',
];
