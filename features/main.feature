Feature: A player must be able to play and see the results

    As a player  
    In order to play the game
    I would like to be able to play and then see the results

Scenario: Player visit the site 
    Given I visit the site 
    Then I should see "Rock Paper Scissor"
    And i click on "Rock"
    And i click on "Paper"
    And i click on "Scissors"

