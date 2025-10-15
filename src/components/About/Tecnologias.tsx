// Tecnologias.tsx (Componente de Conteúdo para a Aba "Tecnologias")

import React from "react";
// Importe ícones se for usá-los (npm install react-icons)
// Ex: import { FaReact, FaNodeJs } from "react-icons/fa";
// Ex: import { SiNestjs, SiRabbitmq } from "react-icons/si";

// Tipagem para o componente Badge
interface TechBadgeProps {
  name: string;
  icon?: React.ElementType; // Usamos React.ElementType para ícones
  colorClass?: string;
}

// Componente para exibir um Badge/Pílula de tecnologia
const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  icon: IconComponent,
  colorClass = "bg-primary text-white",
}) => (
  <span className={`badge ${colorClass} fs-6 px-3 py-2 me-2 mb-2 shadow-sm`}>
    {IconComponent && <IconComponent className="me-1" />}
    {name}
  </span>
);

export default function Tecnologias() {
  return (
    <div className="p-3">
      <h3 className="text-center mb-4 fw-light">
        Minhas Tecnologias e Ferramentas
      </h3>

      <div className="row g-4 justify-content-center">
        {/* COLUNA 1: Linguagem e Frameworks */}
        <div className="col-lg-6">
          <div className="p-4 border rounded h-100 bg-light">
            <h5 className="text-primary mb-3 fw-bold">
              Linguagem e Frameworks
            </h5>
            <p className="text-dark big">
              Desenvolvimento robusto focado em TypeScript para escalabilidade e
              segurança.
            </p>
            <div className="d-flex flex-wrap">
              <TechBadge
                name="JavaScript / TypeScript"
                colorClass="bg-info text-dark"
              />
              <TechBadge name="React" colorClass="bg-primary text-white" />
              <TechBadge
                name="React-Native"
                colorClass="bg-primary text-white"
              />
              <TechBadge name="NestJS" colorClass="bg-danger text-white" />
              <TechBadge name="Express" colorClass="bg-dark text-white" />
            </div>
          </div>
        </div>

        {/* COLUNA 2: Bancos de Dados */}
        <div className="col-lg-6">
          <div className="p-4 border rounded h-100 bg-light">
            <h5 className="text-primary mb-3 fw-bold">Bancos de Dados</h5>
            <p className="text-dark big">
              Experiência com modelagem relacional, NoSQL e serviços em tempo
              real.
            </p>
            <div className="d-flex flex-wrap">
              <TechBadge
                name="MySQL"
                colorClass="bg-orange-custom text-black"
              />
              <TechBadge
                name="PostgreSQL"
                colorClass="bg-secondary text-white"
              />
              <TechBadge name="MariaDB" colorClass="bg-success text-white" />
              <TechBadge name="MongoDB" colorClass="bg-dark text-white" />
              <TechBadge name="Firebase" colorClass="bg-warning text-dark" />
            </div>
          </div>
        </div>

        {/* COLUNA 3: Ferramentas e Infraestrutura */}
        <div className="col-lg-6">
          <div className="p-4 border rounded h-100 bg-light">
            <h5 className="text-primary mb-3 fw-bold">
              Ferramentas e Infraestrutura
            </h5>
            <p className="text-dark big">
              Práticas essenciais para fluxo de trabalho, testes e deploy.
            </p>
            <div className="d-flex flex-wrap">
              <TechBadge name="GIT" colorClass="bg-danger text-white" />
              <TechBadge
                name="Postman"
                colorClass="bg-orange-custom text-black"
              />
              <TechBadge name="ngrok" colorClass="bg-dark text-white" />
              <TechBadge name="Cloudflare" colorClass="bg-info text-dark" />
              <TechBadge name="Docker" colorClass="bg-primary text-white" />

              <TechBadge name="Jest" colorClass="bg-success text-white" />
              <TechBadge name="RabbitMQ" colorClass="bg-secondary text-white" />
              <TechBadge name="Burpsuite" colorClass="bg-warning text-black" />
            </div>
          </div>
        </div>

        {/* Adicionei uma coluna de espaço para layout em 3 colunas, caso queira usar mais tarde */}
        <div className="col-lg-6 d-none d-lg-block">
          {/* Espaço em branco ou mais conteúdo, se necessário */}
        </div>
      </div>
    </div>
  );
}

// NOTA: Para que 'bg-orange-custom' funcione, você precisa definir essa classe no seu CSS global.
// .bg-orange-custom { background-color: #ff6600 !important; } // Cor customizada para MySQL/Postman
