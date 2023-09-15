import { Container, Background, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { PiSignInFill } from "react-icons/pi"
import { Button } from "../../components/Button";



export function SignUp() {
    return (
        <Container>

            <Background />

            <aside>
                <h1>Expenses Control</h1>
                <span>Aplicação para controlar os seus gastos</span>
                <p>Crie sua conta</p>

                <Form>

                    <Input 
                        required
                        type="text"
                        placeholder="Digite seu nome"
                        icon={FiUser}
                    />

                    <Input 
                        required
                        type="email"
                        placeholder="Digite seu email"
                        icon={FiMail}
                    />

                    <Input 
                        required
                        type="password"
                        placeholder="Digite sua senha"
                        icon={FiLock}
                    />

                    <Button icon={PiSignInFill} title="Criar"/>

                    <a href="/">Voltar</a>
                </Form>

            </aside>

        </Container>
    )
}