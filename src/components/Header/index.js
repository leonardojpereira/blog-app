import Logo from "../Logo"
import { Link } from 'react-router-dom';
import { HeaderContainer, HomeBtn } from './style';
import { FaHome } from 'react-icons/fa'

//cabeçalho da página
export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Link to={'/'}><HomeBtn><FaHome /></HomeBtn></Link>
        </HeaderContainer>
    )
}