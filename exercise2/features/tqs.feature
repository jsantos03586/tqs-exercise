Feature: A feature to find FEUP
Scenario: Finding FEUP on internet
    Given I have visited the FEUP page on sigarra.up.pt
    When I go to the searchpage and write "TQS"
    Then the page has 1 result