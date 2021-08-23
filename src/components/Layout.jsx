import PropTypes from 'prop-types';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';

function Layout({ children }) {
  return (
    <Grid padded>
      <Grid.Row className="clear-padding-y">
        <Grid.Column className="clear-padding-x" width={16}>
          <Header />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="clear-padding-y" style={{ minHeight: '57vh' }}>
        <Grid.Column className="clear-padding-x" width={16}>
          {children}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="clear-padding-bottom">
        <Grid.Column className="clear-padding-x" width={16}>
          <Footer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
