import { useState, useEffect } from "react";
import { api } from "../../services/api";
import {
  Container,
  Title,
  Subtitle,
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
import { FaCommentDots } from "react-icons/fa";
import Loading from "../../components/Loading";
import BackUpArrow from "../../components/BackUpArrow";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    };

    fetchUsers();
    fetchPosts();
  }, [setUsers]);

  function handleLike(id) {
 setLiked(!liked);
  }

  if(loading){
    return(
      <Loading/>
    )
  }

  return (
    <Container>
      <Title>P<FaCommentDots style={{color: 'rgb(109 208 255)', marginRight: '6px'}}/>st</Title>
      <Subtitle>Encontre os melhores posts aqui.</Subtitle>
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
                <Comments>Ver comentários</Comments>
              </Link>
              <LikeIcon onClick={handleLike}>
              {liked ? <AiFillLike /> : <AiOutlineLike />}
              </LikeIcon>
            </SocialContainer>
          </BodyContainer>
        </PostContainer>
      ))}
      <BackUpArrow/>
    </Container>
  );
}
