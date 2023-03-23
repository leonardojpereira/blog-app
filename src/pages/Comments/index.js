import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { HiUserCircle } from 'react-icons/hi';
import { MdInsertComment } from 'react-icons/md';
import { Container, Title, CommentContainer, UserContainer, UserPhoto, UserName, CommentBodyContainer, CommentName, CommentBody } from './style';
export default function Comments() {

    const { id } = useParams();
    const [comment, setComment] = useState([{}]);
    useEffect(() => {

        api.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => {
                setComment(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <Container>
            <Title><MdInsertComment style={{marginRight: '12px', fontSize: '60px', color: 'rgb(109, 208, 255)'}}/>{`Comentários do post ${id}`}</Title>
            {comment.map(comment => (
                <CommentContainer key={comment.id}>
                    <UserContainer>
                        <UserPhoto><HiUserCircle /></UserPhoto>
                        <UserName>{comment.email}</UserName>
                    </UserContainer>
                    <CommentBodyContainer>
                        <CommentName>{comment.name}</CommentName>
                        <CommentBody>{comment.body}</CommentBody>
                    </CommentBodyContainer>

                </CommentContainer>
            ))}
        </Container>
    )
}