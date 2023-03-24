import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 900px) {
        margin: 0 22px;
    }
`;

export const Title = styled.h1`
    font-size: 52px;
    letter-spacing: 2px;
    margin-top: 42px;
    text-transform: uppercase;
    display: flex;
    letter-spacing: 4px;
`;

export const Subtitle = styled.h2`
    font-size: 32px;
    margin: 32px 0;
    text-transform: uppercase;
    color: rgb(101 157 215);
    font-weight: bold;
    font-style: italic;
    letter-spacing: 2px;
    text-align: center;
    @media screen and (max-width: 900px) {
        font-size: 22px;
    }
`;


export const PostContainer = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 22px 0;
    background: #fff;
    border-radius: 8px;
    box-shadow: 5px 5px 5px #5e5e5d;
    
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    background: rgb(109 208 255);
    border-bottom: 3px solid rgb(101 157 215);
    padding: 12px 12px 12px 16px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    cursor: pointer;
`;

export const UserPhoto = styled.span`
    display: flex;
    align-items: center;
    font-size: 52px;
    margin-right: 4px;
    color: #fff;
    font-weight: bold;
`;

export const User = styled.p`
    font-size: 22px;
    color: #fff;
    font-weight: bold;
`;

export const BodyContainer = styled.div`
    padding: 22px;
`;

export const PostTitle = styled.h3`
    font-size: 22px;
    margin: 12px 0;
    &::first-letter {
    text-transform: capitalize;
 }
 @media screen and (max-width: 460px) {
    font-size: 16px;
}
`;

export const PostBody = styled.p`
    font-size: 18px;
    &::first-letter {
    text-transform: capitalize;
 }
 @media screen and (max-width: 460px) {
    font-size: 14px;
}
`;

export const SocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
`;

export const Comments = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    color: rgb(101 157 215);
    font-weight: bold;
    font-size: 16px;
    transition: ease 0.4s;
    &:hover {
        opacity: 0.8;
    }
    @media screen and (max-width: 460px) {
        font-size: 14px;
    }
`

export const LikeIcon = styled.span`
    font-size: 28px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: ease 0.4s;
    &:hover {
        transform: scale(1.2);
  }
`


