import React, { Fragment, } from 'react';
import { Route } from 'react-router';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav bar/NavBar';
import './App.css';
import PostDashboard from '../../features/posts/postsDashboard/PostDashboard';
import PostForm from '../../features/posts/postForm/PostForm';

function App() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container className='main'>
            <Route path='/posts' component={PostDashboard} />
            <Route path='/postform' component={PostForm} />
          </Container>
        </>
      )} />
      {/* anthing that has forwardslash and anything else we want to render it diffrently */}
      {/* if we hitting forwardslash and anything else we want to render what it inside this route/ */}
    </>
  );
}

export default App;
