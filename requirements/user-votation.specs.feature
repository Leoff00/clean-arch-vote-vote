Feature: Clients

Scenario: Client voted
Given Clients send a votation
And Will vote for the 1st time
And Have 2 competitors
Then the competitor target receive the votation

Scenario: Client ain't voted
Given Client doesn't have an account
Then Client need to be logged and can make votations


Feature: Votation 

Scenario: Votation is online
Given Client had an account
And Had disponible votations
Then Client can vote

Scenario: Votation ended
Given Votation isn't disponible
And Clients are trying to vote
Then They can't submit a vote



