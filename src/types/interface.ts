import React from 'react';

export interface IServiceProps {
    key?: number | string;
    identifier?: number | string;
    title: string;
    description: string;
    icon?: React.ReactElement;
    items?: {
        title: string;
        content: string;
    }[];
}

export interface ISVGProps {
    width?: number;
    height?: number;
    fill?: string;
}

export interface IProjectProps {
    key: number | string;
    title: string;
    description: string;
    imagePath: string;
    tags: string[];
    bgColor?: string;
    imageData?: string;
}
export interface IFooterLinkSection {
    title: string;
    links: IFooterLink[];
}
export interface IFooterLink {
    title: string;
    url: string;
}
