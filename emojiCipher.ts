let alphabetLetters:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let alphabetEmojis:string[] = ["😦", "👶", "😭", "😈","🤯", "🍉", "☠️", "🔥", "🧐", "🤤", "🥶", "😜", "🤑", "😡", "😮", "🐱", "🤔", "🥹", "😴", "🫠", "🥳", "🥸", "🥵", "🤬", "👽", "😸", "🫥", "👿", "😳", "🥺", "🤧", "🤢", "🤭", "🥲", "😂", "🤐", "😶‍🌫️"];
let userInput:any = null;
let selection:unknown = null;

//Function call
chooseType();



//Functions

//User chooses if they want to encrypt or decrypt something
function chooseType(){
    selection = prompt("Enter 1 for encryption, or 2 for decryption.");
    if(selection == 1){
        createEncryptionInput();
        
    }   else if(selection == 2){
        createDecryptionInput();
    }  else{
        console.log("smh enter a VALID number");
        chooseType();
    }  
}

//User inputs a string to be encrypted into dumbass emojis
function createEncryptionInput(){
    userInput = prompt("Enter a string to be encrypted (numbers, letters, and spaces are acceptable)");
    userInput = userInput.toLowerCase();
    if(isEncryptionValid() == true){
        encrypt();
    } else{
        createEncryptionInput();
    }
}

//User inputs a string of stupid emojis to be decrypted
function createDecryptionInput(){
    userInput = prompt ("Enter a string of emojis to be decrypted - Supported emojis include:\n😦👶😭😈🤯🍉☠️🔥🧐🤤🥶😜🤑😡😮🐱🤔🥹😴🫠🥳🥸🥵🤬👽😸🫥👿😳🥺🤧🤢🤭🥲😂🤐😶‍🌫️");
    if(isDecryptionValid() == true){
        decrypt();
    } else{
        createDecryptionInput();
    }
}

//Checks if the string inputted is valid, returns true if valid
function isEncryptionValid(): any { 
    for(let i = 0; i < userInput.length; i++){
        if(alphabetLetters.indexOf(userInput[i]) == -1){
            if(userInput[i] != " "){
                return false;
            }
        }
    }
    return true;
}

//Checks if the decryption string inputted is valid, returns true if valid
function isDecryptionValid(): any { 
    for(let i = 0; i < userInput.length; i++){
        if(alphabetEmojis.indexOf(userInput[i]) == -1){
            if(userInput[i] != " "){
                return false;
            }
        }
    }
    return true;
}

//Inputted string is encrypted and printed to console
function encrypt(){
    let encryptedString:string = "";
    for(let i = 0; i < userInput.length; i++){
        encryptedString += alphabetEmojis[alphabetLetters.indexOf[i]];
    }
    console.log(encryptedString);
}

//Inputted string is decrypted and printed to console
function decrypt(){
    let decryptedString:string = "";
    for(let i = 0; i < userInput.length; i++){
        decryptedString += alphabetLetters[alphabetEmojis.indexOf[i]];
    }
    console.log(decryptedString);
}





//this is so dumb bruh 😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭
