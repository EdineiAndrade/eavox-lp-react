import { Link } from "react-router-dom";

export default function Tecnologias() {
  const tecnologias = [
    {
      categoria: "Frontend",
      items: [
        {
          nome: "JavaScript (ES6+)",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          cor: "#F7DF1E"
        },
        {
          nome: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          cor: "#61DAFB"
        },
        {
          nome: "Vite",
          icon: "https://vitejs.dev/logo.svg",
          cor: "#646CFF"
        },
        {
          nome: "Tailwind CSS",
          icon: "https://img.icons8.com/color/48/tailwindcss.png",
          cor: "#1572B6"
        },
        {
          nome: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          cor: "#E34F26"
        }
      ]
    },
    {
      categoria: "Backend & Linguagens",
      items: [
        {
          nome: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          cor: "#3776AB"
        },
        {
          nome: "APIs REST",
          icon: "https://cdn-icons-png.flaticon.com/512/2164/2164832.png",
          cor: "#FF6C37"
        }
      ]
    },
    {
      categoria: "Automação & Integração",
      items: [
        {
          nome: "n8n",
          icon: "https://n8n.io/favicon.ico",
          cor: "#EA4B71"
        },
        {
          nome: "Make",
          icon: "https://images.ctfassets.net/un655fb9wln6/1k5wBPhbu5kXiaYlFWgEJE/b590772959bd510e64cf230ef37bba3e/Make-Logo-RGB.svg",
          cor: "#6B4FBB"
        },
        {
          nome: "Web Scraping",
          icon: "https://img.icons8.com/color/48/web-scraper.png",
          cor: "#FFA500"
        }
      ]
    },
    {
      categoria: "Banco de Dados",
      items: [
        {
          nome: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          cor: "#336791"
        },
        {
          nome: "Supabase",
          icon: "https://img.icons8.com/color/48/supabase.png",
          cor: "#336791"
        },
        {
          nome: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          cor: "#4479A1"
        },
        {
          nome: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          cor: "#47A248"
        }
      ]
    },
    {
      categoria: "DevOps & Ferramentas",
      items: [
        {
          nome: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          cor: "#2496ED"
        },
        {
          nome: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          cor: "#F05032"
        },
        {
          nome: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          cor: "#181717"
        }
      ]
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-20 max-w-7xl mx-auto">
      {/* Título */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 text-center">
        Tecnologias
      </h1>

      {/* Descrição */}
      <p className="text-base sm:text-lg md:text-xl tracking-wide text-gray-300 text-center mb-16 max-w-3xl leading-relaxed">
        Na EAVOX, utilizamos as tecnologias mais modernas e eficientes para criar 
        soluções digitais robustas, escaláveis e inteligentes.
      </p>

      {/* Grid de Categorias */}
      <div className="w-full space-y-12 mb-16">
        {tecnologias.map((categoria, idx) => (
          <div key={idx} className="space-y-6">
            {/* Título da Categoria */}
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-400 text-center">
              {categoria.categoria}
            </h2>

            {/* Grid de Tecnologias */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {categoria.items.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 flex flex-col items-center justify-center gap-4 hover:border-orange-500/50 hover:transform hover:scale-105 transition-all duration-300 group"
                >
                  {/* Ícone */}
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.nome}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                      style={{ filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.3))' }}
                    />
                  </div>

                  {/* Nome */}
                  <span className="text-white font-medium text-center text-sm">
                    {tech.nome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divisor */}
      <div className="w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px mb-12"></div>

      {/* Seção Extra - Diferenciais */}
      <div className="w-full mb-16 bg-gray-800/30 p-10 rounded-2xl border border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">
          Nossa Abordagem Tecnológica
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="text-4xl">⚡</div>
            <h3 className="text-xl font-semibold text-orange-400">Performance</h3>
            <p className="text-gray-400 text-sm">
              Aplicações rápidas e otimizadas para melhor experiência do usuário
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="text-4xl">🔧</div>
            <h3 className="text-xl font-semibold text-orange-400">Escalabilidade</h3>
            <p className="text-gray-400 text-sm">
              Soluções que crescem junto com seu negócio
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="text-4xl">🤖</div>
            <h3 className="text-xl font-semibold text-orange-400">Automação</h3>
            <p className="text-gray-400 text-sm">
              Processos inteligentes que economizam tempo e recursos
            </p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="text-center bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-10 rounded-2xl border border-orange-500/50">
        <p className="text-xl sm:text-2xl text-gray-300 mb-2">
          Pronto para transformar sua presença digital?
        </p>
        <p className="text-base text-gray-400 mb-8">
          Vamos construir algo incrível juntos usando as melhores tecnologias do mercado.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/projetos" 
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all"
          >
            Ver Projetos
          </Link>
          <Link 
            to="/contato" 
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </section>
  );
}