Feature: A user must be able to play the game and see the results
    As a user
    In order to play the game
    I should be able to choose and play the game

Background: 
    Given I visit the site

Scenario: The computer should let the user choose the game and get the results
    When I click on start button
    Then I should choose between "Rock", "Paper" ou "Scissors" 
    Then I should be able to play
    And see the results

