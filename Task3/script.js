// 3. On contact page prompt user to enter his name, 
// make sure that name is string, and let the user enter his birth year and 
// make sure that it is a number, and it is less than 2010, and then calculate his age.
// For each prompt if user input valid show him next prompt,
// if not valid show him the same prompt again until user enters it correctly (use loops).
// And after validating user input, write all user input on the page in that format:
// Name: ahmed
// Birth year: 1981
// Age: 30


// Function to validate name (ensure it's a string)
function validateName() {
    let name;
    while (true) {
        name = prompt("Please enter your name:");

        // Check if name is not empty and contains only letters (simple check)
        if (name && /^[A-Za-z\s]+$/.test(name)) {
            break; // Valid name, exit the loop
        } else {
            alert("Invalid name. Please enter a valid name containing only letters.");
        }
    }
    return name;
}

// Function to validate birth year (ensure it's a number and less than 2010)
function validateBirthYear() {
    let birthYear;
    while (true) {
        birthYear = prompt("Please enter your birth year:");

        // Check if birthYear is a valid number and less than 2010
        if (!isNaN(birthYear) && birthYear < 2010) {
            break; // Valid birth year, exit the loop
        } else {
            alert("Invalid birth year. Please enter a number less than 2010.");
        }
    }
    return birthYear;
}

// Function to calculate age based on birth year
function calculateAge(birthYear) {
    // new Date(): This creates a new Date object that holds the current date and time.
    // .getFullYear(): This method extracts the current year (e.g., 2024).
    let currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

//all user input on the page
function Information() {
    let name = validateName();
    let birthYear = validateBirthYear();
    let age = calculateAge(birthYear);

    // Display the results on the page
    document.body.innerHTML = `
        <h1>Information of ${name}</h1>
        <p>Name: ${name}</p>
        <p>Birth Year: ${birthYear}</p>
        <p>Age: ${age}</p>
    `;
}

// Call the main function to start the process
Information();
