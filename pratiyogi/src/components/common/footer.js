function Footer() {
  return (
    <div class="footer">
      <div class="footer-list">
        <div class="footer-section footer-quicklinks">
          <h4 class="footer-heading">Website Name</h4>
          <div class="footer-link-main">
            <a class="footer-link">Mansarover, Jaipur</a>
          </div>
        </div>
      </div>
      <div class="footer-list">
        <div class="footer-section footer-quicklinks">
          <h4 class="footer-heading">Community</h4>
          <div class="footer-link-main">
            <a class="footer-link" href="#">
              SSC
            </a>
            <a class="footer-link" href="#">
              IBPS Cleark
            </a>
            <a class="footer-link" href="#">
              Railway exams
            </a>
            <a class="footer-link" href="#">
              UPSC exam
            </a>
            <a class="footer-link" href="#">
              SSC CHSL
            </a>
            <a class="footer-link" href="#">
              SBI PO
            </a>
            <a class="footer-link" href="#">
              NDA
            </a>
            <a class="footer-link" href="#">
              CDS
            </a>
            <a class="footer-link" href="#">
              RRB
            </a>
          </div>
        </div>
      </div>
      <div class="footer-list">
        <div class="footer-section footer-quicklinks">
          <div class="footer-link-main">
            <h4 class="footer-heading">Quick Links</h4>
            <div class="footer-link-main">
              <a class="footer-link" href="home.html">
                Home
              </a>
              <a class="footer-link" href="about.html">
                About
              </a>
              <a class="footer-link" href="service.html">
                Our Service
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-list">
        <div class="footer-section footer-quicklinks">
          <div class="footer-link-main">
            <h4 class="footer-heading">Apps</h4>
            <a class="footer-link" href="#">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt=""
                style={{"width":"150px"}}
              />
            </a>
            <div class="footer-flex">
              <a class="footer-link facebook-icon" href="#">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-2982007-2489677.png?f=webp&w=512"
                  alt=""
                  style={{"width":"27px"}}
                />
              </a>
              <a class="footer-link twitter-icon" href="#">
                <i
                  class="fa fa-twitter"
                  style={{ "font-size": "32px", color: "rgb(60,90,155)" }}
                ></i>
              </a>
              <a class="footer-link insta-icon" href="#">
                <i
                  class="fa fa-instagram"
                  style={{ "font-size": "32px", color: "rgb(60,90,155)" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
