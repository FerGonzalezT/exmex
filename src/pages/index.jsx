import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../semantic/semantic.min.css';
import {
  Grid, Image, Header, Transition,
} from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Layout from '../components/Layout';
import { prefixStatic } from '../constants';

const data = [
  {
    id: 1,
    image: `${prefixStatic}/producto_home_1.png`,
  },
  {
    id: 2,
    image: `${prefixStatic}/producto_home_2.png`,
  },
  {
    id: 3,
    image: `${prefixStatic}/producto_home_3.png`,
  },
  {
    id: 4,
    image: `${prefixStatic}/producto_home_4.png`,
  },
  {
    id: 5,
    image: `${prefixStatic}/producto_home_5_6.png`,
  },
  {
    id: 6,
    image: `${prefixStatic}/producto_home_7.png`,
  },
  {
    id: 7,
    image: `${prefixStatic}/producto_home_8.png`,
  },
];

function Home() {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(true);

  return (
    <Layout>
      <Helmet>
        {/* General tags */}
        <title>EXMEX</title>
        <meta name="description" content="Exmex, la excelencia en calidad de equipos industriales para tu negocio, los cuales brindan una alta producción para jugos naturales, hielo triturado y salsas en corto tiempo." />
        {/* <meta name="image" content={image} /> */}
      </Helmet>
      <Grid padded>
        <Grid.Row
          centered
          className="clear-padding-top"
        >
          <Grid.Column
            className="clear-padding-x"
            width="16"
            textAlign="center"
            verticalAlign="middle"
          >
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              useKeyboardArrows
              stopOnHover={false}
              interval={4000}
              onChange={async () => {
                await setVisible(false);
                await setVisible2(true);
                await setVisible(true);
              }}
              transitionTime={0}
            >
              {data.map(({ image, id }) => (
                <Grid key={id} padded style={{ height: '100%' }}>
                  <Grid.Row centered className="clear-padding-y" style={{ height: '100%' }}>
                    <Grid.Column
                      className="clear-padding-x"
                      computer="3"
                      tablet="5"
                      mobile="6"
                      textAlign="center"
                      verticalAlign="middle"
                    >
                      <Transition
                        animation="scale"
                        onComplete={() => setVisible2(false)}
                        duration={{ hide: 1000, show: 3000 }}
                        visible={visible && visible2}
                      >
                        <Image src={image} fluid verticalAlign="middle" />
                      </Transition>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              ))}
            </Carousel>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered style={{ paddingTop: '2rem' }}>
          <Grid.Column
            className="clear-padding-x blue-color"
            computer="10"
            tablet="12"
            mobile="15"
            textAlign="center"
          >
            <Header color="blue" size="huge" style={{ paddingBottom: '0.5rem' }}>
              40 AÑOS FABRICANDO CALIDAD Y PRESTIGIO
            </Header>
            <p>
              Exmex, la excelencia en calidad de equipos industriales para tu negocio, los cuales brindan una alta producción para jugos naturales, hielo triturado y salsas en corto tiempo.
              Enviamos nuestros productos a cualquier parte de la república mexicana con la mejor atención y servicio.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}

export default Home;
