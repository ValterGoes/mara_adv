import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const whatsappNumber = "+5551999361247";
  const message = encodeURIComponent(
    "Olá Dra. Maragonesa eu gostaria de mais informações sobre seus serviços!"
  );

  return (
    <a
      href={`whatsapp://send?phone=${whatsappNumber}&text=${message}`}
      className="fixed bottom-8 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem]"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp className="w-10 h-10 " />
    </a>
  );
};

export { Whatsapp };
