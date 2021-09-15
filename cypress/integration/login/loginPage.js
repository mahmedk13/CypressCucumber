const USERNAME_INPUT = '#un'
const PASSWORD_INPUT = '#pw'
const SUBMIT_BUTTON = 'input[value="Sign In"]'
const USER_OPTIONS_MENU = 'a[aria-label="Open user options menu"]'
const SIGNOUT_BUTTON = "//button[normalize-space()='Sign Out']"

class LoginPage {

   navigateToApp() {
    cy.visit('/')
  }

   enterUserName(username) {
    cy.get(USERNAME_INPUT).type(username)
  }

   enterPassword(password) {
    cy.get(PASSWORD_INPUT).type(password)
  }

   submit() {
    cy.get(SUBMIT_BUTTON).click()
  }

  login(username, password){
    this.enterUserName(username);
    this.enterPassword(password);
    this.submit();
  }

  openUserOptionsMenu(){
    cy.get(USER_OPTIONS_MENU).click();
  }

  clickSignout(){
    cy.xpath(SIGNOUT_BUTTON).click();
  }

  logout(){
    this.openUserOptionsMenu();
    this.clickSignout();
  }

  isLoginPageDisplayed(){
    cy.get(USERNAME_INPUT).should('be.visible');
  }

  verifyTitle(title){
    cy.title().should('eq', title);

  }


}

export default LoginPage