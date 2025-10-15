// Pessoal.js (Componente de Conteúdo para a Aba "Pessoal" - Finalizado)

import React from "react";
// Assumindo que essas bibliotecas estão instaladas: npm install react-icons
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Pessoal() {
  // Caminho do currículo na pasta 'public' (prática padrão do React/Next.js)
  const CURRICULO_PATH = "/curriculo_dev.pdf";

  return (
    <div className="p-3">
      {/* Container Principal do Conteúdo Pessoal */}
      <div className="row g-4">
        {/* COLUNA 1: Perfil e Contato (com Botão de Download) */}
        <div className="col-lg-4">
          <div className="p-4 border rounded h-100 bg-light d-flex flex-column">
            <h5 className="text-primary mb-3 fw-bold">Perfil e Contato</h5>
            <p>
              Me chamo Valdir, tenho 19 anos e sou desenvolvedor, e quero
              trabalhar com o que mais amo, sou um jovem muito dedicado aos
              estudos, terminei recentemente o meu colegio, estou a procura de
              uma vaga para mostrar minhas habilidades
            </p>
            <hr />
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i>{" "}
              {/* Ícone de e-mail (necessita Bootstrap Icons) */}
              <a
                href="mailto:valdirdev.contato@gmail.com"
                className="text-decoration-none"
              >
                valdirdev.contato@gmail.com
              </a>
            </p>
            <p className="mb-3">
              <i className="bi bi-geo-alt-fill me-2"></i>{" "}
              {/* Ícone de localização */}
              Zona Sul, São Paulo, Brasil
            </p>

            {/* LINKS DE MÍDIA SOCIAL (Ajustado o estilo para um display mais limpo) */}
            <div className="d-flex justify-content-start mb-4">
              <a
                href="https://github.com/Valdir2373"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-5 me-3" // text-dark padrão, me-3 para margem à direita
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/valdir-de-souza-junior-1a265a373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-5 me-3"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/vald__011/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-5 me-3"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>

            {/* BOTÃO DE DOWNLOAD DO CURRÍCULO */}
            <a
              href={CURRICULO_PATH}
              download="valdir_dev.pdf" // Força o download com este nome
              className="btn btn-primary mt-auto" // btn-primary para o azul, mt-auto empurra para o final
            >
              Baixar Currículo (PDF)
            </a>
          </div>
        </div>

        {/* COLUNA 2: Formação (Conteúdo mantido) */}
        <div className="col-lg-4">
          <div className="p-4 border rounded h-100 bg-light">
            <h5 className="text-primary mb-3 fw-bold">Formação</h5>

            <div className="mb-4">
              <h6 className="fw-bold mb-0">
                Tecnólogo em Análise e Desenvolvimento de Sistemas
              </h6>
              <p className=" small">
                Universidade Uninove | Cursando primeiro semestre
              </p>
              <p className="small">
                Foco em programação, modelagem de dados, segurança da informação
                e hardware
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-bold mb-0">Estudos e Cursos Livres</h6>
              <p className=" small">Plataformas de Estudos como Alura</p>
              <p className=" small">Curso de Javascript do Curso em Vídeo</p>
              <p className="small">
                Curso de Clean code e Clean Architecture do Rodrigo Branas
              </p>
            </div>
          </div>
        </div>

        {/* COLUNA 3: Filosofia de Trabalho (Conteúdo mantido) */}
        <div className="col-lg-4">
          <div className="p-4 border rounded h-100 bg-light">
            <h5 className="text-primary mb-3 fw-bold">Filosofia de Trabalho</h5>
            <p>
              Mesmo não tendo experiência em mexer em um software grande e
              profissional, percebi em meus projetos que um software nunca
              morre, se aplicarmos uma boa organização de inicio.
            </p>
            <p>
              Acredito que a organização e a arquitetura são pilares para
              qualquer projeto de software bem-sucedido e duradouro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
