// 4. Make function that write “welcome to my page” 6 times
// using h1 to h6 header sizes using one line (document.write) 
// javascript code “see attached image” .
// (Use for loop, and don’t use h1 to h6 explicitly).

function writeWelcome() {
    for (let i = 1; i <= 6; i++) {
        document.write(`<h${i}>This is header number ${i}</h${i}>`);
    }
}

writeWelcome();
