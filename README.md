# book-manager
A program to manage (older) books on the platform.

## Spec
- Every X interval Heroku dyno spins up and executes
- Looks through all books with `avaliable` status, finds
books with `lastRenewed` field more than 6 months old
- Emails users who own these books prompting to renew
- If `lastRenewed` field doesn't exist, then look at `date`
field

## Todo
- [ ] Create Heroku Dyno
- [ ] Make mongoDB connection
- [ ] Create service that finds user email list
