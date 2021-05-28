import { Container, Row, Col } from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import DownloadLink from "react-download-link";
const About = () => {
  return (
    <section id="about">
      <Container>
        <h2 className="text-center" data-aos="fade-left">
          <span>About</span> us
        </h2>
        <hr />
        <Row>
          <Col>
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/2RocXKPPx4o"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h1 className="text-center">Download Business plan</h1>
            <div className="text-center">
              <DownloadLink
                label="business plan"
                filename="./files/myfile.txt"
                exportFile={() => "My cached data"}
                className="btn btn-warning"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
