import mara2 from "../../Assets/perfil/mara2.jpeg";
import { BotaoWhats } from "../botoes/BotaoWhats";

const Advogados = () => {
  return (
    <section
      id="Quemsomos"
      className="flex flex-col items-center py-16 md:py-32 bg-gray-50 gap-10"
    >

      <h2 className="text-5xl font-GaramondSerif text-center mb-10 text-black">
        Quem somos
      </h2>

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {[
          {
            nome: "Maragonesa Teixeira",
            descricao:
              "Maragonesa Teixeira é especialista em diversas áreas do Direito, oferecendo suporte jurídico personalizado para clientes em todo o país. Nosso escritório se destaca pelo compromisso com a ética, excelência e resultados positivos.",
            imagem: mara2,
            botao: "Conversar com a Dra. Mara",
            invertido: false,
          }
        ].map(({ nome, descricao, imagem, botao, invertido }, index) => (
          
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              invertido ? "lg:flex-row-reverse" : ""
            } lg:items-center lg:h-full`}
          >
            {/* Imagem */}
            <div className="relative z-10 flex justify-center lg:w-1/2 lg:py-16">
              <div
                className={`relative h-64 sm:h-80 lg:h-[28rem] w-full max-w-md lg:max-w-none`}
              >
                <img
                  alt={`Foto da advogada ${nome}`}
                  src={imagem}
                  className={`absolute inset-0 h-full w-full object-cover shadow-lg transition-transform duration-300 hover:scale-105 ${
                    invertido
                      ? "lg:rounded-r-lg lg:rounded-l-none"
                      : "lg:rounded-l-lg lg:rounded-r-none"
                  }`}
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div
              className={`relative flex flex-col justify-center w-[22rem] md:w-[28rem] bg-gray-200 rounded-b-lg lg:w-1/2 h-[28rem] px-6 sm:px-10 lg:px-16 ${
                invertido
                  ? "lg:rounded-l-lg lg:rounded-r-none"
                  : "lg:rounded-r-lg lg:rounded-l-none"
              }`}
            >
              <div className="flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-bold font-GaramondSerif text-center lg:text-left text-gray-800 mb-8">
                  {nome}
                </h2>

                <p className="text-gray-800 leading-relaxed text-justify mb-10">
                  {descricao}
                </p>

                <BotaoWhats title={botao} />
              </div>
            </div>
          </div>

        ))}

      </div>

    </section>
  );
};

export { Advogados };
