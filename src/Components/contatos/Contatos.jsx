
import { BotaoWhats, BotaoEmail, BotaoTelefone } from "../botoes";

const Contatos = () => {
  
    return (
      <section
        id="Contatos"
        className="pt-24 pb-8 lg:pt-36 flex flex-col justify-center bg-gray-100"
      >
        <div className="text-3xl flex items-center justify-center font-GaramondSerif  text-black p-4">
          <span className="hidden md:block">
            Precisando, nos chame a qualquer momento
          </span>
          <span className="block md:hidden text-2xl font-bold">Nos chame a qualquer momento</span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 p-10">
          <BotaoWhats title="WhatsApp" />

          <BotaoTelefone />

          <BotaoEmail title="E-mail" />
        </div>
      </section>
    );
};

export { Contatos };
