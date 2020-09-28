import React from "react";
import ItemList from "../item-list/item-list";
import withData from "../hoc-helpers/with-data";
import withSwapiService from '../hoc-helpers/with-swapi-service';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};
const renderName = ({ name }) => <span>{name}</span>;

const ListWithChildren = withChildFunction(ItemList, renderName);

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};
const mapStarshipsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};
const PersonList = withSwapiService(withData(ListWithChildren), mapPersonMethodsToProps);
const PlanetList = withSwapiService(withData(ListWithChildren), mapPlanetMethodsToProps);
const StarshipList = withSwapiService(withData(ListWithChildren), mapStarshipsMethodsToProps);

export { PersonList, PlanetList, StarshipList };
 