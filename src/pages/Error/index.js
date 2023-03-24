import { ErrorContainer, ErrorCode, ErrorMessage } from './style';

//componente para renderizar página de erro caso o usuário selecione uma rota inexistente.
export default function Error() {
    return(
        <ErrorContainer>
            <ErrorCode>404</ErrorCode>
           <ErrorMessage>Page not found :(</ErrorMessage>
        </ErrorContainer>
    )
}