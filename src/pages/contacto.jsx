import React, { } from 'react';
import {
  Grid, Image, Embed,
} from 'semantic-ui-react';
import Layout from '../components/Layout';
import backgroundImage from '../images/fondo_contacto.jpg';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Whatsapp from '../images/whastapp.png';
import Youtube from '../images/youtube.png';

function Contact() {
  return (
    <Layout>
      <Grid padded>
        <Grid.Row className="clear-padding-y">
          <Grid.Column className="clear-padding-x" width="16" textAlign="center">
            <Image
              src={backgroundImage}
              fluid
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column
            className="clear-padding-x"
            computer="10"
            tablet="12"
            mobile="15"
            textAlign="center"
          >
            En EXMEX nos preocupamos por brindarte una atención y servicio de calidad por lo que si requieres alguna información adicional o asistencia personalizada, con gusto te atenderemos por los medios que a continuación proporcionamos:
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered style={{ paddingTop: '1rem' }}>
          <Grid.Column
            verticalAlign="middle"
            computer="5"
            tablet="15"
            mobile="15"
            textAlign="center"
          >
            <Embed
              placeholder=""
              active
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.9266663526905!2d-103.3250947858284!3d20.67256228619238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1861249b445%3A0xa894b1efbdea4a22!2sEXMEX!5e0!3m2!1ses!2smx!4v1629269134542!5m2!1ses!2smx"
              iframe={{
                allowfullscreen: true,
                loading: 'lazy',
              }}
            />
          </Grid.Column>
          <Grid.Column
            computer="1"
            tablet="16"
            mobile="16"
          />
          <Grid.Column
            style={{ borderLeft: '3px solid #94dcf6', padding: '0.5rem' }}
            textAlign="left"
            verticalAlign="middle"
            width="6"
            computer="6"
            tablet="15"
            mobile="15"
          >
            <p>
              <strong>Teléfonos: </strong>
              01 (33) 36 01 70 95 034 / 33 37 24 62 49
            </p>
            <p>
              <strong>E-Mail: </strong>
              <a rel="noreferrer" href="mailto:exmex1@hotmail.com" target="_blank">exmex1@hotmail.com</a>
              {' '}
              /
              {' '}
              <a rel="noreferrer" href="mailto:lazanahoria_1@hotmail.com" target="_blank">lazanahoria_1@hotmail.com</a>
            </p>
            <p>
              <strong>Dirección: </strong>
              Dionisio Rodríguez no. 900, Col. San Felipe de Jesús, C.P. 44380, Guadalajara, Jalisco
            </p>
            <p>
              <strong>Horarios de atención: </strong>
              Lunes a Viernes de 9:00 a.m. a 5:30 p.m.
            </p>
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
      </Grid>
    </Layout>
  );
}

export default Contact;
