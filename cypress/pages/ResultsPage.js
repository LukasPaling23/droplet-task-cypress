class ResultsPage {
    elements = {        
    };

    selectResultWithOperator(operator) {
        cy.contains('.xlc1sh0', operator) 
        .closest('.wcsiv97') 
        .find('button:contains("Select")')
        .click();
    }
}

module.exports = new ResultsPage();