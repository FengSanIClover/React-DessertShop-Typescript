import React from 'react';
import 'asset/styles/Default.scss';
import Layout from '../../containers/Layout';

const App: React.FC = () => {

  return (
    <div className="App">
      <Layout>
        children
      </Layout>
    </div>
  );
}

export default App;
