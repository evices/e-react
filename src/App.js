import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Home from './components/home';
import SinglePost from './components/post/single';
import AboutPage from './components/about';
import ContactPage from './components/contact';
import Signup from './components/auth/signup';
import Posts from './components/post';
import Categories from './components/category';//////
import PageNotFound from './components/404';
import PostsCategory from './components/post/postsByCat'
import PostsSearch from './components/postsBySearch'
import Profile from './components/profile';

import './components/common/assets/Fontawesome-all.css';
import './components/common/assets/themify-icons.css';
import './components/common/assets/linearicons.css';
import './App.scss';
import PostsUser from './components/profile/post';

const Main = withRouter(({ location }) => {
  return (
    <React.Fragment>
      {
        location.pathname !== '/signup' && <Header />
      }
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts'>

            <Posts />
          </Route>
          <Route exact path='/single/:id' >
            <SinglePost />
          </Route>
          <Route exact path='/categories'>
            <Categories />
          </Route>
          <Route exact path='/posts/category/:id' component={PostsCategory} />
          <Route exact path='/posts/:title/:category' component={PostsSearch} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/postsuser' component={PostsUser} />
          <Route exact path='/profile' component={Profile} />
          <Route component={PageNotFound} />

      </Switch>
      {
        location.pathname !== '/signup' && <Footer />
      }
    </React.Fragment>
  )
});
function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
