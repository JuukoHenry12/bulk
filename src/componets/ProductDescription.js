import { Container, Row, Col } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import { HashLink as Link } from "react-router-hash-link";
import Typist from "react-typist";

const ProductDescription = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md="12">
            <h2 id="text" data-aos="fade-down-right">
              Uganda's biggest sms platform{" "}
            </h2>
            <h2 id="text" data-aos="fade-down-right">
              with over{" "}
            </h2>
            <h2 id="text" data-aos="fade-down-right">
              3 million high value airtel ugandan contacts
            </h2>
           </Col>
        </Row>
        <div className="angle">
          <Link smooth to="#about">
            <MDBIcon icon="angle-down" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ProductDescription;
