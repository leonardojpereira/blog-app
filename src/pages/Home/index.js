import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Container, PostContainer, UserContainer, UserPhoto, User, BodyContainer, PostTitle, PostBody, Comments } from './style';
import { HiUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
export default function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <Container>
            {posts.map(post => (
                <PostContainer key={post.id}>
                    <Link style={{textDecoration: 'none', color: '#000'}} to={`/user/${post.userId}`}>
                        <UserContainer>
                            <UserPhoto><HiUserCircle /></UserPhoto>
                            <User>{`User ${post.userId}`}</User>
                        </UserContainer>
                    </Link>
                    <BodyContainer>
                        <PostTitle>{post.title}</PostTitle>
                        <PostBody>{post.body}</PostBody>
                        <Comments>Ver comentarios</Comments>
                    </BodyContainer>
                </PostContainer>
            ))}
        </Container>
    );
}

