import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  Grid, Header, Image,
} from 'semantic-ui-react';
import Layout from './Layout';

function ProductImage({ id, imagenPrincipal }) {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  return (
    <Grid.Column
      key={id}
      computer="2"
      tablet="5"
      mobile="7"
      textAlign="center"
    >
      <Image
        as={Link}
        className="zoom"
        to={`/producto/${id}`}
        src={imagenPrincipal}
        onLoad={() => setLoading(false)}
        fluid
      />
    </Grid.Column>
  );
}

ProductImage.propTypes = {
  id: PropTypes.number.isRequired,
  imagenPrincipal: PropTypes.string.isRequired,
};

function Products({ pageContext }) {
  const { productos } = pageContext;
  return (
    <Layout>
      <Helmet>
        {/* General tags */}
        <title>EXMEX - Productos</title>
        <meta
          name="description"
          content={[
            'EXTRACTOR PARA JUGO DE ZANAHORIA Y LEGUMBRES EN ACERO INOXIDABLE', 'EXTRACTOR PARA JUGO DE ZANAHORIA Y LEGUMBRES EN ALUMINIO',
            'EXTRACTOR PARA JUGO DE ZANAHORIA Y LEGUMBRES AUTOMÁTICO DE EXPULSIÓN AUTOMÁTICA DE BAGAZO',
            'EXPRIMIDOR DE JUGOS PARA CÍTRICOS EN ACERO INOXIDABLE',
            'EXPRIMIDOR DE JUGOS PARA CÍTRICOS EN ALUMINIO',
            'LICUADORA EN ACERO INOXIDABLE 3L',
            'LICUADORA EN ACERO INOXIDABLE 5L',
            'TRITURADOR PARA HIELO D-6',
          ].join('\n')}
        />
        {/* <meta name="image" content={image} /> */}
      </Helmet>
      <Grid padded>
        <Grid.Row centered>
          <Grid.Column
            computer="14"
            tablet="15"
            mobile="15"
          >
            <Header size="huge">
              NUESTROS PRODUCTOS
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          {
            productos.map(({ id, imagenPrincipal }) => (
              <ProductImage id={id} imagenPrincipal={imagenPrincipal} />
            ))
          }
        </Grid.Row>
      </Grid>
    </Layout>
  );
}

Products.propTypes = {
  pageContext: PropTypes.shape({
    productos: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Products;
