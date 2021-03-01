import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact" >
      <header class="contact">
        <h2 className="text-center">Contact US</h2>
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
              <MDBBtn primary social="fb">
                <MDBIcon fab icon="facebook-f" className="pr-1" /> Facebook
              </MDBBtn>
              <MDBBtn social="tw">
                <MDBIcon fab icon="twitter" className="pr-1" /> Twitter
              </MDBBtn>
              <MDBBtn social="ins">
                <MDBIcon fab icon="instagram" className="pr-1" /> Instagram
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Contact;
