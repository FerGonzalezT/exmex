import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useRouteData } from 'react-static';
import {
  Grid, Header, Image, Placeholder,
} from 'semantic-ui-react';
import { Link } from './Router';

function ProductImage({ id, imagenPrincipal }) {
  const [loading, setLoading] = useState(true);
  return (
    <Grid.Column key={id} width="2" textAlign="center">
      {
        loading
        && (
          <Placeholder fluid style={{ height: '30vh' }}>
            <Placeholder.Image />
          </Placeholder>
        )
      }
      <Image
        as={Link}
        to={`/productos/${id}`}
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

function Products() {
  const { productos } = useRouteData();
  return (
    <Grid padded>
      <Grid.Row centered>
        <Grid.Column width="14">
          <Header>
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
  );
}

export default Products;
