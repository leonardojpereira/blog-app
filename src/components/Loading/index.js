import { LoadingContainer, LoadingMessage } from './style';

export default function Loading({message}) {
    return (
        <>
            <LoadingContainer>
                <LoadingMessage>{message}</LoadingMessage>
            </LoadingContainer>
        </>

    )
}