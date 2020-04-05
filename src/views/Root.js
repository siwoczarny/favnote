import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/twitters" component={Twitters} />
          <Route exact path="/articles" component={Articles} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
