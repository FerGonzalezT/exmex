const { data } = require('./src/data');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: '/productos',
    component: require.resolve('./src/components/Productos.jsx'),
    context: { productos: data.productos },
  });
  createPage({
    path: '/refacciones',
    component: require.resolve('./src/components/Refacciones.jsx'),
    context: { refacciones: data.refacciones },
  });
  data.productos.forEach((producto) => {
    createPage({
      path: `/producto/${producto.id}`,
      component: require.resolve('./src/components/Producto.jsx'),
      context: { producto },
    });
  });
};
