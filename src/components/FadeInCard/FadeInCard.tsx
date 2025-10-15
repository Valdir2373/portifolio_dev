// FadeInCard.js (CORRIGIDO)

import React from "react";

export default function FadeInCard({ children, cardTitle }) {
  // Card com sombra (shadow-lg) e borda sutil (border-light)
  const cardClasses = "card shadow-lg border-light mb-4 mt-4";

  // Classe para garantir a animação fade in
  const contentClasses = "tab-pane fade show active";

  return (
    <div className={cardClasses}>
      {/* CORREÇÃO: Header branco (bg-white), borda sutil (border-bottom border-light) 
          e texto preto/escuro (text-dark), combinando com a página */}
      <div className="card-header bg-white border-bottom border-light pt-4">
        <h4 className="mb-0 text-dark fw-bold">{cardTitle}</h4>
      </div>
      <div className="card-body p-4">
        <div className={contentClasses}>{children}</div>
      </div>
    </div>
  );
}
