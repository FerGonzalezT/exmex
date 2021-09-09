import React, { } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Grid, Image, Header,
} from 'semantic-ui-react';
import Layout from '../components/Layout';
import backgroundImage from '../images/FONDO PAGINA PRINCIPAL.jpg';
import product1 from '../images/producto_home_1.jpg';

function Home() {
  // const [loading, setLoading] = useState(true);
  return (
    <Layout>
      <Grid padded>
        <Grid.Row className="clear-padding-top">
          <Grid.Column
            className="clear-padding-x"
            width="16"
            textAlign="center"
            verticalAlign="middle"
          >
            <Image
              src={backgroundImage}
              fluid
            />
            <Grid className="front-grid" padded style={{ height: '100%' }}>
              <Grid.Row className="clear-padding-y" centered style={{ height: '100%' }}>
                <Grid.Column
                  className="clear-padding-x"
                  computer="3"
                  tablet="3"
                  mobile="3"
                  textAlign="center"
                  verticalAlign="middle"
                >
                  <Image
                    fluid
                    src={product1}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered style={{ paddingTop: '2rem' }}>
          <Grid.Column
            style={{ color: 'blue' }}
            className="clear-padding-x"
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
