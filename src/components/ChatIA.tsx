import { useState } from 'react';
import { askGemini } from '../../geminiService'; // Ajuste o caminho se necessário

export function ChatIA() {
  const [mensagem, setMensagem] = useState('');
  const [historico, setHistorico] = useState<{role: 'user' | 'ia', text: string}[]>([]);
  const [carregando, setCarregando] = useState(false);

  async function enviarMensagem(e: React.FormEvent) {
    e.preventDefault();
    if (!mensagem.trim()) return;

    const textoUsuario = mensagem;
    setMensagem('');
    setHistorico(prev => [...prev, { role: 'user', text: textoUsuario }]);
    setCarregando(true);

    try {
      const respostaIA = await askGemini(textoUsuario);
      setHistorico(prev => [...prev, { role: 'ia', text: respostaIA }]);
    } catch (error) {
      console.error(error);
      setHistorico(prev => [...prev, { role: 'ia', text: "Ocorreu um erro ao comunicar com a IA." }]);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto p-4 border border-gray-300 rounded-lg shadow-sm">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 min-h-[300px]">
        {historico.map((msg, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-lg max-w-[80%] ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white ml-auto' 
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {carregando && (
          <div className="p-3 rounded-lg bg-gray-200 text-gray-800 max-w-[80%]">
            Pensando...
          </div>
        )}
      </div>

      <form onSubmit={enviarMensagem} className="flex gap-2">
        <input 
          type="text" 
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
          disabled={carregando}
          placeholder="Digite sua mensagem para a Gemini..."
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button 
          type="submit" 
          disabled={carregando || !mensagem.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
