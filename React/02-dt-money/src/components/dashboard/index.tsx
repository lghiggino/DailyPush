import { Summary } from "../summary"
import { Container } from "./styles"

interface DashboardProps {
    props?: any
    children?: any
    style?: any
}

export function Dashboard({ props, children, style }: DashboardProps) {
    return (
        <Container>
            <Summary />
        </Container>
    )
}