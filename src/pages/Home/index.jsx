import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Header } from "../../components/Header";
import { Container, Brand, Filter, Content, Resume, NewExpense } from "./styles";
import { SelectHome } from "../../components/Select";
import { Expense } from "../../components/Expense";
import { Link } from "react-router-dom";


const expenses = [
    {
      title: 'Aluguel',
      date: new Date('2023-12-21'), // Replace '2023-12-21' with an actual date string or a Date object
      value: 1500,
      category: 'Aluguel',
      description: 'Aluguel da casa',
    },
    {
      title: 'Gas',
      date: new Date('2023-12-22'),
      value: 50,
      category: 'Utilities',
      description: 'Gas bill',
    },
    {
      title: 'Groceries',
      date: new Date('2023-12-23'),
      value: 200,
      category: 'Food',
      description: 'Weekly groceries',
    },
    {
        title: 'Aluguel',
        date: new Date('2023-12-21'), // Replace '2023-12-21' with an actual date string or a Date object
        value: 1500,
        category: 'Aluguel',
        description: 'Aluguel da casa',
      },
      {
        title: 'Gas',
        date: new Date('2023-12-22'),
        value: 50,
        category: 'Utilities',
        description: 'Gas bill',
      },
      {
        title: 'Groceries',
        date: new Date('2023-12-23'),
        value: 200,
        category: 'Food',
        description: 'Weekly groceries',
      },
];
  

export function Home() {
    const [expense, setExpense] = useState("");    

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

                <Link to="/details">Ver resumo detalhado</Link>
                
            </Resume>

            <Filter>
                Filtro: 
                <SelectHome value={setExpense}/>
            </Filter>

            <Content>

                {
                expenses.map((expense, index) => (
                    <Expense
                        key={String(index)}
                        title={expense.title}
                        date={expense.data} 
                        value={expense.value} 
                        category={expense.category}
                    >
                        {expense.description}
                    </Expense>
                ))
                }
                
            </Content>

            <NewExpense to="/new">
                <AiOutlinePlus />
                Adicionar gasto
            </NewExpense>

        </Container>
    )
}