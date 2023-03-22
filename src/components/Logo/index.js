import LogoImg from '../../img/logo.png';
import { LogoContainer, LogoImage } from './style';
export default function Logo() {
    return(
        <LogoContainer>
            <LogoImage src={LogoImg} alt='LogoImage'/>
        
        </LogoContainer>
    )
}