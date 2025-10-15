import Layout from "../../components/Layout/Layout";

export default function Home() {
  return (
    <Layout header1="Seja bem-vindo" header2="ao meu portifolio">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src="https://avatars.githubusercontent.com/u/177662075?s=400&u=82f764150c3eed531639deb5d86774c9277a3c36&v=4"
            alt="Foto de Perfil"
            className="profile-picture img-fluid"
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="col-md-7 text-center text-md-start">
          <h2>Você encontrou o desenvolvedor que precisa.</h2>
          <p className="fs-5">
            Se você procura um desenvolvedor que entrega projetos de alta
            qualidade, com:
            <br />
            - Arquitetura Sólida e Código Limpo.
            <br />- Mitigação de Riscos e foco em OWASP Top 10.
          </p>
          <a href="/about_me" className="btn btn-dark btn-lg mt-3">
            Me conheça
          </a>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-8 mx-auto text-center p-4 border rounded shadow-sm">
          <h3 className="mb-3">
            Pronto para Construir Seu Projeto com Segurança?
          </h3>
          <p className="lead">
            Para solicitar um orçamento ou discutir seu projeto (Web, Programas
            ou Apps), entre em contato diretamente.
          </p>
          <p className="fs-4 fw-bold mb-0">
            Email de Contato:{" "}
            <a
              href="mailto:valdirdev.contato@gmail.com"
              className="text-decoration-none"
            >
              valdirdev.contato@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
