// ProjectCard.tsx (Componente de Card de Projeto)

import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
// Assumindo que você importará o TechBadge aqui:
// import TechBadge from './TechBadge';

export interface ProjectCardProps {
  nome: string;
  descricao: string;
  imagemPath: string; // Caminho da imagem (ex: importada via asset)
  githubLink: string;
  projectLink: string;
  tecnologias: string[];
}

// Assumindo o TechBadge de volta para este componente, caso não queira importar
// (Se você tiver ele como um componente separado, remova esta definição)
const TechBadge: React.FC<{ name: string; colorClass?: string }> = ({
  name,
  colorClass = "bg-primary text-white",
}) => (
  <span className={`badge ${colorClass} fs-7 px-2 py-1 me-2 mb-2`}>{name}</span>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  nome,
  descricao,
  imagemPath,
  githubLink,
  projectLink,
  tecnologias,
}) => {
  return (
    // Aplicação da classe cardHover (certifique-se de que o CSS abaixo está no seu global.css)
    <div
      className="card h-100 shadow-sm project-card cardHover"
      style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
    >
      {/* Imagem de Exemplo do Projeto */}
      <img
        src={imagemPath}
        className="card-img-top"
        alt={`Imagem do Projeto ${nome}`}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary fw-bold">{nome}</h5>
        <p className="card-text small mb-3 flex-grow-1">{descricao}</p>

        {/* Tecnologias (TechBadges) */}
        <div className="mb-3">
          {tecnologias.map((tech, index) => (
            <TechBadge
              key={index}
              name={tech}
              colorClass="bg-secondary text-white"
            />
          ))}
        </div>

        {/* AJUSTE AQUI: Container Flex para Botões Lado a Lado */}
        <div className="d-flex justify-content-between gap-2 mt-auto">
          {/* Botão GitHub: w-50 (50% de largura) */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-dark w-50" // Usando btn-sm para mais compactação e btn-dark para destaque
          >
            <FaGithub className="me-1" />
            GitHub
          </a>

          {/* Botão Projeto: w-50 (50% de largura) */}
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-dark w-50" // Usando btn-sm e w-50
          >
            <CgWebsite className="me-1" />
            Projeto
          </a>
        </div>
        {/* FIM DO AJUSTE */}
      </div>
    </div>
  );
};

export default ProjectCard;
