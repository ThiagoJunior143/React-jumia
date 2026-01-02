import Form from "../components/Form"
import Container from "react-bootstrap/Container";

function Login() {
    return (
    <Container>
     <Form route="/api/token/" method="login" />
    </Container> 
)
}

export default Login;