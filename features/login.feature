Feature: Login to saucedemo website

  Scenario: User should see "Epic sadface: Username is required" error message
    Given User is located on the main page of saucedemo website
    When User click "Login" button
    Then User should see "Epic sadface: Username is required" error message
