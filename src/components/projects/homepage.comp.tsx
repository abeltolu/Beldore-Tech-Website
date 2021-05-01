import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { projectsList } from '../../config';
import { IProjectProps } from '../../types/interface';
import StaticQueryImage from '../staticimage';
import ArrowLeftIcon from '../icons/arrowleft';
import { Link } from 'gatsby';

//Single Project
const ProjectCarousel: React.FC<{ data: IProjectProps }> = ({ data }) => {
    return (
        <StCarousel bgColor={data.bgColor}>
            <StProjectPix>
                <div className="project-pix">
                    <StaticQueryImage path={data.imagePath} alt={data.title} />
                </div>
            </StProjectPix>
            <StProjectDetailsWrapper>
                <StProjectDetails>
                    <span className="title">{data.title}</span>
                    <span className="description">{data.description}</span>
                    {data.tags ? (
                        <span className="tags">{data.tags.join(', ')}</span>
                    ) : null}
                </StProjectDetails>
                <Link
                    to="/portfolio"
                    className="button button--shadow-white button--underlined text-white"
                >
                    <span className="text">See all Works</span>
                    <ArrowLeftIcon />
                </Link>
            </StProjectDetailsWrapper>
        </StCarousel>
    );
};
const StCarousel = styled.div<{ bgColor?: string }>`
    display: grid;
    grid-template-columns: 607px 1fr;
    width: 100%;
    height: calc(100vh - 100px);
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
        ${({ bgColor }) => bgColor || 'var(--green)'};
`;

const StProjectPix = styled.div`
    position: relative;
    div.project-pix {
        display: block;
        width: 507px;
        height: 686px;
        position: absolute;
        top: -100px;
        left: 100px;

        .gatsby-image-wrapper {
            border-radius: 4px;
        }
    }
`;

const StProjectDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 100px var(--layout-margin-lr);
`;

const StProjectDetails = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-gap: 30px;
    line-height: 1.3;
    color: var(--white);

    span.title {
        font-size: var(--fz-sm);
        font-weight: 700;
        text-transform: uppercase;
    }

    span.description {
        font-size: var(--fz-xl);
        font-weight: 400;
    }

    span.tags {
        font-size: var(--fz-xs);
        font-weight: 400;
    }
`;

//List of all Projects in Carousel
const HomePageProjects = () => {
    return (
        <StRoot
            autoPlay
            interval={5000}
            selectedItem={2} //default to 3rd item in list
            showThumbs={false}
            showArrows={false}
            showStatus={false}
        >
            {projectsList.map((project, index) => (
                <ProjectCarousel data={project} key={index} />
            ))}
        </StRoot>
    );
};

const StRoot = styled(Carousel)`
    .carousel-slider {
        overflow: visible;
        .slider-wrapper {
            overflow: visible;
        }

        .control-dots {
            margin: 20px 0;
        }
    }

    .carousel .slide {
        text-align: left;
    }
`;

export default HomePageProjects;
