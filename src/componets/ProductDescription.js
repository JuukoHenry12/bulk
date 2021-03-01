import { Container, Row, Col } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import { HashLink as Link } from "react-router-hash-link";
import Typist from "react-typist";

const ProductDescription = () => {
  return (
    <div>
      <section id="productdescription">
        <Container>
          <Row>
            <Col sm="12">
              <h2 id="text" data-aos="fade-down-right">
                Uganda's biggest sms platform  with over
                3 million high value airtel ugandan contacts
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProductDescription;
