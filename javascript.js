// an array of special characters
var specialChar = ["*", "!", "#", "$", "%", "&", "+", "-","/","@","<",">",";",":","^",".","|","?"];

var lowAlpha = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upAlpha = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// generate a random number
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// getting user input
var howMany;

function getUserInput(){
howMany = prompt("How long do you want your password to be? It must contain at least 8 characters");
return;
}

getUserInput();

// verifies that the user input is a number and is an appropriate length
while(isNaN(howMany) || howMany < 8 || howMany > 17 ){
    alert("Error. Please only type a number between 8 and 17");
    getUserInput();
}

// Setting global variables
var addSpecial;
var addUpper;
var addLower;
var addNum;
var yes = 0;
var no = 0;
var password = [];
var specialPassword = []

// this function will determine which arrays to use to generate the password
function yesorNo(){
   specialPassword = password;
    
    addSpecial = confirm("Do you want to add a special character?");
        if(addSpecial){
            specialPassword = specialPassword.concat(specialChar);
            yes++
        }
        else{
            no++;
        }

    addUpper = confirm("Do you want to add uppercase letters?");
        if(addUpper){
            specialPassword = specialPassword.concat(upAlpha);
            yes++;
        }
        else{
            no++;
        }

    addLower = confirm("Do you want to add lower case letters?");
        if(addLower){
            specialPassword = specialPassword.concat(lowAlpha);
            yes++;
        }
        else{
            no++;
        }

    addNum = confirm("Do you want to add numbers?");
        if(addNum){
            specialPassword = specialPassword.concat(num);
            yes++;
        }
        else{
            no++;
        }
}
yesorNo();

// verify that the user selected yes for at least two of the questions
while(yes < 2){
    alert("You must select yes to at least two of these questions");
    yesorNo();
}

// Shuffle the array using Fisher-Yates Shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


specialPassword = shuffle(specialPassword);

// create a new array based off of how many characters the user requested
var newPassword = specialPassword.slice(0, howMany);

// Takes the commas and spacing out of the array
var final = newPassword.join('');

// Prints password on the screen
document.getElementById('cardBody').innerHTML = final;





