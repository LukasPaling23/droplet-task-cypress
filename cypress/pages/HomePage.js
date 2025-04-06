class HomePage {
    elements = {
        acceptCookiesBtn: () => cy.get('.cky-notice-btn-wrapper > .cky-btn-accept'),
        oneWayBtn: () => cy.contains('One way'),
        fromInput: () => cy.get('._14u8zo2a > ._19cq9gf7'),
        fromModalSearch: () => cy.get('input._1bexat7'),
        toInput: () => cy.get('._14u8zo29 > ._19cq9gf7'),
        toModalSearch: () => cy.get('input._1bexat7'),
        outboundInput: () => cy.get('.odgbl10 > :nth-child(1) > .eliag80 > :nth-child(2)'),
        passengersAndVehiclesInput: () => cy.get('.lrersl8'),
        confirmBtn: () => cy.contains('Confirm'),
        searchBtn: () => cy.contains('button', 'Search'),
    };

    visit() {
        cy.visit('/');
    };

    clickAcceptCookiesBtn() {
        this.elements.acceptCookiesBtn().click();
    }

    clickOneWayBtn() {
        this.elements.oneWayBtn().click();
    };

    clickFromInput() {
        this.elements.fromInput().click();
    };

    typeFromModalSearch(input) {
        this.elements.fromModalSearch().type(input);
    };

    clickToInput() {
        this.elements.toInput().click();
    };

    typeToModalSearch(input) {
        this.elements.toModalSearch().type(input);
    };

    clickOutboundInput() {
        this.elements.outboundInput().click();
    };

    clickReturnInput() {
        this.elements.returnInput().click();
    };

    clickPassengersAndVehiclesInput() {
        this.elements.passengersAndVehiclesInput().click();
    };

    clickAddVehicleBtn(vehicle) {
        cy.contains(vehicle).then($vehicle => {
            const vehicleContainer = $vehicle.closest('div._8zipti0');
            cy.wrap(vehicleContainer)
              .find('button[data-testid="counter-plus"]')
              .click();
          });
    };

    clickPassengersAndVehiclesConfirm() {
        this.elements.confirmBtn().click();
    }

    clickSearchBtn() {
        this.elements.searchBtn().click();
    }
}

module.exports = new HomePage();