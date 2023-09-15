import { DropdownMenuExpense } from "../Menu";
import { Container } from "./styles";

export function Expense({ title, value, children, date, category }) {
    return (
        <Container>
            <h3>{title}</h3>
            <span>R$: {value}</span>
            <span>{date}</span>
            <p>{children}</p>
            <div className="menu">
                <DropdownMenuExpense />
            </div>
            <h5>{category}</h5>
        </Container>
    )
}