/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Grid, Image, Header, Placeholder,
} from 'semantic-ui-react';

function About() {
  const [loading, setLoading] = useState(true);
  return (
    <Grid padded>
      <Grid.Row className="clear-padding-y">
        <Grid.Column
          className="clear-padding-x"
          width="16"
          textAlign="center"
        >
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
        <Grid.Column className="clear-padding-x" width="10" textAlign="justified">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl mauris. Vivamus sollicitudin dictum nisl, vel iaculis enim semper ut. Aenean sit amet lacus at quam sollicitudin bibendum. Sed vitae consequat neque. Nunc vulputate efficitur quam vitae porttitor. Nullam et purus eu lectus auctor vulputate a eu urna. Praesent auctor pellentesque gravida. Phasellus nec metus non leo dapibus commodo. Nunc dignissim auctor leo, hendrerit egestas dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec varius tortor ex, ac efficitur nisl feugiat et. Nam vitae massa ullamcorper, porttitor justo eget, viverra ante. Nunc elit est, tincidunt ut elementum blandit, egestas ac urna. Maecenas justo mi, laoreet sed viverra vitae, commodo sit amet est. Proin in metus quis ex fringilla iaculis non nec turpis.
          </p>
          <p>
            Nunc ultrices ipsum eget nisl tristique, eget rhoncus elit aliquet. Phasellus porta feugiat orci, eu pellentesque metus sollicitudin id. Vivamus tempus neque lectus, quis pretium magna pulvinar ut. Mauris ac metus ut leo dapibus feugiat. Pellentesque a eros auctor, finibus purus et, cursus nulla. Morbi dapibus felis quam, eu commodo leo porttitor a. In tellus augue, rutrum sed efficitur at, condimentum hendrerit ante. Proin suscipit diam a sapien rutrum, quis fermentum justo vehicula. Sed a arcu ex. Phasellus suscipit feugiat malesuada. Nulla vulputate finibus molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus in mi nec enim porttitor ornare. Pellentesque in lectus et nisi ornare tempor. Sed et elit vitae metus vulputate efficitur in a arcu.
          </p>
          <Header textAlign="center">NUESTRA MISION</Header>
          <p>
            Praesent tempor ultrices luctus. Morbi iaculis dictum pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque risus velit, sed pretium lectus aliquam sagittis. Aenean sodales ullamcorper augue non auctor. Nulla non elit id justo dapibus mollis quis at augue. Maecenas magna erat, pulvinar id rutrum nec, tempus id quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam varius condimentum ante, in pretium velit facilisis ultricies. Sed molestie vitae libero eget tempor. Cras cursus gravida ante, a interdum orci pretium ut. Sed augue diam, tempus pulvinar eros eget, fringilla facilisis magna. Donec finibus sodales facilisis. Ut vel nulla elit.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default About;
