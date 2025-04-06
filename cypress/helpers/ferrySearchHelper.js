import HomePage from '../pages/HomePage';
import ResultsPage from '../pages/ResultsPage';

export function ferrySearchOneWay({ from, to, vehicle, timeOfDay, operator }) {
    HomePage.visit();
    HomePage.clickOneWayBtn();

    HomePage.clickFromInput();
    HomePage.typeFromModalSearch(from);
    cy.contains(from).click();
    
    HomePage.clickToInput();
    HomePage.typeToModalSearch(to);
    cy.contains(to).click()

    HomePage.clickPassengersAndVehiclesInput();
    HomePage.clickAddVehicleBtn(vehicle);
    HomePage.clickPassengersAndVehiclesConfirm();

    HomePage.clickSearchBtn();
    cy.contains(timeOfDay).click()
    cy.contains('Continue').click()
    HomePage.clickSearchBtn();
    
    ResultsPage.selectResultWithOperator(operator);
}