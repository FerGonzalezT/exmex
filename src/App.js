/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Grid } from 'semantic-ui-react';
import { Link, Router } from './components/Router';
import Dynamic from './containers/Dynamic';
import Header from './components/Header';
import Footer from './components/Footer';

import './app.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <Grid padded>
        <Grid.Row className="clear-padding-y">
          <Grid.Column className="clear-padding-x" width={16}>
            <Header />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ minHeight: '57vh' }}>
          <Grid.Column width={16}>
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Dynamic path="dynamic" />
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="clear-padding-bottom">
          <Grid.Column className="clear-padding-x" width={16}>
            <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Root>
  );
}

export default App;
