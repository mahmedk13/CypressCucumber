Feature: Login to Application

              As a valid user
              I want to log into Application
        
        Background:
            Given invoke function "navigateToApp"
    
        Scenario: Valid Login
             When invoke function "login" with
                  | username              | password       |
                  | cpars.cor@fda.hhs.gov | Appianalp@1818 |
             Then invoke function "verifyTitle" with "COR Home - FDA CPARS Compliance Tracking System (COR)"

        Scenario: Valid Logout
             When invoke function "login" with
                  | username              | password       |
                  | cpars.cor@fda.hhs.gov | Appianalp@1818 |
             When invoke function "logout"
             Then invoke function "isLoginPageDisplayed"
