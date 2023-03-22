import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { Container, UserContainer, UserIcon, UserName, Title, InfoContainer, Info } from './style';
export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    api
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Container>
      <UserContainer>
        <UserIcon>
          <HiUserCircle />
        </UserIcon>
        <UserName>{`${user.username}`}</UserName>
      </UserContainer>
      <Title>Informações básicas</Title>
      <InfoContainer>
        <Info>{`ID: ${user.id}`}</Info>
        <Info>{`Nome: ${user.name}`}</Info>
        <Info>{`Nome de usuário: ${user.username}`}</Info>
        <Info>{`Rua: ${user.address ? user.address.street : ""}`}</Info>
        <Info>{`Apartamento: ${user.address ? user.address.suite : ""}`}</Info>
        <Info>{`Cidade: ${user.address ? user.address.city : ""}`}</Info>
        <Info>{`CEP: ${user.address ? user.address.zipcode : ""}`}</Info>
      </InfoContainer>
      <Title>Contato</Title>
      <InfoContainer>
        <Info>{`Telefone: ${user.phone}`}</Info>
        <Info>{`Email: ${user.email}`}</Info>
        <Info>{`Site: ${user.website}`}</Info>
      </InfoContainer>
      <Title>Empresa</Title>
      <InfoContainer>
        <Info>{`Nome: ${user.company ? user.company.name : ""}`}</Info>
        <Info>{`Slogan: ${user.company ? user.company.catchPhrase : ""}`}</Info>
        <Info>{`Ramo: ${user.company ? user.company.bs : ""}`}</Info>
      </InfoContainer>
    </Container>
  );
}
