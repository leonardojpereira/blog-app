import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

export const PostContainer = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 22px 0;
    background: #aca;
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

export const Comments = styled.button`
    margin-top: 22px;
    cursor: pointer;
    border: none;
    background: none;
    color: #063970;
`


