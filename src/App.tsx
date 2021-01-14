import React,{FC,useContext} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Page404 from './pages/404';
import About from './pages/About';
import Homepage from './pages/Homepage';

import { LangContext } from './context/lang';



const App:FC = ()=>{
  const {dispatch:{translate}} = useContext(LangContext);

  return (
    <Router basename="/react-multilang-website">
      <Switch>
        <Route path="/" exact >
          <Homepage translate={translate}/>
        </Route>
        <Route path="/about" exact>
          <About translate={translate}/>
        </Route>
        <Route path="*">
          <Page404 translate={translate}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
