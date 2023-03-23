import { useState, useEffect } from "react";
import { api } from "../../services/api";
import {
  Container,
  Title,
  PostContainer,
  UserContainer,
  UserPhoto,
  User,
  BodyContainer,
  PostTitle,
  PostBody,
  SocialContainer,
  Comments,
  LikeIcon,
} from "./style";
import { HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await api.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersData = response.data.reduce((acc, user) => {
        acc[user.id] = user.username;
        return acc;
      }, {});
      setUsers(usersData);
    };

    const fetchPosts = async () => {
      const response = await api.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    };

    fetchUsers();
    fetchPosts();
  }, [setUsers]);

  function handleLike() {
 setLiked(!liked);

  }

  return (
    <Container>
      <Title>Encontre os melhores posts aqui!</Title>
      {posts.map((post) => (
        <PostContainer key={post.id}>
          <Link
            style={{ textDecoration: "none", color: "#000" }}
            to={`/user/${post.userId}`}
          >
            <UserContainer>
              <UserPhoto>
                <HiUserCircle />
              </UserPhoto>
              <User>{users[post.userId]}</User>
            </UserContainer>
          </Link>
          <BodyContainer>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
            <SocialContainer>
              <Link to={`/${post.id}/comments`}>
                <Comments>Ver comentarios</Comments>
              </Link>
              <LikeIcon onClick={handleLike}>
              {liked ? <AiFillLike /> : <AiOutlineLike />}
              </LikeIcon>
            </SocialContainer>
          </BodyContainer>
        </PostContainer>
      ))}
    </Container>
  );
}
