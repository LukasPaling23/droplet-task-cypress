import HomePage from '../pages/HomePage';
import { ferrySearchOneWay } from '../helpers/ferrySearchHelper';

describe('Ferry Search Scenarios', ( () => {
    beforeEach(() => {
        HomePage.visit();
        HomePage.clickAcceptCookiesBtn();
      });

    it('should search for a morning ferry from Dover to Calais with P&O Ferries', () => {
        ferrySearchOneWay({from: 'Dover', to: 'Calais', vehicle: 'Car', timeOfDay: 'Morning', operator: 'P&O Ferries'})
    });

    it('should search for an afternoon ferry from Calais to Dover with DFDS Seaways', () => {
        ferrySearchOneWay({from: 'Calais', to: 'Dover', vehicle: 'Camper', timeOfDay: 'Afternoon', operator: 'DFDS Seaways'})
    });
}));