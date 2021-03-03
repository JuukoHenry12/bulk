import {Container} from 'react-bootstrap'
const productfeature = () => {
  return (
     <div id="feature">
       <Container>
       <h2 className="text-center" data-aos="fade-left">
           <span>Product </span>Features
          </h2>
          <hr />
           
          <ul class="ul-contact" data-aos="fade-right">
               <li>sending bulk messages to all Airtel customes</li>
               <li>Sms Bonus</li>
               <li>Bulk imports of contacts</li>
               <li>Real-time Analytics</li>
               <li>Using any mobile phone</li>
          </ul>
       </Container>
     </div>
  );
}

export default productfeature;