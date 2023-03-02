let input = prompt("What would you like to do?");
const todo = ["Collect Chicken Legs", "Clean cat litter box"];
while (input !== "quit" && input !== "q") {
    if (input === 'list') {
        console.log("**********************");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);

        }
        console.log("**********************");
    } else if (input === 'new') {
        console.log("**********************");
        const newtodo = prompt("So what else wpuld you like to do");
        todo.push(newtodo);
        console.log(`${newtodo} added to the list`);
        console.log("**********************");
    } else if (input === 'delete') {
        console.log("**********************");
        const index = prompt("Enter the index of list you want to delete");
        todo.splice(index, 1);
        console.log(`Index ${index} deleted from list`);
        console.log("**********************");

    }
    input = prompt("what would you like to do");
}

console.log("You Quit the APP")

