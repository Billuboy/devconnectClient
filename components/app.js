import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import login from './auth/login';
import register from './auth/register';
import posts from './posts/posts';
import dashboard from './dashboard/dashboard';
import profileForm from './dashboard/profileForm/profileForm';
import education from './dashboard/profileForm/educationForm';
import experience from './dashboard/profileForm/experienceForm';
import devs from './devs/devs';
import dev from './devs/dev';
import comments from '../components/posts/postComments';
import notFound from './notFound';
import PrivateRoute from './privateRoute';

const App = () => {
  return (
    <div id="app">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/login" exact component={login} />
            <Route path="/register" exact component={register} />
            <Route path="/" exact component={posts} />
            <Route path="/devs" exact component={devs} />
            <Route path="/devs/:handle" exact component={dev} />
            <Route path="/post/:id" exact component={comments} />
            <PrivateRoute path="/dashboard" exact component={dashboard} />
            <PrivateRoute path="/profileform" exact component={profileForm} />
            <PrivateRoute path="/education" exact component={education} />
            <PrivateRoute path="/experience" exact component={experience} />
            <Route path="*" exact component={notFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
