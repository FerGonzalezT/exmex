/* eslint-disable max-len */
import React, { } from 'react';
import {
  Grid, Image, Header,
} from 'semantic-ui-react';
import Layout from '../components/Layout';
import backgroundImage from '../images/fondo_quienes_somos.jpg';

function About() {
  return (
    <Layout>
      <Grid padded>
        <Grid.Row className="clear-padding-y">
          <Grid.Column
            className="clear-padding-x"
            width="16"
            textAlign="center"
          >
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
            textAlign="justified"
          >
            <p>
              Somos una empresa 100% mexicana, situada en Guadalajara, Jalisco, desde el año de 1974 hemos tenido presencia en el mercado nacional en el sector restaurantero, hotelero, juguerías y comedores industriales. Nuestra empresa surgió de la necesidad de contar con un producto industrial que brindará a nuestros clientes, el servicio rápido a la producción de jugos naturales en corto tiempo y es así cómo nos dedicamos a la elaboración de equipos industriales de alta calidad, higiene y rapidez en su producción.
            </p>
            <p>
              Todos nuestros productos están fabricados con materiales de alta calidad y grado alimenticio, los procesos son elaborados cuidadosamente para lograr los mejores acabados en el equipo, por lo que esta combinación hace que el producto tenga un terminado final de excelencia y larga duración.
            </p>
            <Header textAlign="center">NUESTRA MISIÓN</Header>
            <p>
              En EXMEX nuestra misión es ser una empresa dedicada a la fabricación de equipos de la más alta calidad para satisfacer las necesidades de nuestros clientes dentro del sector restaurantero, juguerías, hotelero y comedores industriales, donde cada comprador este satisfecho en la adquisición de su producto.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}

export default About;
