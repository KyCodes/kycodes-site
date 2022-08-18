import React from 'react';
import styled from 'styled-components';

interface cardProps {
    title: string;
    excerpt: string;
    tags: any;
    sourceUrl: any;
    href: any;
}

export const CardWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 1rem 0rem;
    background-color: darkgray;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    &:nth-child(even) {
        flex-direction: row-reverse;
        @media (max-width: 768px) {
           flex-direction: column;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const CardDescription = styled.div`
    position: relative;
    width: 70%;
    min-height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    background-color: dimgray;
    z-index: 10;
    color: whitesmoke;
    @media (max-width: 768px) {
        min-width: 100%;
        height: auto;
    }
`;

export const CardPreview = styled.div`
    position: relative;
    display: grid;
    width: 30%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    @media (max-width: 768px) {
        min-width: 100%;
    }
`;

export const Preview = styled.img`
    max-width: 75%;
    aspect-ratio: 16 / 9;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 800;
`;

export const Excerpt = styled.p`
    width: 100%;
    color: silver;
    font-weight: 200;
    margin-bottom: 32px;
`;

export const Tag = styled.a`
    cursor: pointer;
    width: 100px;
    padding: 4px 8px;
    margin: 0px 4px;
    background: darkgray;
    border-radius: 25px;
    font-size: 0.75rem;
    color: white;
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
    padding: 16px 8px;
`;

export const PostLink = styled.a`
    position: absolute;
    background: #632A50;
    color: #B48EAE;
    padding: 4px 8px;
    border-radius: 5px;
    top: 12px;
    right: 12px;
    z-index: 10;
    transition-duration: 0.2s;
    cursor: pointer;
    text-decoration: none;
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
            <Preview id='test' src={props.sourceUrl} />
        </CardPreview>
    </CardWrapper>
  );
}
