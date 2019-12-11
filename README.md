# password-generator
https://ald2424.github.io/password-generator/
This is a program that will assign the user a password based on user selected criteria.

I used a Bootstrap Jumbotron and Card Body to design the index page that will display the password.

I started my javascript code by creating seperate arrays for special characters, lowercase letters, uppercase letters, and numbers.
I ask the user in a prompt the length they want their random password to be.  This number is stored in a variable called "howMany" and I store this part of the code 
inside of a function.
Once the user enters something inside of the prompt, I set a while loop to verify that the user entered a number and that the number is between 8 and 17.  If 
the user entered anything else, an alert will appear asking the user to try again and the function will run again until the right criteria is met.

Next, a function will run that asks the user if they want to use special characters, uppercase letters, lowercase letters, and/or numbers. when they select yes, the array 
that I created at the beginning of the code will be added into another array. This way I can get all of the user's choices into the same array. I set up another while
loop that will keep running this function until the user chooses at least two of these choices.

To randomize the new array, I run a function that uses the Fisher-Yates method to shuffle the array.  I then use the variable howMany to slice the array to make the 
new password contain the amount of characters that the user selected in the first prompt.

I then remove the commas seperating the array values and display the new random password on the webpage.

The one flaw in my method of creating a random password, is that the password may not always contain each type of character the user selected to add.
For instance, the user may have wanted the program to generate a password containing uppercase, lowercase, and numbers.  But my shuffle method may produce a password
that consists only of lowercase letters and numbers and not include and uppercase letters.

