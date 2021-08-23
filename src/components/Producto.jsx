import PropTypes from 'prop-types';
import React from 'react';
import {
  Grid, Header, Embed,
} from 'semantic-ui-react';
import ImageViewer from './ImageViewer';
import Layout from './Layout';

function ProductDetail({ pageContext }) {
  const { producto } = pageContext;
  const {
    producto: nombreProducto, descripcion, tipoEspecificacion, video, imagenes,
  } = producto;
  return (
    <Layout>
      <Grid padded>
        <Grid.Row centered>
          <Grid.Column
            computer="7"
            tablet="15"
            mobile="15"
          >
            <ImageViewer images={imagenes} />
          </Grid.Column>
          <Grid.Column
            computer="9"
            tablet="15"
            mobile="15"
          >
            <Grid>
              <Grid.Row>
                <Grid.Column
                  computer="16"
                  tablet="15"
                  mobile="15"
                >
                  <Header>{nombreProducto}</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column
                  computer="8"
                  tablet="15"
                  mobile="15"
                  textAlign="justified"
                >
                  {
                    descripcion.map((description) => (
                      <p>{description}</p>
                    ))
                  }
                </Grid.Column>
                <Grid.Column
                  computer="7"
                  tablet="15"
                  mobile="15"
                >
                  {
                    tipoEspecificacion.map(({ titulo, especificaciones }) => (
                      <div style={{ marginBottom: '1rem' }}>
                        <Header className="clear-margin-bottom" size="tiny">{titulo}</Header>
                        {
                          especificaciones.map(({ especificacion, valor }) => (
                            <p className="clear-margin-bottom">{`${especificacion}: ${valor}`}</p>
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
    }),
  }).isRequired,
};

export default ProductDetail;
