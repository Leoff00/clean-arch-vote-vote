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

Scenario: Submit vote use case
Given Client had an account
And Had enough votes (10)
And Had disponible votations
When Client votes
Then Client had 9 votes remaining
Then Client can vote 10 times

Scenario: Get votations
Given Client had an account 
And Client was logged in 
When Client trying to get votes
Then Client can list some votations

Scenario: Not enough votes
Given Client hasn't enough votes (10 votes reached).
And Client is trying to vote
When Client submit a vote 
Then Client is unable to submit a vote
