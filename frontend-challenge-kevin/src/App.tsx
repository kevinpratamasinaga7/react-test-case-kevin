import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, theme } from 'antd';
import ArticleList from './components/ArticleList';
import './App.css';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header className='header'>
        <h1 className='app-title'>MyNews</h1>
      </Header>
      <Content className='container'>
        <h1>Top Headlines</h1>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Router>
            <div>
              <Switch>
                <Route path="/" exact component={ArticleList} />
              </Switch>
            </div>
          </Router>
        </div>
      </Content>
      <Footer className='footer'>
        MyNews © {new Date().getFullYear()} created by Kevin Pratama Sinaga
      </Footer>
    </Layout>
  );
};

export default App;
