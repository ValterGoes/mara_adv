/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card1': "url('https://www.gov.br/previdencia/pt-br/outros/imagens/2015/10/Imagem-campanha1-300x300.jpg')",
        'card2': "url('https://karpat.adv.br/wp-content/uploads/2024/03/direito-civil.webp')",
        'card3': "url('https://sindquimsuzano.org.br/wp-content/uploads/2019/03/justica-trabalho-5128269.jpg')",
        'card4': "url('https://static.wixstatic.com/media/11062b_0855c3390ec64726a661227ed664a145~mv2.jpeg/v1/fill/w_1425,h_1207,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_0855c3390ec64726a661227ed664a145~mv2.jpeg')",
        'card5': "url('https://poafilmcommission.portoalegre.rs.gov.br/sites/default/files/styles/hero_xl/public/usu_img/background/180514_DVG_1000_Lu%C3%ADs%20Adriano%20Madruga%20%20Divulg_PMPA%20%282%29.jpg?itok=y_9px32y')",
        screens: {
          'sd': '380px',
          // => @media (min-width: 425px) { ... }

          'sm': '640px',
          // => @media (min-width: 640px) { ... }

          'md': '768px',
          // => @media (min-width: 768px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1220px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },
        
      },

    },
    fontFamily: {
      'GaramondSerif': ['Cormorant Garamond', 'serif'],
      'MerriSerif': ['Merriweather', 'serif'], // Para títulos ou textos mais formais
      'RobotoSans': ['Roboto', 'sans-serif'],   // Para textos do corpo
    }
  },
  plugins: [],
}

