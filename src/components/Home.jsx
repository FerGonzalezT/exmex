import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

function Home() {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column width="16" textAlign="center">
          <Image src="https://picsum.photos/1300/500" fluid />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column className="clear-padding-x" width="16" textAlign="center">
          HOME Dionicio Rodriguez #900 Sector Libertad, Guadalajara Jalisco
          Tel: 01 (33) 3617-9534 / 01 (33) 3617-8814
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Home;
