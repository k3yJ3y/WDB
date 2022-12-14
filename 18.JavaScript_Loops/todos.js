// TODO LIST

const list = [];

let whatToDo = prompt("What would you like to do???")

while(whatToDo !== "quit"){

    if (whatToDo === "new"){
        let item = prompt("add item");
        list.push(item);
        console.log(`${item} added to the list.`)
    } else if (whatToDo === "list"){
        console.log("*****************");
        for (let i = 0; i < list.length; i++){
            console.log(`${i}: ${list[i]}`);
        }
        console.log("*****************");
    } else if (whatToDo === "delete"){
        let deleteIndex = parseInt(prompt("Enter the indeks of item you wish to delete."));
        list.splice(deleteIndex, 1);
        console.log("TODO Removed.")
    }
    whatToDo = prompt("What would you like to do???");
}

