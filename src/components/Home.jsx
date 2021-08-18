import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

function Home() {
  return (
    <Grid padded>
      <Grid.Row className="clear-padding-top">
        <Grid.Column className="clear-padding-x" width="16" textAlign="center">
          <Image src="https://picsum.photos/1300/300" fluid />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered style={{ paddingTop: '2rem' }}>
        <Grid.Column style={{ color: 'blue' }} className="clear-padding-x" width="10" textAlign="center">
          <Header color="blue" style={{ paddingBottom: '0.5rem' }}>40 AÑOS FABRICANDO CALIDAD Y PRESTIGIO</Header>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus eget semper odio. Proin mauris est, tempor at fringilla sed, porta et ante.
          Maecenas sem orci, blandit et mi non, tristique facilisis purus.
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Home;
