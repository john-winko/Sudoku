# Sudoku full stack app

Django with REST framework backend with React front end. Some features enable for anonymous users, more features available when logged in (auth)

## Features
- Login/Logout
- Playable board
  - Cell selection
  - Keyboard entry of "guesses" based on selected cell
  - Toggled viewing remaining cell candidates (auth)
    - Clicking view/hide on individual candidates
- Ability to solve up to medium difficulty puzzles step by step (no backtracking)
- Hints
  - Highlights wrong answers
  - Solves for next step with which algorithm was needed
    - Naked Single
    - Hidden Single
    - Pointed Pair
    - Naked Pair
    - Hidden Pair

## Development setup
Clone down repo

Create virtual environment

Install requirements

Create .env variables
