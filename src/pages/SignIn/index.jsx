import { Container, Background, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { PiSignInFill } from "react-icons/pi"
import { Button } from "../../components/Button";



export function SignIn() {
    return (
        <Container>

            <aside>
                <h1>Expenses Control</h1>
                <span>Aplicação para controlar os seus gastos</span>
                <p>Faça o seu Login</p>

                <Form>
                    <Input 
                        required
                        type="email"
                        placeholder="Digite seu email"
                        icon={FiMail}
                        value="admin@admin.com"
                    />

                    <Input 
                        required
                        type="password"
                        placeholder="Digite sua senha"
                        icon={FiLock}
                        value="1234"
                    />

                    <Button icon={PiSignInFill} title="Entrar"/>

                    <a href="/">Criar conta</a>
                </Form>

            </aside>
            <Background />

        </Container>
    )
}