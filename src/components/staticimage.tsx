import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, StaticQuery } from 'gatsby';

type ImageProps = {
    path: string;
    alt: string;
};
const StaticQueryImage: React.FC<ImageProps> = ({ path, ...props }) => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allImageSharp {
                        edges {
                            node {
                                gatsbyImageData(
                                    layout: FULL_WIDTH
                                    quality: 100
                                )
                            }
                        }
                    }
                }
            `}
            render={(queryData) => {
                const edge = queryData.allImageSharp.edges.find((element) => {
                    // Match string after final slash
                    return (
                        element.node.gatsbyImageData.images.fallback.src
                            .split('/')
                            .pop() == path
                    );
                });
                return (
                    <GatsbyImage image={edge.node.gatsbyImageData} {...props} />
                );
            }}
        />
    );
};
export default StaticQueryImage;
