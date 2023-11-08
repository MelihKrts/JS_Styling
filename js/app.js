var allElements = document.querySelectorAll('*');
      
for (var i = 0; i < allElements.length; i++) {
  allElements[i].style.margin = '0';
  allElements[i].style.padding = '0';
  allElements[i].style.boxSizing = 'border-box';
  allElements[i].style.fontFamily = "'Kanit', sans-serif";
}


const container = document.createElement("div");
const helloText = document.createElement("span");

const worldText = document.createElement("span");

container.setAttribute("class", "container");
container.style.fontSize = "12px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "100vh";

helloText.style.color = "red";
helloText.textContent = "Merhaba";
helloText.style.fontStyle = "italic";


worldText.style.color = "#b2bec3";
worldText.textContent = "Dünya";
worldText.style.textDecoration = "underline"

document.body.appendChild(container);
container.appendChild(helloText);
container.appendChild(worldText);