Feature: A user must be able to play the game and see the results
    As a user
    In order to play the game
    I would like to choose between Rock, Paper or Scissors

Background: 
    Given I visit the site 
    Then I should see "Rock Paper or Scissors"

Scenario: One

    When I click on "Rock"
    Then I should see "Your choice is Rock"


Scenario: Two

    When I click on "Paper"
    Then I should see "Your choice is Paper"


Scenario: Three
    When I ckick "Scissors"
    Then I should see "Your choice is Scissors "
