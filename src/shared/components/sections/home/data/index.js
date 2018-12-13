/* eslint max-len: [2, 500, 4] */

const data = {
  block1: {
    slides: [
      {
        id: 1,
        image:
          'https://www.dropbox.com/s/h7wfrs9280j2yxl/Img-Banner-EstiloNoSeHereda-Slide1.jpg?dl=0',
        title: 'El estilo no se hereda',
        button_title: 'Productos',
        button_url: '/productos',
        content: '',
        block: 1,
      },
      {
        id: 2,
        image:
          'https://www.dropbox.com/s/dyimn062h0r403b/Img-Banner-DisenoInteriores-Slide2.jpg?dl=0',
        title: 'DISEÑO DE INTERIORES',
        button_title: 'SERVICIOS',
        button_url: '/servicios',
        content: '',
        block: 1,
      },
      {
        id: 3,
        image:
          'https://www.dropbox.com/s/z0ch7kalfvu5t92/Img-Banner-MobiliarioContemporaneo-Slide3.jpg?dl=0',
        title: 'MOBILIARIO CONTEMPORÁNEO',
        button_title: 'Productos',
        button_url: '/productos',
        content: '',
        block: 1,
      },
    ],
  },
  block2: {
    buttons: {
      button1: { id: 1, href: '/productos', title: 'Ver productos', block: 2 },
      button2: { id: 2, href: '/productos', title: 'Ver productos', block: 2 },
      button3: { id: 3, href: '/productos', title: 'Ver productos', block: 2 },
    },
    images: {
      image1: {
        id: 1,
        src: '/images/img_living.png',
        alt: 'ver productos',
        block: 2,
      },
      image2: {
        id: 2,
        src: '/images/img_dining.png',
        alt: 'ver productos',
        block: 2,
      },
      image3: {
        id: 3,
        src: '/images/img_bed.png',
        alt: 'ver productos',
        block: 2,
      },
    },
    titles: { title1: 'LIVINGROOM', title2: 'DINING', title3: 'BEDROOM' },
  },
  block3: {
    paragraphs: {
      paragraph1:
        'En Notable más allá de adquirir un mueble de calidad, estás comprando una pieza de diseño tan bella, funcional y confortable, que sabemos que vivirás en ella momentos inolvidables.',
    },
    titles: { title1: 'NUESTRO COMPROMISO' },
  },
  block4: {
    buttons: {
      button1: { id: 6, href: '/contacto', title: 'UBICACIÓN', block: 9 },
    },
    images: {
      image1: {
        id: 7,
        src: 'https://www.dropbox.com/s/2h1varw7k7wtauj/Img-Showroom2.jpg?dl=0',
        alt: 'UBICACIÓN',
        block: 9,
      },
    },
    titles: { title1: 'VISITA NUESTRO SHOWROOM EN TIJUANA' },
  },
};


module.exports = data;
