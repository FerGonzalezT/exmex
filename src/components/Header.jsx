import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'gatsby';
import Logo from '../images/logo.png';
import Background from '../images/textura_metal.jpg';

function Header() {
  return (
    <Grid className="clear-padding-x" padded>
      <Grid.Row className="clear-padding-y" style={{ backgroundImage: `url(${Background})`, backgroundSize: '100%' }}>
        <Grid.Column
          className="clear-padding-x"
          width="16"
          textAlign="center"
          style={{ minHeight: '2rem' }}
        >
          <Image src={Logo} size="large" centered wrapped />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="clear-padding-y">
        <Grid.Column textAlign="center" className="clear-padding-x" width={16}>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">¿Quiénes somos?</Link>
            <Link to="/productos">Nuestros Productos</Link>
            <Link to="/contacto">Contacto</Link>
            {/* <Link to="/blog">Blog</Link>
            <Link to="/dynamic">Dynamic</Link> */}
          </nav>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Header;
