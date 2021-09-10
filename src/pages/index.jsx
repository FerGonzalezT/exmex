import React, { } from 'react';
import '../semantic/semantic.min.css';
import {
  Grid, Image, Header,
} from 'semantic-ui-react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Layout from '../components/Layout';

// const prefixStatic = '/exmex';
const prefixStatic = '';

const data = [
  {
    id: 1,
    image: `${prefixStatic}/producto_home_1.jpg`,
  },
  {
    id: 2,
    image: `${prefixStatic}/producto_home_2.jpg`,
  },
  {
    id: 3,
    image: `${prefixStatic}/producto_home_3.jpg`,
  },
  {
    id: 4,
    image: `${prefixStatic}/producto_home_4.jpg`,
  },
  {
    id: 5,
    image: `${prefixStatic}/producto_home_5_6.jpg`,
  },
  {
    id: 6,
    image: `${prefixStatic}/producto_home_7.jpg`,
  },
  {
    id: 7,
    image: `${prefixStatic}/producto_home_8.jpg`,
  },
];

function Home() {
  // const [loading, setLoading] = useState(true);
  return (
    <Layout>
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
              interval={5000}
              transitionTime={100}
            >
              {data.map(({ image, id }) => (
                <Grid key={id} padded style={{ height: '100%' }}>
                  <Grid.Row centered className="clear-padding-y" style={{ height: '100%' }}>
                    <Grid.Column
                      className="clear-padding-x"
                      width="3"
                      textAlign="center"
                      verticalAlign="middle"
                    >
                      <Image src={image} fluid verticalAlign="middle" />
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
