import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>
            Drone<span>Planet</span>
          </h2>

          <div className="socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Products</h3>

          <a href="#hero">Avata 360</a>
          <a href="#features">Explorer Pro</a>
          <a href="#specifications">Sky Vision</a>
          <a href="#contact">Accessories</a>
        </div>

        <div className="footer-links">
          <h3>Company</h3>

          <a href="#about">About Us</a>
          <a href="#features">Technology</a>
          <a href="#contact">Support</a>
          <a href="#contact">Careers</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            <FaLocationDot />
            California, United States
          </p>

          <p>
            <FaPhone />
            +1 (800) 123-4567
          </p>

          <p>
            <FaEnvelope />
            support@droneplanet.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 DronePlanet. All Rights Reserved.</p>

        <div>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;