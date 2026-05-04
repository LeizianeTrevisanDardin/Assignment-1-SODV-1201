
const nav = document.createElement("nav");
nav.id = "nav";

const navLinks = document.createElement("div");
navLinks.className = "nav-links";

const linkProfile = document.createElement("a");
linkProfile.href = '../Profile Page/index.html';
linkProfile.textContent = "Profile";

const linkGradeConverter = document.createElement("a");
linkGradeConverter.href = '../Grade Converter/index.html';
linkGradeConverter.textContent = "Grade Converter";

const linkStaffPage = document.createElement("a");
linkStaffPage.href = '../Staff List/index.html';
linkStaffPage.textContent = "Staff List";

const linkTemperatureConverter = document.createElement("a");
linkTemperatureConverter.href = '#Temperature Converter';
linkTemperatureConverter.textContent = "Temperature Converter";

navLinks.appendChild(linkProfile);
navLinks.appendChild(linkGradeConverter);
navLinks.appendChild(linkStaffPage);
navLinks.appendChild(linkTemperatureConverter);

nav.appendChild(navLinks);
document.getElementById("navbar-container").appendChild(nav);


const main = document.querySelector("main");

let temperature = document.createElement("input");
temperature.id = "tempInput";
temperature.placeholder = "Enter temperature";
temperature.type = "number"; //to avoid letters and keep only numbers
main.appendChild(temperature);



const btnsContainer =document.createElement("div");
btnsContainer.className = "btnsContainer";


const resultDisplay = document.createElement("div");
resultDisplay.id = "results";

const btnFToCAndK = document.createElement("button");
btnFToCAndK.id = "convert-btn";
btnFToCAndK.textContent = "Fahrenheit to Celsius & Kelvin";
btnFToCAndK.onclick = () => {
  const f = parseFloat(temperature.value);
  if (!isNaN(f)) {
    const c = ((f - 32) * 5/9).toFixed(2);
    const k = ((f - 32) * 5/9 + 273.15).toFixed(2);
    resultDisplay.innerHTML = `${f}°F = ${c}°C<br>${f}°F = ${k}K`;
  } else {
    resultDisplay.textContent = "Please enter a valid number.";
  }
};

const btnCToCFndK = document.createElement("button");
btnCToCFndK.textContent = "Celsius to Fahrenheit & Kelvin";
btnCToCFndK.id ="convert-btn";
btnCToCFndK.onclick = () => {
  const c = parseFloat(temperature.value);
  if (!isNaN(c)) {
    const f = (c * 9/5 + 32).toFixed(2);
    const k = (c + 273.15).toFixed(2);
    resultDisplay.innerHTML = `${c}°C = ${f}°F<br>${c}°C = ${k}K`;
  } else {
    resultDisplay.textContent = "Please enter a valid number.";
  }
};

const btnKToCFndC = document.createElement("button");
btnKToCFndC.textContent = "Kelvin to Fahrenheit & Celsius";
btnKToCFndC.id = "convert-btn";
btnKToCFndC.onclick = () => {
  const k = parseFloat(temperature.value);
  if (!isNaN(k)) {
    const c = (k - 273.15).toFixed(2);
    const f = ((k - 273.15) * 9/5 + 32).toFixed(2);
    resultDisplay.innerHTML = `${k}K = ${f}°F<br>${k}K = ${c}°C`;
  } else {
    resultDisplay.textContent = "Please enter a valid number.";
  }
};

btnsContainer.appendChild(btnFToCAndK);
btnsContainer.appendChild(btnCToCFndK);
btnsContainer.appendChild(btnKToCFndC);

main.appendChild(btnsContainer);
main.appendChild(resultDisplay);


const footer = document.querySelector("footer");

const footerText = document.createElement("p");
footerText.innerHTML = `&copy; ${new Date().getFullYear()} Leiziane Trevisan Dardin. All rights reserved.`;

footer.appendChild(footerText);