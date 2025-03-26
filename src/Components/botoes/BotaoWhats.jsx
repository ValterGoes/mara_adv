import PropTypes from "prop-types";
import { FaWhatsapp } from "react-icons/fa";

const BotaoWhats = ({ title = "WhatsApp" }) => {
  const whatsappNumber = "+5551985655245";
  const message = encodeURIComponent("Olá Dra. Maragonesa eu gostaria de mais informações sobre seus serviços!");

  return (
    <a
      href={`whatsapp://send?phone=${whatsappNumber}&text=${message}`}
      target="_self"
      rel="noopener noreferrer"
      className="flex items-center gap-3 min-w-80 max-w-100 justify-center px-4 py-3 text-lg font-semibold text-white bg-[#25D366] border-[#25d466] border-2 rounded-lg shadow-md hover:bg-green-600 hover:border-green-600 hover:scale-95 transition-colors duration-300"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" aria-hidden="true" />
      {title}
    </a>
  );
};

// Validação de props usando PropTypes
BotaoWhats.propTypes = {
  title: PropTypes.string, // Define que 'title' deve ser uma string
};

export { BotaoWhats };
