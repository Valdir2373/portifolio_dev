import LivroCard from "../CardBook";
// Importações de assets: Mantendo o padrão de caminho que você usa
import cc from "../../assets/livros/cc.jpg";
import dp from "../../assets/livros/dp.jpg"; // Assumindo este nome de arquivo
import refactoring from "../../assets/livros/refactoring.jpg"; // Assumindo este nome de arquivo

export default function LivrosLidos() {
  const livros = [
    // ... (Dados dos livros mantidos)
    {
      titulo: "Clean Code: Habilidades Práticas do Agile Software",
      autor: "Robert C. Martin (Uncle Bob)",
      resumo:
        "Um guia essencial que define o que é código limpo e ensina os princípios, padrões e práticas necessárias para escrever, ler e refatorar código de alta qualidade. Fundamental para qualquer desenvolvedor sério.",
      imagePath: cc,
      tag: "Fundamentos de Qualidade",
    },
    {
      titulo: "Design Patterns: Elements of Reusable Object-Oriented Software",
      autor:
        "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides (Gang of Four)",
      resumo:
        "O livro clássico que catalogou 23 padrões de projeto essenciais. Essencial para construir software modular, flexível e de fácil manutenção, usando soluções comprovadas.",
      imagePath: dp,
      tag: "Arquitetura e Modularidade",
    },
    {
      titulo: "Refactoring: Improving the Design of Existing Code",
      autor: "Martin Fowler",
      resumo:
        "Um guia prático para melhorar o design de código existente. Ensina a técnica de refatoração para manter o código limpo e aprimorar a manutenibilidade sem alterar o comportamento externo.",
      imagePath: refactoring,
      tag: "Manutenibilidade e Evolução",
    },
  ];

  return (
    <div className="p-3" style={{ display: "flex", flexDirection: "column" }}>
           {" "}
      <h3 className="text-center mb-4 fw-light">
                Leituras Essenciais para um Desenvolvedor de Qualidade      {" "}
      </h3>
           {" "}
      <div className="row g-4 justify-content-center">
               {" "}
        {livros.map(
          (
            livro,
            index // Comentário ajustado para o formato correto de bloco JSX:
          ) => (
            <div key={index} className="col-12 col-lg-8">
                          <LivroCard {...livro} />         {" "}
            </div>
          )
        )}
             {" "}
      </div>
               {" "}
    </div>
  );
}
