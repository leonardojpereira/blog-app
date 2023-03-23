import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

export const Title = styled.h1`
    margin: 42px 0;
`;


export const PostContainer = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 22px 0;
    background-color: #bfa374;
    border-radius: 8px;
    box-shadow: 5px 5px 5px #5e5e5d;
`;

export const UserContainer = styled.div`
 display: flex;
 align-items: center;
 background: #fff;
 padding: 12px 12px 12px 16px;
 border-top-left-radius: 8px;
 border-top-right-radius: 8px;
 cursor: pointer;
`;

export const UserPhoto = styled.span`
    display: flex;
    align-items: center;
    font-size: 32px;

`;

export const User = styled.p`
    font-size: 18px;
`;

export const BodyContainer = styled.div`
padding: 22px;
`;

export const PostTitle = styled.h3`
    font-size: 18px;
    color: #FFF;
    margin: 12px 0;
    &::first-letter {
    text-transform: capitalize;
 }
`;

export const PostBody = styled.p`
 &::first-letter {
    text-transform: capitalize;
 }
`;

export const SocialContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 22px;
`;

export const Comments = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    color: #000;
    font-size: 18px;
    transition: ease 0.4s;
    &:hover {
        opacity: 0.8;
    }
`

export const LikeIcon = styled.span`
  font-size: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: ease 0.4s;
  &:hover {
    transform: scale(1.2);
  }
`



