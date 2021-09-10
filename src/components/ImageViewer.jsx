import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Grid, Image,
} from 'semantic-ui-react';

function ProductImage({ setCurrentImage, image }) {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  return (
    <Grid key={image}>
      <Grid.Row className="clear-padding-bottom">
        <Grid.Column width="16">
          <Image
            onClick={() => setCurrentImage(image)}
            style={{ cursor: 'pointer' }}
            src={image}
            fluid
            bordered
            onLoad={() => setLoading(false)}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

ProductImage.propTypes = {
  setCurrentImage: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

function ImageViewer({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  return (
    <Grid padded>
      <Grid.Row centered>
        <Grid.Column
          computer="3"
          tablet="5"
          mobile="3"
        >
          {
            images.map((image) => (
              <ProductImage image={image} setCurrentImage={setCurrentImage} />
            ))
          }
        </Grid.Column>
        <Grid.Column
          computer="11"
          tablet="11"
          mobile="13"
        >
          <Image
            src={currentImage}
            fluid
            onLoad={() => setLoading(false)}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

ImageViewer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

ImageViewer.defaultProps = {
  images: [],
};

export default ImageViewer;
