import linkedin from "../../../public/Assets/icon/linkedin.png";
import instagram from "../../../public/Assets/icon/instagram.png";
import whatsapp from "../../../public/Assets/icon/whatsapp.png";


const Rodape = () => {

  const whatsappNumber = "+5551985655245";
  const message = encodeURIComponent(
    "Olá Dra. Maragonesa eu gostaria de mais informações sobre seus serviços!"
  );

  return (
    <footer id="Redes" className="bg-[#f4f4f4] text-black">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <ul className="font-serif text-xl mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12  text-gray-900">
          <li>
            <a className=" text-gray-900" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="text-gray-900" href="#" target="_self">
              Trabalhe Conosco
            </a>
          </li>

          <li>
            <a className="text-gray-900" href="#Contatos">
              Contatos
            </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-16 md:gap-18">
          <li>
            <a
              href={`whatsapp://send?phone=${whatsappNumber}&text=${message}`}
              rel="noreferrer"
              target="_blank"
              className=""
            >
              <span className="sr-only">WhatsApp</span>
              <img src={whatsapp} alt="Whatsapp" className="w-8 h-8" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/maragonesa?igsh=MTZtY2lxbjlzNnh4MQ%3D%3D&utm_source=qr"
              rel="noreferrer"
              target="_blank"
              className=" text-gray-900 dark:text-white"
            >
              <span className="sr-only">Instagram</span>
              <img src={instagram} alt="Instagram" className="w-8 h-8" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/maragonesa-teixeira"
              rel="noreferrer"
              target="_blank"
              className=""
            >
              <span className="sr-only">Linkedin</span>
              <img src={linkedin} alt="Linkedin" className="w-8 h-8" />
            </a>
          </li>
        </ul>
        <div className="text-lg flex items-center justify-center mt-10 font-serif font-light">
          <p>
            <strong>
              &copy; todos os diretos reservados - {new Date().getFullYear()}
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Rodape };