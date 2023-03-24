import styled from 'styled-components';

export const Arrow = styled.a`
    color: #000;
    position: fixed;
    right: 10px;
    bottom: 10px;
    color: rgb(109, 208, 255);
    border-radius: 50%;
    font-size: 50px;  
    text-align: center; 
    transition: ease 0.4s;
    &:hover {
        transform: scale(1.1);
    }
    @media screen and (max-width: 900px) {
        display: none;
    }
`;