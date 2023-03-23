import { ErrorContainer, ErrorCode, ErrorMessage } from './style';


export default function Error() {
    return(
        <ErrorContainer>
            <ErrorCode>404</ErrorCode>
           <ErrorMessage>Page not found :(</ErrorMessage>
        </ErrorContainer>
    )
}