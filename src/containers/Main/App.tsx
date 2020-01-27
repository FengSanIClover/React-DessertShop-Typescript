import React from 'react';
import 'asset/styles/Default.scss';
import Layout from '../../containers/Layout';
import Home from '../Home';

const App: React.FC = () => {

  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
