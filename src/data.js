const prefixStatic = '/exmex';
// const prefixStatic = '';
const data = {
  productos: [
    {
      id: 1,
      producto: 'EXPRIMIDOR DE JUGOS PARA CÍTRICOS EN ACERO INOXIDABLE',
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
      imagenPrincipal: `${prefixStatic}/Producto1-principal.jpg`,
      video: '',
      imagenes: [`${prefixStatic}/Producto1-1.jpg`, `${prefixStatic}/Producto1-2.jpg`, `${prefixStatic}/Producto1-3.jpg`],
    },
    {
      id: 2,
      producto: 'EXPRIMIDOR DE JUGOS PARA CÍTRICOS EN ALUMINIO',
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
      imagenPrincipal: `${prefixStatic}/Producto2-principal.jpg`,
      video: '',
      imagenes: [`${prefixStatic}/Producto2-1.jpg`, `${prefixStatic}/Producto2-2.jpg`],
    },
    {
      id: 3,
      producto: 'EXTRACTOR PARA JUGO DE ZANAHORIA Y LEGUMBRES AUTOMÁTICO DE EXPULSIÓN AUTOMÁTICA DE BAGAZO',
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
      imagenPrincipal: `${prefixStatic}/Producto3-principal.jpg`,
      video: '',
      imagenes: [`${prefixStatic}/Producto3-1.jpg`, `${prefixStatic}/Producto3-2.jpg`, `${prefixStatic}/Producto3-3.jpg`, `${prefixStatic}/Producto3-4.jpg`],
    },
    {
      id: 4,
      producto: 'EXTRACTOR PARA JUGO DE ZANAHORIA Y LEGUMBRES EN ALUMINIO',
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
      imagenPrincipal: `${prefixStatic}/Producto4-principal.jpg`,
      video: '',
      imagenes: [`${prefixStatic}/Producto4-1.jpg`],
    },
    {
      id: 5,
      producto: 'LICUADORA EN ACERO INOXIDABLE 3L',
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
      imagenPrincipal: `${prefixStatic}/Producto5-principal.jpg`,
      video: '',
      imagenes: [`${prefixStatic}/Producto5-1.jpg`, `${prefixStatic}/Producto5-2.jpg`],
    },
    {
      id: 6,
      producto: 'LICUADORA EN ACERO INOXIDABLE 5L',
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
      imagenPrincipal: `${prefixStatic}/Producto6-principal.jpg`,
      video: '',
      imagenes: [`${prefixStatic}/Producto6-1.jpg`, `${prefixStatic}/Producto6-2.jpg`],
    },
    {
      id: 7,
      producto: 'TRITURADOR PARA HIELO D-4',
      descripcion: [
        'Esta máquina con su mayor tamaño cuenta con un diámetro de alimentación de 6 pulgadas aumentando su capacidad de producción, cuenta con doble navaja de corte, está diseñada y fabricada con materiales resistentes a la corrosión.',
        'Este producto fabricado en acero inoxidable que puede triturar la cantidad de hielo que usted necesite de forma higiénica, utilizando como depósito su caja de almacenamiento con la sanidad y seguridad que se requiere.',
        'Su gruesa navaja con filo rectificado en acero inoxidable calibre 12, hacen que el hielo salga uniformemente para utilizarlo en múltiples usos del hielo: para frape, nieve, jugos, licuados, carne, pescado y mariscos.',
      ],
      tipoEspecificacion: [
        {
          titulo: 'Especificaciones del triturador',
          especificaciones: [
            { especificacion: 'ALTURA', valor: '42 cm' },
            { especificacion: 'ANCHO', valor: '51 cm' },
            { especificacion: 'FONDO', valor: '36 cm' },
          ],
        },
        {
          titulo: 'Dimensión Total',
          especificaciones: [
            { especificacion: 'ALTO', valor: '66 cm' },
            { especificacion: 'ANCHO', valor: '67 cm' },
            { especificacion: 'FONDO', valor: '36 cm' },
            { especificacion: 'PESO', valor: '16 kg' },
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
      imagenPrincipal: `${prefixStatic}/Producto7-principal.jpg`,
      video: '',
      imagenes: [`${prefixStatic}/logo.png`],
    },
    {
      id: 8,
      producto: 'TRITURADOR PARA HIELO D-6',
      descripcion: [
        'Esta máquina con su mayor tamaño cuenta con un diámetro de alimentación de 6 pulgadas aumentando su capacidad de producción, cuenta con doble navaja de corte, está diseñada y fabricada con materiales resistentes a la corrosión.',
        'Este producto fabricado en acero inoxidable que puede triturar la cantidad de hielo que usted necesite de forma higiénica, utilizando como deposito su caja de almacenamiento con la sanidad y seguridad que se requiere.',
        'Su gruesa navaja con filo rectificado en acero inoxidable calibre 12, hacen que el hielo salga uniformemente para utilizarlo en múltiples usos: para frape, nieve, jugos, licuados, carne, pescado y mariscos.',
      ],
      tipoEspecificacion: [
        {
          titulo: 'Especificaciones del triturador',
          especificaciones: [
            { especificacion: 'ALTURA', valor: '30 cm' },
            { especificacion: 'ANCHO', valor: '48 cm' },
            { especificacion: 'FONDO', valor: '28 cm' },
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
      imagenPrincipal: `${prefixStatic}/Producto8-principal.jpg`,
      video: '',
      imagenes: [`${prefixStatic}/Producto8-1.jpg`, `${prefixStatic}/Producto8-2.jpg`, `${prefixStatic}/Producto8-3.jpg`, `${prefixStatic}/Producto8-4.jpg`],
    },
    {
      id: 9,
      producto: 'EXTRACTOR PARA JUGO DE ZANAHORIA Y LEGUMBRES EN ACERO INOXIDABLE',
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
      imagenPrincipal: `${prefixStatic}/logo.png`,
      video: '',
      imagenes: [`${prefixStatic}/Producto9-1.jpg`, `${prefixStatic}/Producto9-2.jpg`, `${prefixStatic}/Producto9-3.jpg`, `${prefixStatic}/Producto9-4.jpg`, `${prefixStatic}/Producto9-5.jpg`],
    },
  ],
};

module.exports.data = data;
