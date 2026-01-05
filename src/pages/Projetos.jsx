import { Link } from "react-router-dom";

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: "Pipeline de Dados com API & IA para Criptoativos",
      descricao: "Este projeto implementa um pipeline inteligente para coleta, processamento, análise e visualização de dados do mercado de criptomoedas, integrando Inteligência Artificial e dashboards interativos em tempo real.",
      tecnologias: ["Python", "Streamlit", "API", "IA", "Dashboard"],
      imagem: "/dash-cripto.png",
      video: null,
      github: "https://github.com/seu-usuario/crypto-pipeline",
      demo: null,
      emoji: ""
    },
    {
      id: 2,
      titulo: "EA Tech Solution - Automações Inteligentes",
      descricao: "Solução especializada em automação de processos com Python, IA e integrações avançadas para transformar operações empresariais.",
      tecnologias: ["HTML5", "CSS3", "JavaScript ES6+", "Python", "IA"],
      imagem: "/projeto-eatech.png",
      video: "/videos/site-ea-tech-solution.mp4", // ← Vídeo adicionado
      github: "",
      demo: "https://site-ea-tech-solution.vercel.app",
      emoji: "⚡"
    },
    {
      id: 3,
      titulo: "Interação com Bancos de Dados usando IA!",
      descricao: "Projeto Agente de IA para PostgreSQL, que transforma perguntas em linguagem natural em consultas SQL precisas — democratizando o acesso a bancos de dados!",
      tecnologias: ["Python", "PostgreSQL", "IA", "Automação"],
      imagem: "",
      video: "/videos/dio-bank.mp4", // ← Vídeo adicionado
      github: "https://github.com/EdineiAndrade/aula_dio_agentes_sq",
      demo: "https://auladioagentessq-wghwgk7esvbt6jm4ti8dt7.streamlit.app/",
      emoji: "🔍"
    },
    {
      id: 4,
      titulo: "Automação n8n no Instagram",
      descricao: "Automação completa para Instagram que gerencia respostas em comentários, atendimento por DM e publicação de conteúdos. Aumenta produtividade, permite foco em estratégia e mantém presença profissional constante.",
      tecnologias: ["n8n", "Instagram API", "Automação", "Webhooks"],
      imagem: "/postagem-insta.jpg",
      video: "",
      github: null,
      demo: null,
      emoji: "📱"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-20 max-w-7xl mx-auto">
      {/* Título */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 text-center">
        Projetos
      </h1>

      {/* Descrição */}
      <p className="text-base sm:text-lg md:text-xl tracking-wide text-gray-300 text-center mb-16 max-w-3xl leading-relaxed">
        Aqui estão alguns projetos que desenvolvemos, com habilidades em desenvolvimento web, 
        automação e criação de interfaces modernas.
      </p>

      {/* Grid de Projetos - 2 colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-16">
        {projetos.map((projeto) => (
          <div 
            key={projeto.id}
            className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            {/* Imagem/Vídeo do Projeto */}
            <div className="relative h-64 bg-gray-900/50 overflow-hidden group">
              {/* Se tiver vídeo, mostra vídeo, senão mostra imagem */}
              {projeto.video ? (
                <video 
                  src={projeto.video} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img 
                  src={projeto.imagem} 
                  alt={projeto.titulo}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              <span className="absolute top-4 left-4 text-5xl">{projeto.emoji}</span>
            </div>

            {/* Conteúdo */}
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {projeto.titulo}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                {projeto.descricao}
              </p>

              {/* Tecnologias */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projeto.tecnologias.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full border border-orange-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botões */}
              <div className="flex gap-4">
                <a 
                  href={projeto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-center font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>

                {projeto.demo && (
                  <a 
                    href={projeto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-center font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divisor */}
      <div className="w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px mb-12"></div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-300 text-lg mb-6">
          Quer ver mais projetos ou discutir uma ideia?
        </p>
        <Link 
          to="/contato" 
          className="inline-block px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30"
        >
          Entre em Contato
        </Link>
      </div>
    </section>
  );
}