const { prefixStatic } = require('./constants');

const data = {
  productos: [
    {
      id: 8,
      producto: 'EXTRACTOR PARA JUGO DE ZANAHORIA Y LEGUMBRES EN ACERO INOXIDABLE',
      palabraClave: 'EXTRACTOR',
      descripcion: [
        'Extractor para jugo de zanahoria y legumbres cuenta con su filtro colador en acero inoxidable grado alimenticio el cual brinda una capacidad de producción más de 50 lts/hr.',
        'El disco cortador en acero inoxidable es de gran rendimiento gracias a sus 16 líneas de navajas que garantizan la mayor extracción del jugo de los vegetales.',
        'Su practico diseño facilita su limpieza e higiene.',
        'Su motor de 187 watt de potencia garantiza un ahorro de energía eléctrica.',
      ],
      tipoEspecificacion: [
        {
          titulo: 'Especificaciones del extractor:',
          especificaciones: [
            { especificacion: 'ALTURA', valor: '34 cm' },
            { especificacion: 'DIÁMETRO', valor: '27 cm' },
            { especificacion: 'PESO', valor: '18 Kg' },
          ],
        },
        {
          titulo: 'Especificaciones del motor',
          especificaciones: [
            { especificacion: 'CLASE', valor: 'Tiempo Continuo' },
            { especificacion: 'CONSUMO DE CORRIENTE', valor: '4,5 A' },
            { especificacion: 'RPM', valor: '3500' },
            { especificacion: 'POTENCIA', valor: '127 CA' },
            { especificacion: 'CP', valor: '1/4' },
            { especificacion: 'HZ', valor: '60' },
            { especificacion: 'FACES', valor: '1' },
          ],
        },
      ],
      imagenPrincipal: `${prefixStatic}/Producto8-principal.png`,
      imagenFondo: `${prefixStatic}/Producto8-fondo.png`,
      video: '',
      imagenes: [`${prefixStatic}/Producto8-1.png`, `${prefixStatic}/Producto8-2.png`, `${prefixStatic}/Producto8-3.png`, `${prefixStatic}/Producto8-4.png`],
    },
    {
      id: 4,
      producto: 'EXTRACTOR PARA JUGO DE ZANAHORIA Y LEGUMBRES EN ALUMINIO',
      palabraClave: 'EXTRACTOR',
      descripcion: [
        'Extractor para jugo de zanahoria y legumbres cuenta con su filtro colador en acero inoxidable grado alimenticio el cual brinda una capacidad de producción más de 50 lts/hr.',
        'El disco cortador en acero inoxidable es de gran rendimiento gracias a sus 16 líneas de navajas que garantizan la mayor extracción del jugo de los vegetales.',
        'Cuenta con un practico diseño que facilita su limpieza e higiene. Su motor de 187 watt de potencia garantiza un ahorro de energía eléctrica.',
      ],
      tipoEspecificacion: [
        {
          titulo: 'Especificaciones del extractor:',
          especificaciones: [
            { especificacion: 'ALTURA', valor: '36 cm' },
            { especificacion: 'DIÁMETRO', valor: '25 cm' },
            { especificacion: 'PESO', valor: '12 Kg' },
          ],
        },
        {
          titulo: 'Especificaciones del motor',
          especificaciones: [
            { especificacion: 'CLASE', valor: 'Tiempo Continuo' },
            { especificacion: 'CONSUMO DE CORRIENTE', valor: '4,5 A' },
            { especificacion: 'RPM', valor: '3540' },
            { especificacion: 'POTENCIA', valor: '187 WATT' },
            { especificacion: 'VOLTS', valor: '127' },
            { especificacion: 'CP', valor: '1/4' },
            { especificacion: 'HZ', valor: '60' },
            { especificacion: 'FACES', valor: '1' },
          ],
        },
      ],
      imagenPrincipal: `${prefixStatic}/Producto4-principal.png`,
      imagenFondo: `${prefixStatic}/Producto4-fondo.png`,
      video: '',
      imagenes: [`${prefixStatic}/Producto4-1.png`],
    },
    {
      id: 3,
      producto: 'EXTRACTOR PARA JUGO DE ZANAHORIA Y LEGUMBRES AUTOMÁTICO DE EXPULSIÓN AUTOMÁTICA DE BAGAZO',
      palabraClave: 'EXTRACTOR',
      descripcion: [
        'Filtro colador en acero inoxidable grado alimenticio. Garantiza su uso continúo debido a que por un lado saca la fibra de la zanahoria y por otro lado se extrae todo el jugo. Disco cortador en acero inoxidable de gran rendimiento gracias a sus 16 líneas de navajas que garantizan la mayor extracción de jugo de los vegetales.',
        'Su practico diseño facilita su limpieza e higiene. Su motor de 187 watt de potencia garantiza un ahorro de energía eléctrica.',
      ],
      tipoEspecificacion: [
        {
          titulo: 'Especificaciones del extractor:',
          especificaciones: [
            { especificacion: 'ALTURA', valor: '42 cm' },
            { especificacion: 'DIÁMETRO', valor: '27 cm' },
            { especificacion: 'PESO', valor: '13.75 Kg' },
          ],
        },
        {
          titulo: 'Especificaciones del motor',
          especificaciones: [
            { especificacion: 'CLASE', valor: 'Tiempo Continuo' },
            { especificacion: 'CONSUMO DE CORRIENTE', valor: '4,5 A' },
            { especificacion: 'RPM', valor: '3540' },
            { especificacion: 'POTENCIA', valor: '187 WATT' },
            { especificacion: 'VOLTS', valor: '127' },
            { especificacion: 'CP', valor: '1/4' },
            { especificacion: 'HZ', valor: '60' },
            { especificacion: 'FACES', valor: '1' },
          ],
        },
      ],
      imagenPrincipal: `${prefixStatic}/Producto3-principal.png`,
      imagenFondo: `${prefixStatic}/Producto3-fondo.png`,
      video: '',
      imagenes: [`${prefixStatic}/Producto3-1.png`, `${prefixStatic}/Producto3-2.png`, `${prefixStatic}/Producto3-3.png`, `${prefixStatic}/Producto3-4.png`],
    },
    {
      id: 1,
      producto: 'EXPRIMIDOR DE JUGOS PARA CÍTRICOS EN ACERO INOXIDABLE',
      palabraClave: 'EXPRIMIDOR',
      descripcion: [
        'El exprimidor de jugos EXMEX está diseñado para obtener el mayor aprovechamiento en la extracción de jugo cítrico, esto es posible gracias al diseño de su perilla que puede extraer el jugo de una lima hasta de una toronja con toda facilidad.',
        'Su poderoso motor de uso continuo de 1/4 HP, es uno de los de mayor calidad en el mercado.',
        'Su fuerte y durable estructura de acero inoxidable calidad 304 (grado alimenticio), hace de este exprimidor el más versátil y el más fácil para darle mantenimiento.',
      ],
      tipoEspecificacion: [
        {
          titulo: 'Especificaciones del exprimidor:',
          especificaciones: [
            { especificacion: 'ALTURA', valor: '34 cm' },
            { especificacion: 'DIÁMETRO', valor: '24.5 cm' },
            { especificacion: 'PESO', valor: '9 Kg' },
          ],
        },
        {
          titulo: 'Especificaciones del motor',
          especificaciones: [
            { especificacion: 'CLASE', valor: 'Tiempo Completo' },
            { especificacion: 'RPM', valor: '1725' },
            { especificacion: 'VOLTS', valor: '17 CA' },
            { especificacion: 'CP', valor: '1/4' },
            { especificacion: 'HZ', valor: '60' },
            { especificacion: 'FACES', valor: '1' },
          ],
        },
      ],
      imagenPrincipal: `${prefixStatic}/Producto1-principal.png`,
      imagenFondo: `${prefixStatic}/Producto1-fondo.png`,
      video: '',
      imagenes: [`${prefixStatic}/Producto1-1.png`, `${prefixStatic}/Producto1-2.png`, `${prefixStatic}/Producto1-3.png`],
    },
    {
      id: 2,
      producto: 'EXPRIMIDOR DE JUGOS PARA CÍTRICOS EN ALUMINIO',
      palabraClave: 'EXPRIMIDOR',
      descripcion: [
        'El exprimidor de jugos EXMEX está diseñado para obtener el mayor provecho en la extracción de jugo cítrico, esto es posible gracias al diseño de su perilla que puede extraer el jugo de una lima hasta una toronja con toda facilidad.',
        'Su poderoso motor de uso continuo de 1/4 HP, es uno de los de mayor calidad en el mercado.',
        'Su fuerte y durable estructura de aluminio de alto impacto, hace de este exprimidor el más versátil y más fácil para darle mantenimiento.',
      ],
      tipoEspecificacion: [
        {
          titulo: 'Especificaciones del exprimidor:',
          especificaciones: [
            { especificacion: 'ALTURA', valor: '34 cm' },
            { especificacion: 'DIÁMETRO', valor: '27 cm' },
            { especificacion: 'PESO', valor: '18 Kg' },
          ],
        },
        {
          titulo: 'Especificaciones del motor',
          especificaciones: [
            { especificacion: 'CLASE', valor: 'Tiempo Continuo' },
            { especificacion: 'RPM', valor: '1725' },
            { especificacion: 'VOLTS', valor: '127 CA' },
            { especificacion: 'CP', valor: '1/4' },
            { especificacion: 'HZ', valor: '60' },
            { especificacion: 'FACES', valor: '1' },
          ],
        },
      ],
      imagenPrincipal: `${prefixStatic}/Producto2-principal.png`,
      imagenFondo: `${prefixStatic}/Producto2-fondo.png`,
      video: '',
      imagenes: [`${prefixStatic}/Producto2-1.png`, `${prefixStatic}/Producto2-2.png`],
    },
    {
      id: 5,
      producto: 'LICUADORA EN ACERO INOXIDABLE 3L',
      palabraClave: 'LICUADORA',
      descripcion: [
        'Esta licuadora está fabricada en acero inoxidable calidad 304. Su gran capacidad y diseño permite licuar eficientemente una gran variedad de productos alimenticios. Su eficaz y poderosa transmisión hace de esta máquina la más eficiente del mercado ya que no cuenta con bujes dándole mayor vida útil a la licuadora.',
        'Sus navajas de corte siendo las eficaces ya que estas son fabricadas en acero inoxidable calibre 12 garantizando su mayor durabilidad a sus navajas. Cuenta con tapadera transparente en acrílico y con una subtapa removible para facilitar el trabajo de producción sin tener que parar el motor en caso de ingresar más alimento al interior de la licuadora.',
      ],
      tipoEspecificacion: [
        {
          titulo: 'Dimensión Total:',
          especificaciones: [
            { especificacion: 'ALTO', valor: '60 cm' },
            { especificacion: 'DIÁMETRO', valor: '25 cm' },
            { especificacion: 'PESO', valor: '14.75 kg' },
            { especificacion: 'CAPACIDAD', valor: '3 litros' },
          ],
        },
        {
          titulo: 'Especificaciones del motor',
          especificaciones: [
            { especificacion: 'CLASE', valor: 'Tiempo Continuo' },
            { especificacion: 'POTENCIA', valor: '1HP / 746 WATTS' },
            { especificacion: 'RPM', valor: '3540' },
            { especificacion: 'VOLTS', valor: '220 / 127' },
            { especificacion: 'CORRIENTE', valor: '6,18 A / 16 A' },
            { especificacion: 'HZ', valor: '60' },
            { especificacion: 'FACES', valor: '1' },
            { especificacion: 'FS', valor: '1' },
          ],
        },
      ],
      imagenPrincipal: `${prefixStatic}/Producto5-principal.png`,
      imagenFondo: `${prefixStatic}/Producto5-fondo.png`,
      video: '',
      imagenes: [`${prefixStatic}/Producto5-1.png`, `${prefixStatic}/Producto5-2.png`],
    },
    {
      id: 6,
      producto: 'LICUADORA EN ACERO INOXIDABLE 5L',
      palabraClave: 'LICUADORA',
      descripcion: [
        'Esta licuadora está fabricada en acero inoxidable calidad 304. Su gran capacidad y diseño permite licuar eficientemente una gran variedad de productos alimenticios. Su eficaz y poderosa transmisión hace de esta máquina la más eficiente del mercado ya que no cuenta con bujes dándole mayor vida útil a la licuadora.',
        'Sus navajas de corte siendo las eficaces ya que estas son fabricadas en acero inoxidable calibre 12 garantizando su mayor durabilidad a sus navajas. Cuenta con tapadera transparente en acrílico y con una subtapa removible para facilitar el trabajo de producción sin tener que parar el motor en caso de ingresar más alimento al interior de la licuadora.',
      ],
      tipoEspecificacion: [
        {
          titulo: 'Especificaciones de la licuadora',
          especificaciones: [
          ],
        },
        {
          titulo: 'Dimensión Total:',
          especificaciones: [
            { especificacion: 'ALTO', valor: '65 cm' },
            { especificacion: 'DIÁMETRO', valor: '25 cm' },
            { especificacion: 'PESO', valor: '16 kg' },
            { especificacion: 'CAPACIDAD', valor: '5 litros' },
          ],
        },
        {
          titulo: 'Especificaciones del motor',
          especificaciones: [
            { especificacion: 'CLASE', valor: 'Tiempo Continuo' },
            { especificacion: 'POTENCIA', valor: '1HP / 746 WATTS' },
            { especificacion: 'RPM', valor: '3540' },
            { especificacion: 'VOLTS', valor: '220 / 127' },
            { especificacion: 'CORRIENTE', valor: '6,18 A / 16 A' },
            { especificacion: 'HZ', valor: '60' },
            { especificacion: 'FACES', valor: '1' },
            { especificacion: 'FS', valor: '1,4' },
          ],
        },
      ],
      imagenPrincipal: `${prefixStatic}/Producto6-principal.png`,
      imagenFondo: `${prefixStatic}/Producto6-fondo.png`,
      video: '',
      imagenes: [`${prefixStatic}/Producto6-1.png`, `${prefixStatic}/Producto6-2.png`],
    },
    {
      id: 7,
      producto: 'TRITURADOR PARA HIELO D-6',
      palabraClave: 'TRITURADOR',
      descripcion: [
        'Esta máquina con su mayor tamaño cuenta con un diámetro de alimentación de 6 pulgadas aumentando su capacidad de producción, cuenta con doble navaja de corte, está diseñada y fabricada con materiales resistentes a la corrosión.',
        'Este producto fabricado en acero inoxidable que puede triturar la cantidad de hielo que usted necesite de forma higiénica, utilizando como deposito su caja de almacenamiento con la sanidad y seguridad que se requiere.',
        'Su gruesa navaja con filo rectificado en acero inoxidable calibre 12, hacen que el hielo salga uniformemente para utilizarlo en múltiples usos: para frape, nieve, jugos, licuados, utilizable para mesa fría de carnes, pescados y mariscos.',
      ],
      tipoEspecificacion: [
        {
          titulo: 'Especificaciones del triturador',
          especificaciones: [
            { especificacion: 'ALTURA', valor: '30 cm' },
            { especificacion: 'ANCHO', valor: '48 cm' },
            { especificacion: 'FONDO', valor: '28 Kg' },
          ],
        },
        {
          titulo: 'Dimensión Total',
          especificaciones: [
            { especificacion: 'ALTO', valor: '30 cm' },
            { especificacion: 'ANCHO', valor: '48 cm' },
            { especificacion: 'FONDO', valor: '20 cm' },
            { especificacion: 'PESO', valor: '20 kg' },
          ],
        },
        {
          titulo: 'Especificaciones del motor',
          especificaciones: [
            { especificacion: 'CLASE', valor: 'Tiempo Continuo' },
            { especificacion: 'RPM', valor: '1725' },
            { especificacion: 'VOLTS', valor: '127 CA' },
            { especificacion: 'CP', valor: '1/2' },
            { especificacion: 'HZ', valor: '60' },
            { especificacion: 'FACES', valor: '1' },
          ],
        },
      ],
      imagenPrincipal: `${prefixStatic}/Producto7-principal.png`,
      imagenFondo: `${prefixStatic}/Producto7-fondo.png`,
      video: '',
      imagenes: [`${prefixStatic}/Producto7-1.png`, `${prefixStatic}/Producto7-2.png`, `${prefixStatic}/Producto7-3.png`, `${prefixStatic}/Producto7-4.png`],
    },
  ],
  refacciones: [
    {
      id: 1,
      descripcion: 'Apagador para extractor y exprimidor de jugos.',
      imagen: `${prefixStatic}/1_refaccion.jpg`,
    },
    {
      id: 2,
      descripcion: 'Disco cortador para extractor automatico de zanahoria en acero inoxidable.',
      imagen: `${prefixStatic}/2_refaccion.jpg`,
    },
    {
      id: 3,
      descripcion: 'Disco cortador para extractor de zanahoria en acero inoxidable y aluminio.',
      imagen: `${prefixStatic}/3_refaccion.jpg`,
    },
    {
      id: 4,
      descripcion: 'Embutidor para extractor de zanahoria en acero inoxidable.',
      imagen: `${prefixStatic}/4_refaccion.jpg`,
    },
    {
      id: 5,
      descripcion: 'Embutidor para extractor de zanahoria en aluminio.',
      imagen: `${prefixStatic}/5_refaccion.jpg`,
    },
    {
      id: 6,
      descripcion: 'Filtro para extractor de zanahoria para equipo de acero inoxidable y aluminio.',
      imagen: `${prefixStatic}/6_refaccion.jpg`,
    },
    {
      id: 7,
      descripcion: 'Navaja en acero inoxidable para triturador de hielo.',
      imagen: `${prefixStatic}/7_refaccion.jpg`,
    },
    {
      id: 8,
      descripcion: 'Oreja lateral para base de extractor de zanahoria en acero inoxidable.',
      imagen: `${prefixStatic}/8_refaccion.jpg`,
    },
    {
      id: 9,
      descripcion: 'Orejas laterales para extractor de zanahoria en aluminio.',
      imagen: `${prefixStatic}/9_refaccion.jpg`,
    },
    {
      id: 10,
      descripcion: 'Perilla para exprimidor de naranja de acero inoxidable o aluminio.',
      imagen: `${prefixStatic}/10_refaccion.jpg`,
    },
    {
      id: 11,
      descripcion: 'Plato base de aluminio para filtro de extractor de zanahoria en acero inoxidable y aluminio.',
      imagen: `${prefixStatic}/11_refaccion.jpg`,
    },
    {
      id: 12,
      descripcion: 'Plato base de bronce para extractor de zanahoria en acero inoxidable y alumino.',
      imagen: `${prefixStatic}/12_refaccion.jpg`,
    },
    {
      id: 13,
      descripcion: 'Plato base de bronce para extractor de zanahoria en acero inoxidable y alumino vista lateral.',
      imagen: `${prefixStatic}/13_refaccion.jpg`,
    },
    {
      id: 14,
      descripcion: 'Plato base para extractor de zanahoria en acero inoxidable y aluminio.',
      imagen: `${prefixStatic}/14_refaccion.jpg`,
    },
    {
      id: 15,
      descripcion: 'Tapadera de acrilico para extractor de zanahoria en acero inoxidable.',
      imagen: `${prefixStatic}/15_refaccion.jpg`,
    },
    {
      id: 16,
      descripcion: 'tenzador para tapadera de extractor de zanahoria',
      imagen: `${prefixStatic}/16_refaccion.jpg`,
    },
    {
      id: 17,
      descripcion: 'Tornillo de centro para extractor de zanahoria para equipo de acero inoxidable y acero.',
      imagen: `${prefixStatic}/17_refaccion.jpg`,
    },
    {
      id: 18,
      descripcion: 'Tornillos para charola de extractor de zanahoria.',
      imagen: `${prefixStatic}/18_refaccion.jpg`,
    },
    {
      id: 19,
      descripcion: 'Tornillos para filtro de extractor de zanahoria.',
      imagen: `${prefixStatic}/19_refaccion.jpg`,
    },
    {
      id: 20,
      descripcion: 'Tuercas laterales para extractor de zanahoria y exprimidor de naranja.',
      imagen: `${prefixStatic}/20_refaccion.jpg`,
    },
    // {
    //   id: 21,
    //   descripcion: 'Vista superior de extractor de zanahoria en acero inoxidable.',
    //   imagen: `${prefixStatic}/21_refaccion.jpg`,
    // },
  ],
};

module.exports.data = data;
