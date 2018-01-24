import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import HomePage from './pages/Home';
import PersonDetail from './pages/PersonDetail';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/users/:userName" component={PersonDetail}/>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
