/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import data from './src/data';

export default {
  siteRoot: 'http://fergonzalezt.github.io',
  basePath: 'exmex',
  paths: {
    dist: 'build',
  },
  getSiteData: async ({ dev }) => ({
    title: 'EXMEX',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        template: 'src/components/Home',
      },
      {
        path: 'nosotros',
        template: 'src/components/About',
      },
      {
        path: 'productos',
        template: 'src/components/Products',
        getData: async () => ({
          productos: data.productos,
        }),
        children: data.productos.map((producto) => ({
          path: `${producto.id}`,
          template: 'src/components/ProductDetail',
          getData: async () => ({
            producto,
          }),
        })),
      },
      {
        path: 'contacto',
        template: 'src/components/Contact',
      },
      {
        path: '404',
        template: 'src/components/404',
      },
    ];
  },
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="es-MX">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>EXMEX</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
};
