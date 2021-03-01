import { Container, Row, Col} from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import DownloadLink from "react-download-link";
const About = () => {
  return (
    <div>
      <section id="about">
        <Container>
          <h2 className="text-center">Product Features</h2>
          <Row>
            <Col md={12}>
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/Q0azZ7n696Y"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <h1 className="text-center">Download Business plan</h1>
              <div className="button text-center">
              <MDBBtn
              color="info"
              >
              <DownloadLink
                label="business plan"
                filename="./files/myfile.txt"
                exportFile={() => "My cached data"}
              />
              </MDBBtn>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
