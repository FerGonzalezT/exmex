import React, { useState } from 'react';
import {
  Grid, Image, Icon, Embed, Placeholder,
} from 'semantic-ui-react';
import Layout from '../components/Layout';

function Contact() {
  const [loading, setLoading] = useState(true);
  return (
    <Layout>
      <Grid padded>
        <Grid.Row className="clear-padding-y">
          <Grid.Column className="clear-padding-x" width="16" textAlign="center">
            {
              loading
              && (
                <Placeholder fluid style={{ height: 100 }}>
                  <Placeholder.Image />
                </Placeholder>
              )
            }
            <Image
              src="https://picsum.photos/1300/100"
              fluid
              onLoad={() => setLoading(false)}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column className="clear-padding-x" width="10" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus eget semper odio. Proin mauris est, tempor at fringilla sed, porta et ante.
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered style={{ paddingTop: '1rem' }}>
          <Grid.Column verticalAlign="middle" width="5" textAlign="center">
            <Embed
              placeholder=""
              active
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.9266663526905!2d-103.3250947858284!3d20.67256228619238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1861249b445%3A0xa894b1efbdea4a22!2sEXMEX!5e0!3m2!1ses!2smx!4v1629269134542!5m2!1ses!2smx"
              iframe={{
                allowfullscreen: true,
                loading: 'lazy',
              }}
            />
          </Grid.Column>
          <Grid.Column width="1" />
          <Grid.Column style={{ borderLeft: '3px solid #94dcf6', padding: '0.5rem' }} textAlign="left" verticalAlign="middle" width="6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus eget semper odio.
              Maecenas sem orci, blandit et mi non, tristique facilisis purus.
              Maecenas sem orci, blandit et mi non, tristique facilisis purus.
            </p>
            <Icon link name="whatsapp" size="large" />
            <Icon link name="facebook" size="large" />
            <Icon link name="instagram" size="large" />
            <Icon link name="youtube" size="large" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}

export default Contact;
