import styled from "styled-components";

export const Container = styled.div`
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
  background-color: #bfa374;
  padding: 12px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  
`;

export const UserIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 60px;
  color: #fff;  
`;

export const UserName = styled.span`
  font-size: 26px;
  margin-left: 8px;
  color: #fff;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export const Title = styled.h2`
  background-color: #99633a;
  color: #fff;
  text-align: center;
  padding: 6px 0;
`;

export const Info = styled.span`
  font-size: 18px;
  padding: 8px 0;
  border-bottom: solid 2px #ddd;
`;
