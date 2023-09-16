import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { SelectDescription } from "../../components/Select";
import { Button } from "../../components/Button";
import { AiOutlineSave } from "react-icons/ai";
import { Link } from "react-router-dom";

export function NewExpense() {
    return (
        <Container>
            <Header />

            <Form>
                <div className="wrapper">
                    <h2>Novo gasto</h2>
                    <Link to="/">Voltar</Link>
                </div>

                <Input 
                    type="text"
                    placeholder="Título"
                />

                <Input 
                    type="text"
                    placeholder="Preço"
                />

                <Textarea 
                    placeholder="Digite a descrição do gasto"
                />

                <div className="wrapper">
                    <h3>Categoria:</h3>
                    <SelectDescription />
                </div>

                <Button title="Salvar" icon={AiOutlineSave}/>

            </Form>
        </Container>
    )
}