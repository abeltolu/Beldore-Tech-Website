import React from 'react';
import styled from 'styled-components';
import Footer from '../components/footer';
import Header from '../components/header';
import LetsBuildJumbotron from '../components/jumbotrons/letsbuild';
import Layout from '../components/layout';
import PortfolioHeroText from '../components/portfolio/hero';
import PortfolioGridItem from '../components/portfolio/portfoliogriditem';
import SEO from '../components/seo';
import { projectsList } from '../config';
import GridLayout, { WidthProvider } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(GridLayout);

const PortfolioPage = () => {
    const lastListIndex = projectsList.length - 1;
    const layout = projectsList.map((_, index) => {
        return {
            i: `${index}-project`,
            x: index % 2 == 0 && index !== lastListIndex ? 0 : 1,
            y: index % 2 == 0 && index !== lastListIndex ? 1 : 0,
            w: 1,
            h: 2,
            static: index == 0,
        };
    });
    return (
        <Layout>
            <SEO title="Portfolio" />
            <HeroSection>
                <Header variant="black" />
                <PortfolioHeroText />
            </HeroSection>
            <PortfolioSection>
                <ResponsiveReactGridLayout
                    className="layout"
                    layout={layout}
                    cols={2}
                    margin={[100, 20]}
                    rowHeight={450}
                    containerPadding={[100, 100]}
                    isDraggable={false}
                    isDroppable={false}
                >
                    {projectsList.map((project, index) => (
                        <div key={`${index}-project`}>
                            <PortfolioGridItem
                                className={`${index}-project`}
                                {...project}
                            />
                        </div>
                    ))}
                </ResponsiveReactGridLayout>
            </PortfolioSection>
            <LetsBuildJumbotron />
            <Footer />
        </Layout>
    );
};

const HeroSection = styled.section`
    width: 100%;
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 200px var(--layout-margin-lr);
    padding-bottom: 100px;
`;

const PortfolioSection = styled.section`
    min-height: 100vh;
`;

export default PortfolioPage;
