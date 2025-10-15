import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const HomePage = React.lazy(() => import("./pages/Home"));
const Projects = React.lazy(() => import("./pages/Projects"));
const AboutMe = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="*"
            element={
              <main
                style={{
                  textAlign: "center",
                  padding: "50px",
                }}
              >
                <h1>404 - Página Não Encontrada</h1>
                <p>Desculpe, a página que você está procurando não existe.</p>
              </main>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
