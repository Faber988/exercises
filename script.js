let url = document.URL;

document.getElementById("demo").innerHTML = url;
function carattereRosso(){
const element = document.createAttribute("class");

element.value = "rosso";

document.getElementsByTagName("h1").setAttributeNode(element);
}

const lunghezza = document.getElementsByTagName("h1");

console.log(lunghezza.length)

const createP = document.createElement("p");
createP.innerHTML = "creo un paragrafo";
document.getElementById("myP").appendChild(createP);