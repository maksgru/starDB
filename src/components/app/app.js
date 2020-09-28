import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import "./app.css";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundary from "../error-boundary/error-boundary";
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import { SwapiServiceProvider } from "../swapi-service-context";
import { StarshipDetails } from "../sw-components";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
          <div>
            <Header />
            <RandomPlanet />
            <Route path='/' exact render={() => <h2>Welcome to StarDB</h2>} />
            <Route path='/people' component={PeoplePage} />
            <Route path='/planets' component={PlanetsPage} />
            <Route path='/starships' exact component={StarshipsPage} />
            <Route path='/starships/:id'
            render={({ match }) => {
              const { id } = match.params; 
              return (
                <StarshipDetails itemId={id}/>
              );
            }} />
          </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
