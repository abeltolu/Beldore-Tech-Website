import { useStaticQuery, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
export const useGetImage = (imagePath: string) => {
    const queryData = useStaticQuery(
        graphql`
            query {
                allImageSharp {
                    edges {
                        node {
                            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
                        }
                    }
                }
            }
        `
    );
    const imageNode = queryData.allImageSharp.edges.find((element) => {
        // Match string after final slash
        return (
            element.node.gatsbyImageData.images.fallback.src.split('/').pop() ==
            imagePath
        );
    });
    const imageSrc = getSrc(imageNode.node);
    return {
        node: imageNode,
        srcPath: imageSrc,
    };
};
