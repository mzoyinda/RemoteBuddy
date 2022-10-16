import Card from 'components/card/Card';
import { Layout } from 'layout/Layout';
import Choose from 'pages/choose/Choose';
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Card>
          <Choose/>
        </Card>
      </Layout>
    </div>
  );
};

export default App;
