import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom"


//Viems
// import AllCountrys from './views/Home/AllCountrys';
import PageCountryDetails from './views/Details/PageCountryDetails';
import Search from './views/Search/Search';
import ShowError from './components/ShowError';

//Components
import Loader from './components/Loader';

//Styles
import './App.css';
const AllCountrys = lazy(() => import('./views/Home/AllCountrys'));

const App = () =>  {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={<Loader />}>
            <AllCountrys />
          </Suspense>
        </Route>

        <Route path="/search" exact>
          <Suspense fallback={<Loader />}>
            <Search />  
          </Suspense>
        </Route>

        <Route path="/details/:code" exact>
          <Suspense fallback={<Loader />}> 
            <PageCountryDetails />
          </Suspense>
        </Route>

        <Route path="*">
          <Suspense fallback={<Loader />}> 
            <ShowError />
          </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
