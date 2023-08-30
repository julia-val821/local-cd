declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Sign in using email & password
     * @example
     * cy.loginByCredentials('secret@gmail.com', 'secret')
     */
    loginByCredentials(email: string, password: string): Chainable<any>

    /**
     * Sign in using token & userId
     * @example
     * cy.loginByToken()
     */
    loginByToken(): Chainable<any>
  }
}
