import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { PieChart } from "../../components/Chart";
import { Link } from "react-router-dom";

export function Details() {
    return (
        <Container>
            <Header />

            <Content>

                <div className="content">
                    <h2>Detalhes dos gastos:</h2>
                    <Link to="/">Voltar</Link>
                </div>


                <div className="wrapper">

                    <PieChart />

                    <div className="stats">

                        <div className="setembro">
                            <h3>Setembro 2023</h3>

                            <ul>
                                <li>Aluguel: R$ 1500,00</li>
                                <li>Alimentação: R$ 700,00</li>
                                <li>Roupas: R$ 200,00</li>
                                <li>Streaming: R$ 100,00</li>
                                <li>Extra: R$ 300,00</li>
                            </ul>
                    

                            <h4>Total do mês: R$ 2800,00</h4>
                        </div>

                        <div className="agosto">
                            <h3>Agosto 2023</h3>

                            <ul>
                                <li>Aluguel: R$ 1500,00</li>
                                <li>Alimentação: R$ 750,00</li>
                                <li>Roupas: R$ 250,00</li>
                                <li>Streaming: R$ 100,00</li>
                                <li>Extra: R$ 100,00</li>
                            </ul>


                            <h4>Total do mês: R$ 2700,00</h4>
                        </div>
                            
                    </div>
                </div>
            </Content>
        </Container>
    )
}