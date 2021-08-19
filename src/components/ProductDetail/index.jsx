import React from 'react';
import { useRouteData } from 'react-static';
import {
  Grid, Header, Embed,
} from 'semantic-ui-react';
import ImageViewer from './ImageViewer';

function ProductDetail() {
  const { producto } = useRouteData();
  const {
    producto: nombreProducto, descripcion, tipoEspecificacion, video, imagenes,
  } = producto;
  return (
    <Grid padded>
      <Grid.Row centered>
        <Grid.Column width="7">
          <ImageViewer images={imagenes} />
        </Grid.Column>
        <Grid.Column width="9">
          <Grid>
            <Grid.Row>
              <Grid.Column width="16">
                <Header>{nombreProducto}</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="8" textAlign="justified">
                {
                  descripcion.map((description) => (
                    <p>{description}</p>
                  ))
                }
              </Grid.Column>
              <Grid.Column width="7">
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
  );
}

export default ProductDetail;
