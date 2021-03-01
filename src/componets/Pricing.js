const Pricing = () => {
  return (
    <div>
      <section id="pricing" class="pricing">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2 className="text-center">Prices</h2>
            <hr/>
          </div>

          <div class="row" data-aos="fade-left">
            <div class="col-lg-3 col-md-6">
              <div class="box" >
                <h3>Bulk sms</h3>
                <h4>
                  <sup>ugx</sup>40<span>shs</span>
                </h4>
                <ul>
                  <li>
                    <p>Less than </p>
                  </li>
                  <li>
                    <p>3,000 sms</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
              <div class="box featured" >
                <h3>Bulk sms</h3>
                <h4>
                  <sup>ugx</sup>20<span> /shs</span>
                </h4>
                <ul>
                  <li>
                    <p>Between</p>
                  </li>
                  <li>
                    <p>3,000 sms to 100,000 sms </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
              <div class="box">
                <h3>Bulk sms</h3>
                <h4>
                  <sup>ugx</sup>15<span> / shs</span>
                </h4>
                <ul>
                  <li>
                    <p>Between </p>
                  </li>
                  <li>
                    <p>100,000 to 500,000 sms</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
              <div class="box" >
                <span class="advanced">Advanced</span>
                <h3>Bulk sms</h3>
                <h4>
                  <sup>ugx</sup>12<span> / shs</span>
                </h4>
                <ul>
                  <li>
                    <p>more than</p>
                  </li>
                  <li>
                    <p>500,000 sms</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
