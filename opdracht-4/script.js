//variable;
let age = prompt("what is je geboortejaar?");
let geboortejaar = 2026 - age;
//document
document.getElementById("leeftijd").textContent = "je leeftijd is " + Number(geboortejaar);

//als dit niet werkt kun je ook geboortejaar tussen () doen en er number voor zetten, 
// zodat javascript weet dat het een nummer hoort te zin.

//dit berekent de leeftijd ^
//                         |