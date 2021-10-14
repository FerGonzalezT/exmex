import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import React from 'react';
import { Link } from 'gatsby';
import {
  Grid, Header, Embed, Button,
} from 'semantic-ui-react';
import ImageViewer from './ImageViewer';
import Layout from './Layout';

function ProductDetail({ pageContext }) {
  const { producto } = pageContext;
  const {
    producto: nombreProducto, descripcion, tipoEspecificacion, video, imagenes, imagenFondo,
  } = producto;
  return (
    <Layout>
      <Helmet>
        {/* General tags */}
        <title>{nombreProducto}</title>
        <meta
          name="description"
          content={descripcion}
        />
        {/* <meta name="image" content={image} /> */}
      </Helmet>
      <Grid className="cover-background" style={{ backgroundImage: `url(${imagenFondo})`, backgroundSize: '100%' }} padded>
        <Grid.Row centered>
          <Grid.Column
            computer="8"
            tablet="16"
            mobile="16"
            verticalAlign="middle"
          >
            <ImageViewer images={imagenes} />
          </Grid.Column>
          <Grid.Column
            computer="8"
            tablet="16"
            mobile="16"
            verticalAlign="middle"
          >
            <Grid>
              <Grid.Row>
                <Grid.Column
                  computer="16"
                  tablet="16"
                  mobile="16"
                  textAlign="center"
                >
                  <Header size="medium">{nombreProducto}</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column
                  computer="8"
                  tablet="16"
                  mobile="16"
                  textAlign="justified"
                >
                  {
                    descripcion.map((description) => (
                      <p style={{ fontSize: '18px' }}>{description}</p>
                    ))
                  }
                  <Button
                    as={Link}
                    labelPosition="left"
                    to="/productos"
                    icon="left chevron"
                    content="Regresar"
                  />
                </Grid.Column>
                <Grid.Column
                  computer="8"
                  tablet="16"
                  mobile="16"
                  textAlign="justified"
                >
                  {
                    tipoEspecificacion.map(({ titulo, especificaciones }) => (
                      <div style={{ marginBottom: '1rem' }}>
                        <Header className="clear-margin-bottom" size="small">{titulo}</Header>
                        {
                          especificaciones.map(({ especificacion, valor }) => (
                            <p className="clear-margin-y" style={{ fontSize: '18px' }}>{`${especificacion}: ${valor}`}</p>
                          ))
                        }
                      </div>
                    ))
                  }
                  {
                    video
                    && (
                      <Embed
                        autoplay
                        active
                        url={video}
                        iframe={{
                          allowFullScreen: true,
                        }}
                      />
                    )
                  }
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}

ProductDetail.propTypes = {
  pageContext: PropTypes.shape({
    producto: PropTypes.shape({
      descripcion: PropTypes.arrayOf(PropTypes.string),
      imagenes: PropTypes.arrayOf(PropTypes.string),
      producto: PropTypes.string,
      tipoEspecificacion: PropTypes.arrayOf(PropTypes.object),
      video: PropTypes.string,
      imagenFondo: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
