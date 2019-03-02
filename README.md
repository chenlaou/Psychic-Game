# Psychic-Game
Javascript Project

For this assignment we are using only Javascript to build a game where the user can guess at a random letter. I've created an array consisting of all of the possible letter choices along with variables to hold specific values. 
The game will begin with the user's win and loss count set at zero. The user will have 9 guesses to determine whether they will win that round. If the user guess matches the computer's the wins will increase by +1. Each incorrect guess will increase the losses. Once all 9 guesses have been used up, the letters will clear and the guess count will reset back to 9. 
The vital part to make this work is the document.onkey up = function (event) 
