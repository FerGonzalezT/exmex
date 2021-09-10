import PropTypes from 'prop-types';
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
