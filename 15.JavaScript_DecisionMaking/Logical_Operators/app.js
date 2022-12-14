const password = prompt("Enter password");

if (password.length >= 6 && password.indexOf(" ") === -1){
    console.log("Valid password.");
} else{
    console.log("Password not valid.");
}