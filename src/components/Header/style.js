import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(109 208 255);
    padding: 22px 42px;
    border-bottom: 3px solid rgb(101 157 215);
    @media screen and (max-width: 900px) {
    }
`;

export const HomeBtn = styled.button`
    border: none;
    background: none;
    color: #fff;
    font-size: 28px;
    transition: ease 0.4s;
    cursor: pointer;
    background-color: #1C2120;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    outline: none;
    &:hover {
        transform: scale(1.2);
    }
`;