import './Footer.css';

export const Footer = () => {
  return (
    <>
      <div className="footer-social-bar">
        <h3>Let's get Social</h3>
        <div className="social-links">
          <a href="#facebook" aria-label="Facebook">
            f
          </a>
          <a href="#twitter" aria-label="Twitter">
            𝕏
          </a>
          <a href="#youtube" aria-label="YouTube">
            ▶
          </a>
          <a href="#instagram" aria-label="Instagram">
            📷
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>HELP</h4>
            <a href="mailto:Support@SAUMRS.com">Support@SAUMRS.com</a>
          </div>
          <div className="footer-column">
            <h4>CONTACT</h4>
            <a href="tel:+18774728677">1 (877) 4-SAUMRS</a>
          </div>
          <div className="footer-column">
            <h4>ADDRESS</h4>
            <p>
              1000 Brickell Ave
              <br />
              Ste 715
              <br />
              Miami, FL 33131
            </p>
          </div>
          <div className="footer-column">
            <h4>RELEASES</h4>
            <a href="mailto:Press@SAUMRS.com">Press@SAUMRS.com</a>
          </div>
          <div className="footer-column">
            <h4>AFFILIATES</h4>
            <a href="mailto:Affiliates@SAUMRS.com">Affiliates@SAUMRS.com</a>
          </div>
          <div className="footer-column">
            <h4>LEGAL</h4>
            <a href="mailto:Legal@SAUMRS.com">Legal@SAUMRS.com</a>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#cookies">Cookie Policy</a> •{' '}
          <a href="#privacy">Privacy</a> •{' '}
          <a href="#terms">Terms of use</a>
        </div>
        <p>© 2024 SAUMRS ™</p>
      </div>
    </>
  );
};
