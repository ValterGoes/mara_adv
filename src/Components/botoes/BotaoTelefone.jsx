import PropTypes from "prop-types";
import { FiPhoneCall } from "react-icons/fi";


const BotaoTelefone = ({ title = "Telefone" }) => {
  const phoneNumber = "+51999361247";

  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`flex items-center gap-3 min-w-80 max-w-80 justify-center px-4 py-3 text-lg font-semibold border-2 rounded-lg shadow-md bg-white text-blue-600 border-blue-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300 hover:scale-95`}
    >
      <FiPhoneCall className="w-6 h-6" />
      {title}
    </a>
  );
};

//Validação de props usando PropTypes
BotaoTelefone.propTypes = {
  title: PropTypes.string, // Define que 'title' deve ser uma string
};

export { BotaoTelefone };
