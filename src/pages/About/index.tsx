import { useState } from "react";
import Layout from "../../components/Layout/Layout";
// Importe o novo componente de card animado
import FadeInCard from "../../components/FadeInCard/FadeInCard";
import "./index.css";

import Pessoal from "../../components/About/Pessoal";
import Tecnologias from "../../components/About/Tecnologias";

import LivrosLidos from "../../components/About/LivrosLidos";

const AZUL_PRINCIPAL = "bg-primary";
const COR_TEXTO_ATIVO = "text-white";
const COR_TEXTO_INATIVO = "text-dark";

export default function AboutMe() {
  const [abaAtiva, setAbaAtiva] = useState("pessoal");

  const getAbaClasses = (aba) => {
    // Nav pills mais limpos, transição manual para hover (necessita de CSS)
    let classes = "nav-link btn btn-lg mx-2 px-4 transition-all duration-300";

    if (abaAtiva === aba) {
      // ESTILO ATIVO: Fundo Azul (como seu Header) e texto branco
      classes += ` ${COR_TEXTO_ATIVO} ${AZUL_PRINCIPAL} shadow-sm`;
    } else {
      // ESTILO INATIVO: Fundo branco, texto escuro e borda sutil (para o hover ser notável)
      classes += ` ${COR_TEXTO_INATIVO} bg-white border border-light`;
    }
    return classes;
  };

  const renderConteudo = () => {
    // ... (Mantido o mesmo)
    switch (abaAtiva) {
      case "pessoal":
        return <Pessoal />;
      case "tecnologias":
        return <Tecnologias />;
      case "livros":
        return <LivrosLidos />;
      default:
        return <Pessoal />;
    }
  };

  const getCardTitle = () => {
    // ... (Mantido o mesmo)
    switch (abaAtiva) {
      case "pessoal":
        return "Conheça Minha Trajetória";
      case "tecnologias":
        return "Stack e Ferramentas de um Desenvolvedor Seguro";
      case "livros":
        return "Leituras que Moldaram Minha Visão";
      default:
        return "Conteúdo";
    }
  };

  return (
    <Layout header1="Sobre mim" header2="Valdir de Souza Junior">
      <div className="container py-4">
        {/* NAVBAR INTERATIVA (Pills) */}
        <ul
          className="nav nav-pills justify-content-center mb-5"
          role="tablist"
        >
          {/* ... (Itens da Lista com os clicks) */}
          <li className="nav-item">
            <a
              className={getAbaClasses("pessoal")}
              onClick={(e) => {
                e.preventDefault();
                setAbaAtiva("pessoal");
              }}
              href="#"
            >
              {" "}
              Pessoal{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className={getAbaClasses("tecnologias")}
              onClick={(e) => {
                e.preventDefault();
                setAbaAtiva("tecnologias");
              }}
              href="#"
            >
              {" "}
              Tecnologias{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className={getAbaClasses("livros")}
              onClick={(e) => {
                e.preventDefault();
                setAbaAtiva("livros");
              }}
              href="#"
            >
              {" "}
              Livros Lidos{" "}
            </a>
          </li>
        </ul>

        {/* CONTEÚDO DA ABA ATIVA COM ANIMAÇÃO */}
        <FadeInCard key={abaAtiva} cardTitle={getCardTitle()}>
          {renderConteudo()}
        </FadeInCard>
      </div>
    </Layout>
  );
}
