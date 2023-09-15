import { AiOutlinePlus } from "react-icons/ai";
import { Header } from "../../components/Header";
import { Container, Brand, Filter, Content, Resume, NewExpense } from "./styles";
import { SelectHome } from "../../components/Select";
import { Expense } from "../../components/Expense";

export function Home() {

    const dataAtual = new Date();

    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();

    const data = `${dia}/0${mes}/${ano}`;

    return (
        <Container>
            <Brand>
                <h1>Expenses Control</h1>
            </Brand>

            <Header />

            <Resume>
                <h2>Resumo do mês:</h2>

                <ul>
                    <li>Aluguel: R$ 1500,00</li>
                    <li>Alimentação: R$ 700,00</li>
                    <li>Roupas: R$ 200,00</li>
                    <li>Streaming: R$ 100,00</li>
                    <li>Extra: R$ 300,00</li>
                </ul>
                

                <h3>Total do mês: R$ 2800,00</h3>

                <a href="/">Ver resumo detalhado</a>
                
            </Resume>

            <Filter>
                Filtro: 
                <SelectHome />
            </Filter>

            <Content>
                <Expense title="Aluguel" date={data} value={1500} category="Aluguel">
                    Aluguel da casa
                </Expense>
                <Expense title="Alimentos" date={data} value={700} category="Alimentos">
                    Compra dos alimentos do mês
                </Expense>
                <Expense title="Calça nova" date={data} value={120} category="Roupas">
                    Compra de uma calça nova
                </Expense>
                <Expense title="Camisa nova" date={data} value={80} category="Roupas">
                    Compra de uma camisa nova
                </Expense>
                <Expense title="Streaming" date={data} value={100} category="Streming">
                    Pagamento das assinaturas da Netflix, Amazon Prime, Paramount+, HBO Max
                </Expense>
                <Expense title="Jogo PS5" date={data} value={300} category="Extras">
                    Compra do jogo Hogwarts Legacy para PS5
                </Expense>
            </Content>

            <NewExpense>
                <AiOutlinePlus />
                Adicionar gasto
            </NewExpense>

        </Container>
    )
}