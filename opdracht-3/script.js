function myFunction() {
  let person = prompt("Please enter your name", "gert");
  if (person != null) {
    document.getElementById("BBL").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}