import React from 'react';
import Header from './components/Title';
import GitHubSearch from './components/GitHubSearch';
import { Container } from 'semantic-ui-react';

const App = () => {
  return (
    <Container>
      <section name='title'>
        <Header />
      </section>
      <section name='main'>
        <GitHubSearch />
      </section>
    </Container>
  );
};

export default App;
