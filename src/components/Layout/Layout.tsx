import Navbar from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout(
  props:
    | any & {
        //   content: ReactNode;
        header1: string;
        header2?: string;
      }
  //   content: ReactNode
) {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />
      <Header header1={props.header1} header2={props.header2} />

      {/* MAIN: A chave para a centralização vertical e crescimento */}
      <main className="flex-grow-1 d-flex justify-content-center align-items-center">
        {/* CONTAINER: Limita a largura. O 'w-100' é necessário aqui para garantir que 
           o container ocupe 100% da largura disponível dentro do 'main' centralizado. */}
        <div className="container py-5 w-100">
          {/* Adicionei uma div para restringir a largura do bloco e centralizá-lo (opcional, mas bom para grandes telas) */}
          <div className="col-lg-9 mx-auto">{props.children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
