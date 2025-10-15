// LivroCard.tsx (Componente de Card Individual com Hover)

import React from "react";

interface LivroCardProps {
  titulo: string;
  autor: string;
  resumo: string;
  imagePath: string;
}

const LivroCard: React.FC<LivroCardProps> = ({
  titulo,
  autor,
  resumo,
  imagePath,
}) => {
  return (
    // Aplicamos classes de transição para o hover (shadow e scale)
    <div
      className="card h-100 border-0 shadow-sm cardHover"
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // CSS para animação suave
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <div className="row g-0 h-100">
        {/* Imagem do Livro (Capa) */}
        <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
          {/* O caminho da imagem deve ser acessível via /cc.jpg se estiver na pasta 'public' */}
          <img
            src={imagePath}
            alt={`Capa do Livro: ${titulo}`}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "200px", width: "auto" }}
          />
        </div>

        {/* Conteúdo do Livro (Detalhes) */}
        <div className="col-md-8">
          <div className="card-body d-flex flex-column h-100">
            <h5 className="card-title text-primary fw-bold">{titulo}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{autor}</h6>
            <p className="card-text small flex-grow-1">{resumo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivroCard;
