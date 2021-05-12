Feature: Oracle login test
  Scenario Outline: As a user, I can log into the secure area

    Given Open oracle's login page
    When Enter username and password of <users>
    Then Check the account is logged in
    Then Reload session

    Examples:
      | users | 
      | "validlogin" | 

  Scenario Outline: As a user, I can log into the secure area

    Given Open oracle's login page
    When Enter username and password of <users>
    Then Check the error message

    Examples:
      | users | 
      | "invalidlogin" |