import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { HiUserCircle } from "react-icons/hi";
import { MdInsertComment } from "react-icons/md";
import {
  Container,
  Title,
  CommentContainer,
  UserContainer,
  UserPhoto,
  UserName,
  CommentBodyContainer,
  CommentName,
  CommentBody,
  LikeButton,
} from "./style";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import Loading from "../../components/Loading";

export default function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);


  //função para carregar os comentários
  useEffect(() => {
    const fetchComments = async () => {
      const response = await api.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      const commentsData = response.data.map((comment) => {
        return {
          ...comment,
          liked: false,
        };
      });
      setComments(commentsData);
      setLoading(false);
    };
    fetchComments();
  }, [id]);

 //função para adicionar o "gostei" no post
  function handleLike(commentId) {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          liked: !comment.liked,
        };
      }
      return comment;
    });
    setComments(updatedComments);
  }

   //condicional para exibir mensagem de loading caso a requisição demore
  if (loading) {
    return <Loading message="Carregando comentários..." />;
  }

  return (
    <Container>
      <Title>
        <MdInsertComment
          style={{
            marginRight: "12px",
            fontSize: "60px",
            color: "rgb(109, 208, 255)",
          }}
        />
        {`Comentários do POST ${id}`}
      </Title>
      {comments.map((comment) => (
        <CommentContainer key={comment.id}>
          <UserContainer>
            <UserPhoto>
              <HiUserCircle />
            </UserPhoto>
            <UserName>{comment.email}</UserName>
          </UserContainer>
          <CommentBodyContainer>
            <CommentName>{comment.name}</CommentName>
            <CommentBody>{comment.body}</CommentBody>
            <LikeButton onClick={() => handleLike(comment.id)}>
              {comment.liked ? (
                <AiFillLike style={{ color: "rgb(109 208 255)" }} />
              ) : (
                <AiOutlineLike />
              )}
            </LikeButton>
          </CommentBodyContainer>
        </CommentContainer>
      ))}
    </Container>
  );
}
