
import {
  Advogados,
  Atuacao,
  Contatos,
  Banner,
  Depoimentos,
  // Localizacao,
  MyNavbar,
  Rodape,
  // Whatsapp,
} from "../../Components";

import Marmol from "../../Assets/background/Marmol.jpeg";


const Inicial = () => {
  return (
    <>
      {/* remover o scroll lateral */}
      <div
        id="Home"
        style={{ backgroundImage: `url(${Marmol})` }}
        className="bg-cover fixed text-gray-100 w-full h-full overflow-x-hidden overscroll-none"
      >
        {/* Navbar */}
        <MyNavbar />
        {/* Seção Banner */}
        <Banner />
        {/* Seção de Áreas de Atuação */}
        <Atuacao />
        {/* Seção de Advogados */}
        <Advogados />
        {/* Seção de Depoimentos */}
        <Depoimentos />
        {/* Seção de Contato */}
        <Contatos />
        {/* Seção de Localização */}
        {/* <Localizacao /> */}
        {/* Seção do Footer*/}
        <Rodape />
      </div>

    </>
  );
};

export { Inicial };
