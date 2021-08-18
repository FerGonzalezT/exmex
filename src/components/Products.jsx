import React from 'react';
import { useRouteData } from 'react-static';
import {
  Grid, Header, Image,
} from 'semantic-ui-react';
import { Link } from './Router';

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
            <Grid.Column key={id} width="2" textAlign="center">
              <Image as={Link} to={`/productos/${id}`} src={imagenPrincipal} fluid />
            </Grid.Column>
          ))
        }
      </Grid.Row>
    </Grid>
  );
}

export default Products;
