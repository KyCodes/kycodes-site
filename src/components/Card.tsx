import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../contstants';

interface cardProps {
    title: string;
    excerpt: string;
    tags: any;
    sourceUrl: any;
    href: any;
    alt: string;
}

function randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

export const CardDescription = styled.div`
    position: relative;
    width: 70%;
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    z-index: 10;
    color: whitesmoke;
    background-color: dimgray;
    @media (max-width: 768px) {
        min-width: 100%;
        height: auto;
    }
`;

export const CardWrapper = styled.div`
    border-radius: 0px ${randomNum(15,30)}px ${randomNum(15,30)}px 0px / 0px ${randomNum(200,400)}px ${randomNum(200,400)}px 0px;
    position: relative;
    display: flex;
    text-align: left;
    width: 90%;
    height: auto;
    overflow: hidden;
    border: 2px solid black;
    border-left: none;
    margin: 1rem auto 1rem 0rem;
    transform: translateZ(0px);
    box-shadow: -6px 6px 0px rgba(0,0,0,0.5);
    transition: all 0.2s ease-in-out;
    &:nth-child(even) {
        border-radius: ${randomNum(15,30)}px 0px 0px ${randomNum(15,30)}px / ${randomNum(200,400)}px 0px 0px ${randomNum(200,400)}px;
        margin: 1rem 0rem 1rem auto;
        box-shadow: 6px 6px 0px rgba(0,0,0,0.5);
        border-left: 2px solid black;
        border-right: none;
        flex-direction: row-reverse;
        &:hover {
            transform: translateY(-3px);
            box-shadow: 12px 12px 0px rgba(0,0,0,0.5);
        }
        & a:hover {
            box-shadow: 4px 4px 0px ${COLOR.lightPurple};
            transform: translateX(-4px) translateY(-4px);
        }
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    &:hover {
        transform: translateY(-3px);
        box-shadow: -12px 12px 0px rgba(0,0,0,0.5);
    }
    &:hover img {
        transform: scale(105%);
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (min-width: 992px) {
        max-height: 275px;
    }
`;

export const CardPreview = styled.div`
    position: relative;
    background: silver;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    align-items: center;
    @media (max-width: 768px) {
        min-width: 100%;
    }
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 800;
`;

export const Excerpt = styled.p`
    width: 100%;
    color: silver;
    font-weight: 200;
    margin-bottom: 48px;
`;

export const Tag = styled.p`
    display: inline;
    cursor: default;
    padding: 4px 8px;
    margin: 0px 4px;
    border: 1px solid gainsboro;
    border-radius: 25px;
    font-size: 0.75rem;
    color: gainsboro;
    font-weight: 500;
    white-space: nowrap;
    &:hover {
        background-color: gainsboro;
        color: black;
    }
`;

export const TagContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    mask-image: linear-gradient(90deg, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%);
`;

export const PostLink = styled.a`
    position: absolute;
    text-transform: uppercase;
    color: ${COLOR.white};
    background: ${COLOR.darkPurple};
    padding: 4px 8px;
    border-radius: 5px;
    font-weight: 500;
    top: 16px;
    right: 24px;
    z-index: 10;
    transition-duration: 0.2s;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        box-shadow: -4px 4px 0px ${COLOR.lightPurple};
        transform: translateX(4px) translateY(-4px);
    }
    &:active {
        box-shadow: none;
        transform: translateX(0px) translateY(0px);
    }
`;


export default function Card(props: cardProps) {
    const tags = props.tags.map((data: any, index: number) =>
        <Tag key={index}>{data.name}</Tag>
    );
  return (
    <CardWrapper>
        <CardDescription>
            <Title>{props.title}</Title>
            <PostLink href={props.href}>Read More</PostLink>
            <Excerpt dangerouslySetInnerHTML={{__html: props.excerpt}}/>
            <TagContainer>
                {tags} 
            </TagContainer>
        </CardDescription>
        <CardPreview>
            <GatsbyImage alt={props.alt} style={{minHeight: '105%', minWidth: '100%', maxWidth: '100%', maxHeight: '105%'}} imgStyle={{transition: 'all 0.4s'}} objectFit='cover' image={props.sourceUrl && getImage(props.sourceUrl)} />
        </CardPreview>
    </CardWrapper>
  );
}
