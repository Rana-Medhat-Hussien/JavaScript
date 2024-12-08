// 2.  Make a function that takes today’s temperature as a            
//     parameter, prints: “HOT” if the entered temperature are more than or equals 30
//     and “Cold” if it’s less than 30 (use ternary conditional operator).

function checkTemperature(temp) {
    // Use the ternary operator to determine and print "HOT" or "Cold"
    let result = temp >= 30 ? "HOT" : "Cold";
    document.body.innerHTML = `<h1>${result}</h1>`; // Displays on the page
}

// Loop until a valid number is entered
let todayTemp;
while (true) {
    let userInput = prompt("Enter today's temperature:");
    todayTemp = parseFloat(userInput); // Convert input to a number

    if (!isNaN(todayTemp) && todayTemp.trim() !== "") {
        // Break the loop if the input is a valid number
        break;
    } else {
        alert("Invalid input. Please enter a valid number for the temperature.");
    }
}

// Call the function with the valid temperature
checkTemperature(todayTemp);