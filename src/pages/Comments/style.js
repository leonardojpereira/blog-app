import styled from 'styled-components';

export const Container = styled.div`
   
`;

export const Title = styled.div`
    display: flex;
justify-content: center;
align-items: center;
  text-align: center;
  font-size: 42px;
  margin: 42px 0;
  color: rgb(70 70 70);
  font-weight: bold;
  text-transform: uppercase;
`;

export const CommentContainer = styled.div`
     width: 100%;
    max-width: 700px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 5px 5px 5px #5e5e5d;
    margin: 22px auto;
    margin-bottom: 50px;
    border-radius: 16px;

`;

export const UserContainer = styled.div`
     display: flex;
 align-items: center;
 background: rgb(109 208 255);
 border-bottom: 3px solid rgb(101 157 215);
 border-top-left-radius: 16px;
 border-top-right-radius: 16px;
 padding: 8px;
`;

export const UserPhoto = styled.div`
 display: flex;
  align-items: center;
  font-size: 60px;
`;

export const UserName = styled.div`
       font-size: 18px;
`;

export const CommentBodyContainer = styled.div`
padding: 22px;

`;

export const CommentName = styled.div`
    font-size: 22px;
    margin: 16px 0;
`;

export const CommentBody = styled.div`
      font-size: 18px;
`;

