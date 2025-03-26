// import { Typography } from "@material-tailwind/react";

import { BotaoWhats } from "../botoes";

import { BotaoEmail } from "../botoes/BotaoEmail";

const Banner = () => {
  return (
    <div className="relative h-[49rem] md:[40rem] w-full md:mt-20 md:mt-42 bg-transparent">
      
      {/* Imagem de Fundo */}
      <img
        alt="imagem ao longe da cidade de Porto Alegre"
        className="w-full h-full object-cover grayscale"
        src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Porto601737_89.jpg"
      />

      {/* Texto */}
      <div className="md:hidden absolute inset-0 flex flex-col mt-[15rem] items-center text-white">
        <h1 className="font-RobotoSans text-4xl md:text-6xl text-center">
          Maragonesa Teixeira Advocacia
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-center">
          Advocacia previdenciária e consultoria jurídica
        </h2>
      </div>

      {/* Botões */}
      <div className="absolute inset-0  bg-black/0 px-4 md:px-16">
        <div className="w-full h-full flex flex-col justify-end items-center md:items-center md:pb-10">
          <div className="flex flex-col md:flex-row items-center gap-4 m-8 md:gap-8">
            <BotaoWhats title="Conversar com a Advogada" />
            <BotaoEmail />
          </div>
        </div>
      </div>

    </div>
  );
};

export { Banner };
