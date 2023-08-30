class BasePage { //constructor all pages.this base page
  get toast() {
    return cy.get('.ant-notification-notice-message') //message on all pages.here can add selectors and methods from all pages
  }
}

export default BasePage
