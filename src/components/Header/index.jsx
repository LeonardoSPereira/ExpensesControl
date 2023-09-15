import { Container, Profile } from "./styles";
import { AiOutlinePoweroff } from "react-icons/ai"

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/leonardospereira.png" alt="Foto usuário"/>

                <div className="content">
                    <span>Bem vindo,</span>
                    <p>Leonardo Pereira</p>
                </div>
            </Profile>

            <a href="/">
                <AiOutlinePoweroff />
            </a>
        </Container>
    )
}