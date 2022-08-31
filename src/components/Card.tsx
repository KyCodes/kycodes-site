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
}

export const CardDescription = styled.div`
    position: relative;
    width: 70%;
    min-height: 100%;
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
    position: relative;
    display: flex;
    text-align: left;
    width: 90%;
    height: auto;
    overflow: hidden;
    border: 1px solid black;
    margin: 1rem auto 1rem -1rem;
    padding-left: 0.9rem;
    box-shadow: 6px 6px 0px rgba(0,0,0,0.5);
    transition: all 0.2s ease-in-out;
    &:nth-child(even) {
        margin: 1rem -1rem 1rem auto;
        box-shadow: -6px 6px 0px rgba(0,0,0,0.5);
        padding-right: 0.9rem;
        padding-left: 0px;
        flex-direction: row-reverse;
        &:hover {
            box-shadow: -12px 12px 0px rgba(0,0,0,0.5);
        }
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
    &:hover {
        transform: translateY(-3px);
        box-shadow: 12px 12px 0px rgba(0,0,0,0.5);
    }
    &:hover img {
        transform: scale(105%);
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (min-width: 768px) {
        max-height: 275px;
    }
`;

export const CardPreview = styled.div`
    position: relative;
    display: grid;
    background: silver;
    width: 30%;
    min-height: 100%;
    display: flex;
    justify-content: center;
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
    width: 100px;
    padding: 4px 8px;
    margin: 0px 4px;
    border: 3px solid gainsboro;
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
`;

export const PostLink = styled.a`
    position: absolute;
    background: #632A50;
    color: #B48EAE;
    padding: 4px 8px;
    border-radius: 5px;
    font-weight: 500;
    top: 12px;
    right: 16px;
    z-index: 10;
    transition-duration: 0.2s;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        box-shadow: 3px 3px 0px ${COLOR.lightPurple};
        transform: translateX(-3px) translateY(-3px);
    }
    &:active {
        box-shadow: none;
        transform: translateX(0px) translateY(0px);
    }
`;


export default function Card(props: cardProps) {
    const tags = props.tags.map((data, index) =>
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
            <GatsbyImage style={{minHeight: '100%', minWidth: '100%'}} imgStyle={{transition: 'all 0.4s'}} objectFit='cover' image={props.sourceUrl && getImage(props.sourceUrl)} />
        </CardPreview>
    </CardWrapper>
  );
}
