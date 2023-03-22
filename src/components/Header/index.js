import Logo from "../Logo"
import { Link } from 'react-router-dom';
import { HeaderContainer, HomeBtn } from './style'; 
export default function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <Link to={'/'}><HomeBtn>Home</HomeBtn></Link>
        </HeaderContainer>
    )
}