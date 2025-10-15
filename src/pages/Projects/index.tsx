// Projetos.tsx (Página principal de Projetos)

// IMPORTAÇÃO DE LAYOUT E CARD:
import Layout from "../../components/Layout/Layout"; // Ajuste o caminho do seu Layout
import ProjectCard, {
  type ProjectCardProps,
} from "../../components/ProjectCard"; // Ajuste o caminho do seu ProjectCard

// Importações de Imagens dos Projetos:
// Assuma que você terá imagens (ex: p1.jpg, p2.jpg) em seu diretório de assets
// import projeto1Img from "../assets/projetos/p1.jpg";
import liveImg from "../../assets/projetos/liveStream.png";
import conferenceImg from "../../assets/projetos/conference.png";
import appQumi from "../../assets/projetos/appQuimico.png";

// DADOS DOS PROJETOS (Exemplo)
const projetosData: ProjectCardProps[] = [
  {
    nome: "Conferência para supermecado",
    descricao:
      "Conferir produtos e administrar usuarios, através de um software, os funcionarios pega o pdf de produtos e envia e o software facilita a conferência da chegada dos produtos, só pode ser cadastrado pelo link do administrador",
    imagemPath: conferenceImg,
    githubLink: "https://github.com/Valdir2373/frontEnd-Conference",
    projectLink: "https://front-end-conference.vercel.app",
    tecnologias: ["React", "NestJs", "Jest", "Redis", "MongoDB"],
  },
  {
    nome: "Monitoramento de Atividade",
    descricao:
      "Um executavel em Go que usa API nativa do windows para capturar tela e envia-lá em uma conexão WebSocket, fazendo uma especie de transmissão. OBSERVAÇÃO: O servidor está no serviço Render de deploy gratuito, o que causa demora na primeira visita ao site",
    imagemPath: liveImg,
    githubLink: "https://github.com/Valdir2373/stream-server",
    projectLink: "https://stream-server-vava.onrender.com/index.html",
    tecnologias: ["Express", "WS", "Docker", "Go", "Typescript"],
  },
  {
    nome: "Aplicativo Quimico",
    descricao:
      "Aplicativo para ajudar nos estudos de uma amiga, estudante de engenharia química, contendo formulas, tabela periodica e equações",
    imagemPath: appQumi,
    githubLink: "https://github.com/Valdir2373/sa_app",
    projectLink: "https://www.mediafire.com/file/dqa4dzzd966b27p/base.apk/file",
    tecnologias: ["React native"],
  },
];

export default function Projetos() {
  return (
    // 1. Usando o Layout
    <Layout header1="Meus Projetos" header2="Fique avontade">
      <header className="text-center py-5">
        <h1 className="fw-light">Meus Projetos de Destaque</h1>
        <p className="lead text-muted">
          Aplicações com foco em arquitetura robusta e código limpo.
        </p>
      </header>

      <section className="container py-4">
        <div className="row g-4 justify-content-center">
          {projetosData.map((projeto, index) => (
            // 2. Usando Cards
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <ProjectCard {...projeto} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
