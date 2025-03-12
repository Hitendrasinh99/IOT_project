import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";

function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "iot123") {
      navigate("/dashboard");
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg">
        <h2 className="text-center mb-4">IoT Dashboard Login</h2>
        <Form>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="w-100 mt-3" onClick={handleLogin}>
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
