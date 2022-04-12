# Questions
- Is there a better way of handling the axios headers with csrf? refactor into a post/get function?


# Working
- Generate candidates api call
- Auto deletes for no progress puzzles
- Save progress
- Pull logged in info
- consolidate async/awaits
- refactor start game to pass in boardID (from game history)


# Backlog
- Add footer
- Page refresh clears logged in user, add check on page load
- Backend, make html friendly descriptions of solution steps
- Add signup
- Add instructions to hint screen (select cell, keyboard entry etc)
- Add in difficulties
- Refactor User model to have a saved board instead of using last board
- Change start game to go into modal form to select difficulty



# Stretch goals
- timer based progress
  - leaderboards
- Start with a blank board, only create new game when asked