import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 900px) {
          margin: 0 22px;
      }
`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 42px;
    margin: 42px 0;
    color: rgb(70 70 70);
    font-weight: bold;
  @media screen and (max-width: 900px) {
       font-size: 32px;
       flex-direction: column;
    }
  @media screen and (max-width: 460px) {
       font-size: 22px;
  }
`;

export const Box = styled.div`
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
    background-color: #fff;
    padding: 12px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: rgb(109, 208, 255);
`;

export const UserIcon = styled.span`
    display: flex;
    align-items: center;
    font-size: 60px;
    color: #fff;
    font-weight: bold;
    @media screen and (max-width: 460px) {
      font-size: 46px;
  }
`;

export const UserName = styled.span`
    font-size: 26px;
    margin-left: 8px;
    color: #fff;
    font-weight: bold;
    @media screen and (max-width: 460px) {
      font-size: 22px;
  }
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
`;

export const Subtitle = styled.h2`
    color: #fff;
    text-align: center;
    padding: 6px 0;
    background-color: rgb(70 70 70);
    border-top: 3px solid #000;
    border-bottom: 3px solid #000;
    font-size: 18px;
`;

export const Info = styled.span`
    font-size: 18px;
    padding: 8px 0;
`;
