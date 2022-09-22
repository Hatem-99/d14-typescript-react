import { Container, Row, Col, } from "react-bootstrap";
import Fetching from "./Fetching";





const MainPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
          <Fetching/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
