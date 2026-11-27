let hen = document.getElementById("scam-text");

function kleur_veranderen() {
    document.getElementById("la-ith").style.color = "red";
    document.getElementById("la-ith").textContent = "get scammed";
}

function scam() {
  hen.style.color = "red";
    hen.textContent = "oops! try again";
    blah();
}

function blah() {
    setTimeout(function() {
hen.style.color = "black";
        hen.textContent = "click here instead!"
}, 1000);

}   