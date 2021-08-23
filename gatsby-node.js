const { data } = require('./src/data');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: '/productos',
    component: require.resolve('./src/components/Productos.jsx'),
    context: { productos: data.productos },
  });
  data.productos.forEach((producto) => {
    createPage({
      path: `/producto/${producto.id}`,
      component: require.resolve('./src/components/Producto.jsx'),
      context: { producto },
    });
  });
};
