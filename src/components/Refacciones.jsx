import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  Grid, Header, Image, Button,
} from 'semantic-ui-react';
import Layout from './Layout';

function ProductImage({ id, imagenPrincipal, descripcion }) {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  return (
    <Grid.Column
      key={id}
      computer="4"
      tablet="4"
      mobile="5"
      textAlign="justified"
      verticalAlign="top"
    >
      <Image
        src={imagenPrincipal}
        bordered
        onLoad={() => setLoading(false)}
        fluid
      />
      <p style={{
        marginBottom: '1.5em', marginTop: 0, paddingLeft: '0.5em', paddingRight: '0.5em',
      }}
      >
        {descripcion}
      </p>
    </Grid.Column>
  );
}

ProductImage.propTypes = {
  id: PropTypes.number.isRequired,
  imagenPrincipal: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};

function SpareParts({ pageContext }) {
  const { refacciones } = pageContext;
  return (
    <Layout>
      <Helmet>
        {/* General tags */}
        <title>EXMEX - Refacciones</title>
        <meta
          name="description"
          content={[
            'Apagador para extractor y exprimidor de jugos', 'disco cortador para extractor automatico de zanahoria en acero inoxidable',
            'disco cortador para extractor de zanahoria en acero inoxidable y aluminio',
            'embutidor para extractor de zanahoria en acero inoxidable',
            'embutidor para extractor de zanahoria en aluminio',
            'filtro para extractor de zanahoria para equipo de acero inoxidable y aluminio',
            'navaja en acero inoxidable para triturador de hielo',
            'Oreja lateral para base de extractor de zanahoria en acero inoxidable',
          ].join('\n')}
        />
        {/* <meta name="image" content={image} /> */}
      </Helmet>
      <Grid padded>
        <Grid.Row centered>
          <Grid.Column
            computer="14"
            tablet="15"
            mobile="15"
          >
            <Header size="huge">
              Refacciones
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          {
            refacciones.map(({ id, imagen, descripcion }) => (
              <ProductImage id={id} imagenPrincipal={imagen} descripcion={descripcion} />
            ))
          }
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column
            computer="14"
            tablet="15"
            mobile="15"
            textAlign="center"
          >
            <Button
              as={Link}
              to="/"
              content="Inicio"
              primary
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}

SpareParts.propTypes = {
  pageContext: PropTypes.shape({
    refacciones: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default SpareParts;
