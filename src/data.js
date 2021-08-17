export default {
  productos: [
    {
      id: 1,
      producto: 'Producto 1',
      descripcion: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget semper odio. Proin mauris est, tempor at fringilla sed, porta et ante.', 'Maecenas sem orci, blandit et mi non, tristique facilisis purus. Curabitur sagittis scelerisque justo sed porttitor. Nulla facilisi. Mauris tristique quam eget vehicula maximus. Morbi facilisis lectus ac ultricies auctor. Etiam pharetra justo at risus fringilla, id pretium magna commodo.'],
      tipoEspecificacion: [
        {
          titulo: 'Especificaciones del exprimidor',
          especificaciones: [
            { especificacion: 'Altura', valor: '34 cm' },
            { especificacion: 'Diametro', valor: '27 cm' },
          ],
        },
        {
          titulo: 'Especificaciones del motor',
          especificaciones: [
            { especificacion: 'Clase', valor: 'Tiempo continuo' },
            { especificacion: 'Consumo de corriente', valor: '4,5A' },
          ],
        },
      ],
      video: 'https://youtu.be/MRgYAyv7sbo',
      imagenes: ['https://picsum.photos/400/300', 'https://picsum.photos/400/300', 'https://picsum.photos/400/300'],
    },
    {
      id: 2,
      producto: 'Producto 2',
      descripcion: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget semper odio. Proin mauris est, tempor at fringilla sed, porta et ante.', 'Maecenas sem orci, blandit et mi non, tristique facilisis purus. Curabitur sagittis scelerisque justo sed porttitor. Nulla facilisi. Mauris tristique quam eget vehicula maximus. Morbi facilisis lectus ac ultricies auctor. Etiam pharetra justo at risus fringilla, id pretium magna commodo.'],
      tipoEspecificacion: [
        {
          titulo: 'Especificaciones del exprimidor',
          especificaciones: [
            { especificacion: 'Altura', valor: '34 cm' },
            { especificacion: 'Diametro', valor: '27 cm' },
          ],
        },
        {
          titulo: 'Especificaciones del motor',
          especificaciones: [
            { especificacion: 'Clase', valor: 'Tiempo continuo' },
            { especificacion: 'Consumo de corriente', valor: '4,5A' },
          ],
        },
      ],
      video: '',
      imagenes: ['https://picsum.photos/400/300', 'https://picsum.photos/400/300', 'https://picsum.photos/400/300'],
    },
  ],
};
