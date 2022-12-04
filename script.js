//prompt the user if password should be a certain legnth
var passwordLength;
var lengthBo = prompt("should the password be a certain length?")
    while ((lengthBo !== "yes") && (lengthBo !== "no")){
    var lengthBo = prompt("Please answer yes or no")
    }
    if (lengthBo == "no"){
    var passwordLength = 10;
    }
//prompt the user if password should have certain Characters 
var charaBo = prompt("should the password have certain types of Characters")
    while ((charaBo !== "yes") && (charaBo !== "no")){
    var charaBo = prompt("Please answer yes or no")
    }
//If the user wants it to be a certain length, record how long between 8-128
if(lengthBo == "yes"){
    var passwordLength = prompt("how long would you  the password to be")
    while (passwordLength < 8 || passwordLength > 128) {
        if(passwordLength < 8){
            var passwordLength = prompt("password must be at least 8 digits")
        }
        else if(passwordLength > 128){
            var passwordLength = prompt("password cannot be more than 128 digits")
        }
    }
}
//If the user wants it to have certain characters types, record the types
if(charaBo == "yes"){
    var charaUpper = prompt("should the password have Uppercase letters?")
    while ((charaUpper !== "yes") && (charaUpper !== "no")){
    var charaUpper = prompt("Please answer yes or no")
    }
    var charaLower = prompt("should the password have Lowercase letters?")
    while ((charaLower !== "yes") && (charaLower !== "no")){
    var charaLower = prompt("Please answer yes or no")
    }
    var charaNumber = prompt("should the password have Numbers?")
    while ((charaNumber !== "yes") && (charaNumber !== "no")){
    var charaNumber = prompt("Please answer yes or no")
    }
    var charaSpecial = prompt("should the password have special Characters?")
    while ((charaSpecial !== "yes") && (charaSpecial !== "no")){
    var charaSpecial = prompt("Please answer yes or no")
    }
    if ((charaUpper == "no") && (charaLower !== "no")&& (charaNumber !== "no")&& (charaSpecial !== "no")){
        prompt("nothing selected, disregarding Character selected")
        var charaBo = "no";
        }

}
//Combine the chosen character types , or use all if none chosen
var chars = "";
if (charaBo == "yes"){
        if (charaUpper == "yes"){
        chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if (charaLower == "yes"){
            chars = chars + "abcdefghijklmnopqrstuvwxyz"
        }
        if (charaNumber == "yes"){
            chars = chars + "0123456789"
        }
        if (charaSpecail == "yes"){
            chars = chars + "!@#$%^&*()"
        }
    }

var password=document.getElementById("password");

function passwordGen() {
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
        console.log(password)
 }



function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}