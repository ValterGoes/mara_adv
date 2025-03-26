import PropTypes from "prop-types";


const CardAtuacao = ({ titulo, descricao, lista, bgImageClass }) => {
  return (
    <div
      className={`relative p-6 bg-cover bg-center rounded-md shadow-md shadow-black transition transform hover:scale-105 h-[40rem] overflow-hidden ${bgImageClass}`}
    >
      {/* Camada de opacidade para melhor contraste */}
      <div
        className="absolute inset-0 bg-black opacity-70"
        aria-hidden="true"
      ></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center text-white flex flex-col justify-center h-full">
        <h3 className="text-4xl font-RobotoSans mb-2">{titulo}</h3>
        <p className="text-2xl my-20">{descricao}</p>
        <ul className="text-xl">
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CardAtuacao.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  lista: PropTypes.arrayOf(PropTypes.string).isRequired,
  bgImageClass: PropTypes.string.isRequired,
};

const Atuacao = () => {
  return (
    <section
      id="areasdeatuação"
      className="flex flex-col py-20 px-6 bg-transparent"
    >
      {/* Título Principal */}
      <h2 className="text-4xl md:text-5xl font-GaramondSerif text-center text-black">
        Áreas de Atuação
      </h2>

      {/* Grid de Áreas de Atuação */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        <CardAtuacao
          titulo="Direito Previdenciário"
          descricao="Atuação completa em processos previdenciários."
          lista={[
            "Aposentadoria",
            "Auxílio-doença",
            "Pensão por morte",
            "Revisão de benefícios",
            "LOAS (idoso / deficiente)",
            "Reabilitação profissional",
            "Benefícios por incapacidade",
            "Entre outros",
          ]}
          bgImageClass="bg-card1"
        />

        <CardAtuacao
          titulo="Direito Cível"
          descricao="Serviços de direito civil, incluindo contratos e disputas familiares."
          lista={[
            "Contratos",
            "Disputas familiares",
            "Reparação de danos",
            "Responsabilidade civil",
            "Entre outros",
          ]}
          bgImageClass="bg-card2"
        />

        <CardAtuacao
          titulo="Direito Trabalhista"
          descricao="Apoio e defesa em causas trabalhistas."
          lista={[
            "FGTS",
            "Assédio Moral",
            "Verbas Trabalhistas",
            "Rescisão de Contrato",
            "Acidente de Trabalho",
            "Entre outros",
          ]}
          bgImageClass="bg-card3"
        />
      </div>

      {/* Seção de Missão, Visão e Valores */}
      <div className="mt-24">
        <div className="font-GaramondSerif text-black font-normal text-4xl flex flex-col md:flex-row p-4 gap-4 items-center justify-center xl:text-5xl">
          <p>Ética,</p>
          <p>Transparência</p>
          <p>e Responsabilidade</p>
        </div>
      </div>
    </section>
  );
};

export { Atuacao };