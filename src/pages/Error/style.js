import styled from 'styled-components';

export const ErrorContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 70vh;  
`;

export const ErrorCode = styled.span`
font-size: 100px;
`;

export const ErrorMessage = styled.span`
font-size: 42px;
margin: 12px 0;
`;
