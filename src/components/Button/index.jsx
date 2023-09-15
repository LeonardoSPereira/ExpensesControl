import { Container } from "./styles";

export function Button({icon: Icon, title}) {
    return (
        <Container>
            { title }
            { Icon && <Icon size={20}/> }
        </Container>
    )
}