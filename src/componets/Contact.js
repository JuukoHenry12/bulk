import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact">
      <header class="contact">
        <h2 className="text-center">Contact US</h2>
        <hr/>
      </header>
      <section className="contact">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <h2>
                <span class="highlight">Get</span> in touch
              </h2>
              <ul class="ul-address">
                <li>Kampala, Uganda</li>
                <li>
                  <i class="pe-7s-phone"></i>
                  Mobile1 - +(256) 0707811113
                  <br />
                  Mobile2 - +(256) 0788200915
                </li>
                <li>
                  <i class="pe-7s-mail"></i>
                  Email
                  <br />
                  <a href="mailto:info@pahappa.com">juukohenry23@gmail.com</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="6">
              <h2>Social Media</h2>
              <a href="#!" className="fb-ic mr-3">
                <MDBIcon size="lg" fab icon="facebook-f" />
              </a>
              <a href="#!" className="tw-ic mr-3">
                <MDBIcon size="lg" fab icon="twitter" />
              </a>
              <a href="#!" className="ins-ic mr-3">
                <MDBIcon size="lg" fab icon="instagram" />
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Contact;
