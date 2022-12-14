// let age = prompt("What is your age?");

// if (age < 18){
//     alert("You are under aged!!! Leave this porn site now!!")
// }else{
//     console.log("Welcome to sexy babzz!!!")
// }

// const dayOfWeek = 'Monday';

// if (dayOfWeek === 'Monday'){
//     console.log("I hate mondays!")
// }else if (dayOfWeek ==='Saturday'){
//     console.log("YAY I love saturdays!")
// }

const password = prompt("Enter password.");

if (password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log("Valid password");
    }else{
        console.log("Password can not contain spaces.");
    }
}else{
    console.log("Password too short. must be 6+ characters.");
}