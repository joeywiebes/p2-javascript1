// Vraag stellen (pop-up)


// Antwoord opslaan in variabele
let naam = prompt("Wat is je naam");

setTimeout(function() {
    document.getElementById("BBL").textContent = "hallo " + naam;
}, 2000);



console.log("test");

alert("hallo " + naam);