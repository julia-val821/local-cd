// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {SignInPage} from '../pages'

Cypress.Commands.add('loginByCredentials', (email, password) => {
  SignInPage.open()
  SignInPage.signIn(email, password)
})

Cypress.Commands.add('loginByToken', () => {
  cy.visit('/')
  window.localStorage.setItem('token', Cypress.env('token'))
  window.localStorage.setItem('userId', Cypress.env('userId'))
  window.localStorage.setItem('lang', 'en')
})
