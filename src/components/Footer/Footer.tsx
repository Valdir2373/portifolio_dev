import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export function Footer() {
  const anoAtual = new Date().getFullYear();
  const nomeDesenvolvedor = "Valdir de Souza Junior";

  return (
    <footer className="bg-dark text-white p-3">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div className="mb-2 mb-md-0 text-center mx-3">
            {" "}
            <p className="mb-0 text-secondary small">
              &copy; {anoAtual} {nomeDesenvolvedor}. Todos os direitos
              reservados.
            </p>
          </div>

          <span className="d-none d-md-inline text-secondary small mx-4">
            |
          </span>

          <div className="d-flex justify-content-center gap-3">
            <a
              href="https://github.com/Valdir2373"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5 hover-blue"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/valdir-de-souza-junior-1a265a373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5 hover-blue"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/vald__011/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5 hover-blue"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
