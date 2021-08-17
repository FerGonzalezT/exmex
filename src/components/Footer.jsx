import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

function Footer() {
  return (
    <Grid style={{ backgroundImage: 'url(images/textura_metal.jpg)' }} className="clear-padding-x" padded>
      <Grid.Row className="clear-padding-bottom">
        <Grid.Column className="clear-padding-x" width="16" textAlign="center">
          <Icon link name="whatsapp" size="large" />
          <Icon link name="facebook" size="large" />
          <Icon link name="instagram" size="large" />
          <Icon link name="youtube" size="large" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column className="clear-padding-x" width="16" textAlign="center">
          Dionicio Rodriguez #900 Sector Libertad, Guadalajara Jalisco
          Tel: 01 (33) 3617-9534 / 01 (33) 3617-8814
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Footer;
