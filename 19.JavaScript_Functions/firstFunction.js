function singSong(){
    console.log("Do");
    console.log("Re");
    console.log("Mi");
}

function greet(firstName, lastName){
    console.log(`Hey there, ${firstName} ${lastName}.`)
}

function repeat(str, numTimes){
    let result = '';
    for(let i = 0; i < numTimes; i++){
        result += str;
    }
    console.log(result);
}

function add(x, y){
    let total = x + y;
    return total;
}