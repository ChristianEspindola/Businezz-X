import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre mí</h3>
          <p>
            Christian Espindola. Analista en Sistemas y Desarrollador Web
            Front-End. Apasionado por crear interfaces intuitivas con HTML, CSS,
            JS y frameworks como React.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: christian.espindola@hotmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/christian-espindola-analista/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/tu-perfil
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 Business X. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
