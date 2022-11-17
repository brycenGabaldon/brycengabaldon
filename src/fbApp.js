import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./fbcontext/userAuthContext";
import "./fbApp.css";
import Home from "./fbcomponents/Home";
import Login from "./fbcomponents/Login";
import Signup from "./fbcomponents/Signup";

function FB() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default FB;