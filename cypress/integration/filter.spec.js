/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Store app testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should input and search values', () => {
    cy.get('#search-value').type('ID 38');
    cy.wait(2000).then((interpection) => {
      expect(localStorage.getItem('finalquery')).to.eq(
        'https://api.koibanx.com/stores?q={"page":1,"search":{"$regex":"ID 38"}}'
      );
    });
  });

  it('should filter status', () => {
    cy.get('.ant-select-selector').click();
    cy.get('.ant-select-item-option-content:first').click();
    cy.wait(2000).then((interpection) => {
      expect(localStorage.getItem('finalquery')).to.eq(
        'https://api.koibanx.com/stores?q={"page":1,"status":"active"}'
      );
    });
  });

  it('should search and filter status', () => {
    cy.get('#search-value').type('ID 40');
    cy.get('.ant-select-selector').click();
    cy.get('.ant-select-selector').click();
    cy.get('.ant-select-item-option-content:last').click();
    cy.wait(2000).then((interpection) => {
      expect(localStorage.getItem('finalquery')).to.eq(
        'https://api.koibanx.com/stores?q={"page":1,"status":"no-active","search":{"$regex":"ID 40"}}'
      );
    });
  });

  it('should sort Comercio in ascending order', () => {
    cy.get('thead').find('th').contains('Comercio').click();
    cy.get('thead')
      .find('th')
      .find('img')
      .first()
      .should('have.attr', 'alt')
      .then((altText) => {
        expect(altText).to.equal('up-arrow');
      });
  });

  it('should sort CUIT in descending order', () => {
    cy.get('thead').find('th').contains('CUIT').click();
    cy.get('thead').find('th').contains('CUIT').click();
    cy.get('thead')
      .find('th')
      .find('img')
      .first()
      .should('have.attr', 'alt')
      .then((altText) => {
        expect(altText).to.equal('down-arrow');
      });
  });

  it('should sort Comercio in descending order and CUIT in ascending', () => {
    cy.get('thead').find('th').contains('Comercio').click();
    cy.get('thead').find('th').contains('Comercio').click();
    cy.get('thead').find('th').contains('CUIT').click();

    cy.get('thead')
      .find('th')
      .find('img')
      .first()
      .should('have.attr', 'alt')
      .then((altText) => {
        expect(altText).to.equal('down-arrow');
      });

    cy.get('thead')
      .find('th')
      .find('img')
      .last()
      .should('have.attr', 'alt')
      .then((altText) => {
        expect(altText).to.equal('up-arrow');
      });
  });
});
