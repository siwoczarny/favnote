import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';

const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/twitters" component={Twitters} />
          <Route exact path="/articles" component={Articles} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
