import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from './Router';

function Header() {
  return (
    <Grid className="clear-padding-x" padded>
      <Grid.Row style={{ backgroundImage: 'url(images/textura_metal.jpg)' }}>
        <Grid.Column className="clear-padding-x" width="16" textAlign="center">
          <Image src="images/logo.png" size="large" centered wrapped />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="clear-padding-y">
        <Grid.Column textAlign="center" className="clear-padding-x" width={16}>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/about">¿Quiénes somos?</Link>
            <Link to="/about">Nuestros Productos</Link>
            <Link to="/about">Contacto</Link>
            {/* <Link to="/blog">Blog</Link>
            <Link to="/dynamic">Dynamic</Link> */}
          </nav>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Header;
