import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { RiFolderUserFill } from 'react-icons/ri';
import { Container, Box, Title, UserContainer, UserIcon, UserName, Subtitle, InfoContainer, Info } from './style';
import Loading from "../../components/Loading";
export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if(loading){
    return(
      <Loading message="Carregando usuário..."/>
    )
  }

  return (
    <Container>
      <Title><RiFolderUserFill style={{marginRight: '12px', fontSize: '60px', color: 'rgb(109, 208, 255)'}}/> Informações de usuário</Title>
      <Box>
      <UserContainer>
        <UserIcon>
          <HiUserCircle />
        </UserIcon>
        <UserName>{`${user.username}`}</UserName>
      </UserContainer>
      <Subtitle>Informações básicas</Subtitle>
      <InfoContainer>
        <Info>{`Nome: ${user.name}`}</Info>
        <Info>{`Nome de usuário: ${user.username}`}</Info>
        <Info>{`Rua: ${user.address ? user.address.street : ""}`}</Info>
        <Info>{`Apartamento: ${user.address ? user.address.suite : ""}`}</Info>
        <Info>{`Cidade: ${user.address ? user.address.city : ""}`}</Info>
        <Info>{`CEP: ${user.address ? user.address.zipcode : ""}`}</Info>
      </InfoContainer>
      <Subtitle>Contato</Subtitle>
      <InfoContainer>
        <Info>{`Telefone: ${user.phone}`}</Info>
        <Info>{`Email: ${user.email}`}</Info>
        <Info>{`Site: ${user.website}`}</Info>
      </InfoContainer>
      <Subtitle>Empresa</Subtitle>
      <InfoContainer>
        <Info>{`Nome: ${user.company ? user.company.name : ""}`}</Info>
        <Info>{`Slogan: ${user.company ? user.company.catchPhrase : ""}`}</Info>
        <Info>{`Ramo: ${user.company ? user.company.bs : ""}`}</Info>
      </InfoContainer>
      </Box>
      
    
    </Container>
  );
}
