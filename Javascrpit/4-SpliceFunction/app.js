let arr = [3, 5, 7, 'Ahmed', 'Raza', 'Hazim'];

function mySplice(inputs) {

    const indexToDelete = parseInt(prompt("Enter the index of the item you want to delete (0 to " + (arr.length - 1) + "):"), 10);

    if (indexToDelete >= 0 && indexToDelete < arr.length) {
        arr.splice(indexToDelete, 1);
    } else {
        console.log("Invalid index. No item deleted.");
    }

    const indexOfFive = arr.indexOf(5);

    if (indexOfFive !== -1) {
        arr.splice(indexOfFive + 1, 0, ...inputs);
    }

    console.log(arr);
}

const userInput = prompt("Enter values separated by commas:").split(',').map(item => item.trim());
mySplice(userInput);
