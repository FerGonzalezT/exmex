import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Background from '../images/textura_metal.jpg';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Whatsapp from '../images/whastapp.png';
import Youtube from '../images/youtube.png';

function Footer() {
  return (
    <Grid style={{ backgroundImage: `url(${Background})` }} className="clear-padding-x" padded>
      <Grid.Row className="clear-padding-bottom" centered>
        <Grid.Column className="clear-padding-x" width="16" textAlign="center">
          <Image
            src={Whatsapp}
            inline
            size="mini"
            spaced
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('https://wa.me/523337246249')}
          />
          <Image
            src={Facebook}
            inline
            size="mini"
            spaced
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('https://www.facebook.com/exmexgdl/')}
          />
          <Image
            src={Instagram}
            inline
            size="mini"
            spaced
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('https://www.instagram.com/exmex_guadalajara/?hl=es')}
          />
          <Image
            src={Youtube}
            inline
            size="mini"
            spaced
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('')}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column className="clear-padding-x" width="16" textAlign="center">
          Dionisio Rodríguez no. 900, Col. San Felipe de Jesús, C.P. 44380, Guadalajara, Jalisco
          Tel: 01 (33) 36017095034
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Footer;
