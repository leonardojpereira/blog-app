import { useState, useEffect } from 'react';
import { api } from '../../services/api';
export default function User() {

    const [user, setUser] = useState([{}]);
    useEffect(() => {
        api.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return(
        <h1>Informações do Usuário</h1>
    )
}