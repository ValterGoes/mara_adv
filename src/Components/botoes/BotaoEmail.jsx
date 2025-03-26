import PropTypes from "prop-types";
import { MdOutlineEmail } from "react-icons/md";

const BotaoEmail = ({ title = "Enviar e-mail" }) => {
  const email = "maragonesa.adv@gmail.com";

  return (
    <a
      href={`mailto:${email}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 min-w-80 max-w-80 justify-center px-4 py-3 text-lg font-semibold border-2 rounded-lg shadow-md bg-[#0000ff] text-white border-[#0000ff] hover:bg-[#0000cc] hover:border-[#0000cc] hover:text-white transition-colors duration-300 hover:scale-95`}
      aria-label="Tire suas dúvidas em nosso e-mail"
    >
      <MdOutlineEmail className="w-6 h-6" />
      {title}
    </a>
  );
};

//Validação de props usando PropTypes
    BotaoEmail.propTypes = {
        title: PropTypes.string, // Define que 'title' deve ser uma string
    };

export { BotaoEmail };
