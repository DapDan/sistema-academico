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
              <div className="user-info">Danilo Alexandre<br/>
              <span>Administrador</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
