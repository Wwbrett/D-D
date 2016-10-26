document.getElementById("startSearch").addEventListener("click", search);

function search() {
var searchTerm = document.getElementById("search").value;
var tester = document.getElementById("tester");
var additon = document.getElementById("addition");

tester.setAttribute("file","./spells/" + searchTerm + ".md");
}