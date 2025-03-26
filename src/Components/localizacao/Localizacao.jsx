
const Localizacao = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-[50rem]">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5828.868042373682!2d-51.180278894624934!3d-30.024175265508312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519778019f3bc7b%3A0xb679e241071b1fac!2sR%20Anita%20Garibaldi%2C%201741%20-%20Mont&#39;Serrat%2C%20Porto%20Alegre%20-%20RS%2C%2090480-201!5e1!3m2!1spt-BR!2sbr!4v1730889649086!5m2!1spt-BR!2sbr"
        className="absolute inset-0 w-full h-[50rem] object-cover"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        loading="lazy"
      ></iframe>

      <div className="absolute inset-0 bg-black opacity-60 h-full"></div>

      <div className="relative z-10 w-full ">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-6">
          Nossa Localização
        </h2>
        <p className="text-2xl text-center mb-4">
          Visite-nos em nosso escritório para conhecer mais sobre nossos
          serviços.
        </p>
        <div className="flex justify-center w-full h-full">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5820.376229748807!2d-51.18094812285627!3d-30.024152774933988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519778019f3bc7b%3A0xb679e241071b1fac!2sR%20Anita%20Garibaldi%2C%201741%20-%20Mont&#39;Serrat%2C%20Porto%20Alegre%20-%20RS%2C%2090480-201!5e1!3m2!1spt-BR!2sbr!4v1730323923840!5m2!1spt-BR!2sbr"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export { Localizacao };
