import Layout, { Content, Header, Footer } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RegistrarIncidente from './components/RegistrarIncidente';
import RegistrarPrestamo from './components/RegistrarPrestamo';

function App() {
  const [picked, setPicked] = useState("one")

  const showForm =(str: string) => {
    setPicked(str)
  }

  return (
    <Layout>
      <Header>
      <Navbar showForm={showForm}/>
      </Header>
      <Content style={{ padding: '8vh 5vw' }}>
      {picked === "one" ?
        <RegistrarPrestamo />
        :
        <RegistrarIncidente />
      }

      </Content>
      <Footer style={{ textAlign: 'center' }}>Fundación Universitaria Catolica del Norte ©2023</Footer>
    </Layout>
  );
}

export default App;
