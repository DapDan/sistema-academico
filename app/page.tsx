import Image from "next/image";
import Link from "next/link";
import "@/styles/home.css"
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sistema Acadêmico - Página Inicial',
  description: '',
};

export default function Home() {
  return (
    <html>
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link href="/" className="logo-button">
              <span>A+</span>
              <strong>cademic</strong>
            </Link>
          </div>

          <nav>
            <ul>
              <li>
                <a href="/">Início</a>
              </li>

              <li className="has-dropdown">
                <a href="/ensino">Ensino</a>

                <div className="dropdown">
                  <a href="/minhas-disciplinas">Minhas Disciplinas</a>
                  <a href="/minhas-notas">Minhas Notas</a>
                  <a href="/meus-indices-academicos">Meus Índices Acadêmicos</a>
                  <a href="/meu-historico-academico">Meu Histórico Acadêmico</a>

                  <div className="dropdown-divider" />

                  <div className="dropdown-submenu">
                    <span className="submenu-title">Matrícula</span>
                    <a href="/realizar-matricula">Realizar Matrícula</a>
                    <a href="/comprovante-matricula">Comprovante</a>
                    <a href="/plano-matricula">Plano de Matrícula</a>
                  </div>
                </div>
              </li>

              <li className="has-dropdown">
                <a href="/pesquisa">Pesquisa</a>
                <div className="dropdown">
                  <a href="/projetos-pesquisa">Projetos de Pesquisa</a>
                  <a href="/publicacoes">Publicações</a>
                  <a href="/grupos-pesquisa">Grupos de Pesquisa</a>
                </div>
              </li>

              <li className="has-dropdown">
                <a href="/extensao">Extensão</a>
                <div className="dropdown">
                  <a href="/projetos-extensao">Projetos de Extensão</a>
                  <a href="/atividades-extensao">Atividades de Extensão</a>
                  <a href="/eventos-extensao">Eventos de Extensão</a>
                  <a href="/meus-relatorios">Meus Relatórios</a>
                  <a href="/certificados">Certificados e Declarações</a>
                </div>
              </li>

              <li className="has-dropdown">
                <a href="/biblioteca">Biblioteca</a>
                <div className="dropdown">
                  <a href="/catalogo-online">Catálogo Online</a>

                  <div className="dropdown-divider" />

                  <div className="dropdown-submenu">
                    <span className="submenu-title">Empréstimos</span>
                    <a href="/visualizar-emprestimos">Visualizar Empréstimos</a>
                    <a href="/renovar-emprestimos">Renovar Empréstimos</a>
                    <a href="/comprovante-emprestimos">Comprovante de Empréstimos</a>
                    <a href="/plano-emprestimos">Agendar Empréstimo</a>
                  </div>
                </div>
              </li>

              <li className="has-dropdown">
                <a href="/outros">Estágios</a>
                <div className="dropdown">
                  <a href="/noticias">Mural de Vagas</a>
                  <a href="/eventos">Gerenciar Estágios</a>
                </div>
              </li>

              <li className="has-dropdown">
                <a href="/outros">Outros</a>
                <div className="dropdown">
                  <div className="dropdown-submenu">
                    <span className="submenu-title">Coordenação de Curso</span>
                    <a href="/atendimento-aluno">Atendimento ao Aluno</a>
                    <a href="/pagina-curso">Página do Curso</a>
                  </div>

                  <div className="dropdown-divider" />

                  <a href="/noticias">Notícias</a>
                  <a href="/eventos">Eventos</a>
                  <a href="/eventos">Relatório de Carga Horária do Discente</a>
                </div>
              </li>
            </ul>
          </nav>

          <div className="actions">
            <div className="user">
              <div className="avatar">DA</div>
              <div className="user-info">Danilo Alexandre<br />
                <span>Administrador</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        {/* Boas-vindas */}
        <section className="bem-vindo">
          <h1>Bem-vindo, Danilo 👋</h1>
          <p>Curso: Ciência da Computação · Período 2025/1</p>
        </section>

        {/* Cards resumo */}
        <section className="overview-cards">
          <div className="card">
            <span>Disciplinas Ativas</span>
            <h3>5</h3>
          </div>
          <div className="card">
            <span>CR</span>
            <h3>0</h3>
          </div>
          <div className="card">
            <span>Curso Concluído</span>
            <h3>0%</h3>
          </div>
          <div className="card">
            <span>Pendências</span>
            <h3>1</h3>
          </div>
        </section>

        {/* Grid central */}
        <section className="dashboard-grid">
          {/* Disciplinas */}
          <div className="disciplinas-atuais">
            <h2>Disciplinas do Semestre</h2>

            <div className="disciplina">
              <span>Engenharia de Software</span>
              <span className="ok">OK</span>
            </div>

            <div className="disciplina">
              <span>Fundamentos de Programação</span>
              <span className="ok">OK</span>
            </div>

            <div className="disciplina">
              <span>Arquitetura de Computadores I</span>
              <span className="alerta">Prova em 5 dias</span>
            </div>

            <div className="disciplina">
              <span>Cálculo I</span>
              <span className="ok">OK</span>
            </div>

            <div className="disciplina">
              <span>Matemática Discreta</span>
              <span className="ok">OK</span>
            </div>
          </div>

          {/* Prazos */}
          <div className="deadlines">
            <h2>Próximos Prazos</h2>

            <div className="deadline">
              <strong>Prova de Arquitetura de Computadores I</strong>
              <span>20/03/2025</span>
            </div>

            <div className="deadline">
              <strong>Entrega Trabalho Matemática Discreta</strong>
              <span>28/03/2025</span>
            </div>
          </div>
        </section>

        {/* Avisos */}
        <section className="notices">
          <h2>Avisos</h2>
          <div className="notice">Ajuste no calendário acadêmico</div>
          <div className="notice">Publicado edital de iniciação científica</div>
        </section>
      </main>

    </html>
  );
}
