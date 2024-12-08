// 1. On your page, show alert for the user that say “Welcome to my site”,
//  then show him prompt ask him to enter his name and 
//  write to the page  “ welcome + his name”. 
 //(Remark what happen to the home page after writing welcome page)

    alert("Welcome to my site");

        let userName;
        while (true) {
            // Prompt the user to enter their name
            userName = prompt("Please enter your name:");

            // Validate the input
            if (userName && /^[A-Za-z\s]+$/.test(userName)) {
                break; // Exit the loop if the input is valid
            } else {
                alert("Invalid input. Please enter a valid name.");
            }
        }

        // Write the welcome message to the page
        document.body.innerHTML = `<h1>Welcome, ${userName.trim()}!</h1>`;
