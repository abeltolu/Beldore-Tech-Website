import React from 'react';

export interface IServiceProps {
    key: number | string;
    title: string;
    description: string;
    icon: React.ReactElement;
}

export interface ISVGProps {
    width?: number;
    height?: number;
    fill?: string;
}
