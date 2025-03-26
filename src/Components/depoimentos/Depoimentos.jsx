const Depoimentos = () => {
    return (
      <section className="p-8 py-24 bg-trasparent">
        <h2 className="text-5xl  text-black font-serif text-center mb-6">
          Depoimento de nossos clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="p-6 bg-white rounded-lg shadow-2xl border-l-gray-300 border-l-4 border-b-gray-300 border-b-4">
            <p className="text-gray-600 italic">
              &quot;Uma empresa comprometida com a excelência e a transparência.
              Fui atendido com profissionalismo e clareza em todas as
              etapas.&quot;
            </p>
            <p className="text-gray-800 font-semibold mt-4">— Carlos Mendes</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-2xl border-l-gray-300 border-l-4 border-b-gray-300 border-b-4">
            <p className="text-gray-600 italic">
              &quot;Equipe altamente qualificada e ética. Sempre prestativos e
              focados em oferecer a melhor solução para o cliente.&quot;
            </p>
            <p className="text-gray-800 font-semibold mt-4">
              — Fernanda Oliveira
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-2xl border-l-gray-300 border-l-4 border-b-gray-300 border-b-4">
            <p className="text-gray-600 italic">
              &quot;Senti total confiança desde o primeiro contato. A
              responsabilidade e o comprometimento da equipe me deram segurança
              para seguir em frente.&quot;
            </p>
            <p className="text-gray-800 font-semibold mt-4">
              — Ricardo Almeida
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-2xl border-l-gray-300 border-l-4 border-b-gray-300 border-b-4">
            <p className="text-gray-600 italic">
              &quot;Atendimento impecável e total transparência. Profissionais
              que realmente se preocupam com o cliente e entregam resultados com
              qualidade.&quot;
            </p>
            <p className="text-gray-800 font-semibold mt-4">
              — Juliana Martins
            </p>
          </div>
        </div>
      </section>
    );
}

export { Depoimentos };