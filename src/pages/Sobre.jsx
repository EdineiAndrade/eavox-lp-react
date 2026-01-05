import { Link } from 'react-router-dom';
export default function Sobre() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12 max-w-5xl mx-auto">
  {/* Título */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 text-center">
    Sobre a EAVOX
  </h1>

  {/* Imagem */}
  <div className="mb-10">
    <img 
      src="/equipe.jpeg" 
      alt="EAVOX - Presença Digital Inteligente" 
      className="w-100 h-50 object-contain"
    />
  </div>

  {/* Introdução */}
  <div className="space-y-6 text-center mb-12">
    <p className="text-base sm:text-lg md:text-xl tracking-wide text-gray-300 leading-relaxed">
      A EAVOX nasce de uma necessidade real do mercado: <strong className="text-white">empresas precisam estar onde seus clientes estão</strong>. E hoje, isso significa existir digitalmente com presença, estratégia e inteligência.
    </p>

    <p className="text-base sm:text-lg tracking-wide text-gray-400 leading-relaxed">
      Não se trata apenas de ter redes sociais, mas de construir uma presença que:
    </p>
  </div>

  {/* Lista de benefícios */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 w-full">
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
      <h3 className="text-orange-400 font-semibold text-lg mb-2">✓ Te encontra no Google</h3>
      <p className="text-gray-400 text-sm">Visibilidade quando o cliente procura por você</p>
    </div>

    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
      <h3 className="text-orange-400 font-semibold text-lg mb-2">✓ Atende no WhatsApp com rapidez</h3>
      <p className="text-gray-400 text-sm">Respostas instantâneas 24/7</p>
    </div>

    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
      <h3 className="text-orange-400 font-semibold text-lg mb-2">✓ Transmite confiança</h3>
      <p className="text-gray-400 text-sm">Credibilidade e profissionalismo</p>
    </div>

    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
      <h3 className="text-orange-400 font-semibold text-lg mb-2">✓ Gera oportunidades reais</h3>
      <p className="text-gray-400 text-sm">Leads qualificados e conversões</p>
    </div>
  </div>

  {/* O que empresas competitivas terão */}
  <div className="w-full mb-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-orange-400">
      O que as empresas competitivas vão ter em 2026
    </h2>

    <div className="space-y-8">
      <div className="border-l-4 border-orange-500 pl-6">
        <h3 className="text-xl font-semibold text-white mb-2">Presença digital profissional</h3>
        <p className="text-gray-400">Um endereço online que transmite credibilidade e posicionamento.</p>
      </div>

      <div className="border-l-4 border-orange-500 pl-6">
        <h3 className="text-xl font-semibold text-white mb-2">Visibilidade nas buscas (Google)</h3>
        <p className="text-gray-400">Se o cliente não encontra você, ele encontra o seu concorrente.</p>
      </div>

      <div className="border-l-4 border-orange-500 pl-6">
        <h3 className="text-xl font-semibold text-white mb-2">Atendimento inteligente com IA</h3>
        <p className="text-gray-400">Assistentes que respondem dúvidas, qualificam leads e liberam o time para fechar negócios.</p>
      </div>

      <div className="border-l-4 border-orange-500 pl-6">
        <h3 className="text-xl font-semibold text-white mb-2">Marketing estratégico que vai até o cliente</h3>
        <p className="text-gray-400">Aparecer para as pessoas certas, no momento certo, com a mensagem certa.</p>
      </div>

      <div className="border-l-4 border-orange-500 pl-6">
        <h3 className="text-xl font-semibold text-white mb-2">Marca forte e memorável</h3>
        <p className="text-gray-400">Ser reconhecido, lembrado e escolhido.</p>
      </div>
    </div>
  </div>

  {/* Divisor */}
  <div className="w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px mb-16"></div>

  {/* O que muda */}
  <div className="text-center mb-16 bg-gray-800/30 p-10 rounded-2xl border border-gray-700">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
      O que muda em 2026
    </h2>
    <p className="text-lg text-gray-300 mb-4">
      As empresas vão se dividir entre:
    </p>
    <p className="text-xl sm:text-2xl font-semibold text-gray-400 mb-2">
      as que <span className="text-gray-500">apenas existem</span>
    </p>
    <p className="text-xl sm:text-2xl font-semibold mb-6">
      e as que são <span className="text-orange-400">encontradas, lembradas e escolhidas</span>
    </p>
    <p className="text-base text-gray-400 italic">
      A diferença está em como você se posiciona no digital.
    </p>
  </div>

  {/* A EAVOX existe para isso */}
  <div className="w-full mb-16">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-orange-400">
      A EAVOX existe para isso
    </h2>
    <p className="text-center text-gray-300 text-lg mb-10">
      Para transformar presença digital em crescimento real através de:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-6 rounded-lg border border-orange-500/30">
        <p className="text-white font-medium">Sites profissionais e landing pages</p>
      </div>
      
      <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-6 rounded-lg border border-orange-500/30">
        <p className="text-white font-medium">Automação e atendimento inteligente</p>
      </div>
      
      <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-6 rounded-lg border border-orange-500/30">
        <p className="text-white font-medium">IA aplicada ao negócio</p>
      </div>
      
      <div className="bg-gradient-to-br from-orange-500/10 to-transparent p-6 rounded-lg border border-orange-500/30">
        <p className="text-white font-medium">Marketing e posicionamento digital</p>
      </div>
    </div>
  </div>

  {/* CTA Final */}
  <div className="text-center bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-10 rounded-2xl border border-orange-500/50">
    <p className="text-xl sm:text-2xl text-gray-300 mb-2">
      Se 2025 foi o ano de entender a importância,
    </p>
    <p className="text-2xl sm:text-3xl font-bold text-white mb-8">
      2026 é o ano de agir com inteligência.
    </p>
    
    <Link 
      to="/contato" 
      className="inline-block px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30"
    >
      Vamos construir isso juntos?
    </Link>
  </div>
</section>
  )
}
