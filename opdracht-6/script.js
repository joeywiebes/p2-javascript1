function kleur_veranderen() {
    document.getElementById("habibi").style.color = "red";
    document.getElementById("habibi").textContent = "Inhoud aangepast!";
}



setTimeout(function() {
    kleur_veranderen();
}, 2000);
