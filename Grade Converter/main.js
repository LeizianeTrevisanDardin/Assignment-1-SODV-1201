//// -------------------- NAVIGATION --------------------
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
linkTemperatureConverter.href = '../Temperature Converter/index.html';
linkTemperatureConverter.textContent = "Temperature Converter";

navLinks.appendChild(linkProfile);
navLinks.appendChild(linkGradeConverter);
navLinks.appendChild(linkStaffPage);
navLinks.appendChild(linkTemperatureConverter);

nav.appendChild(navLinks);
document.getElementById("navbar-container").appendChild(nav);

//// -------------------- GRADE CALCULATOR --------------------

const main = document.querySelector("main");

// Title
const title = document.createElement("h1");
title.textContent = "Grade Calculator";
title.style.textAlign = "center";
title.style.fontSize = "40px";
title.style.fontFamily = "Arial";
title.style.color = "#004D40";
main.appendChild(title);

// Container
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.gap = "10px";
container.style.marginTop = "30px";
main.appendChild(container);

// Input
const gradeInput = document.createElement("input");
gradeInput.placeholder = "Enter your grade";
gradeInput.type = "number";
gradeInput.style.fontSize = "20px";
gradeInput.style.textAlign = "center";
gradeInput.style.borderRadius = "3px";
gradeInput.style.margin = "30px";
gradeInput.style.padding = "5px";
gradeInput.style.boxShadow = "0 0 5px rgb(143, 127, 127)";
container.appendChild(gradeInput);

// Final grade display
const gradeFinal = document.createElement("p");
gradeFinal.className = "grade-result";
gradeFinal.style.minHeight = "30px";
gradeFinal.style.margin = "5px";
gradeFinal.textContent = " ";
container.appendChild(gradeFinal);

// Warning text
const warningText = document.createElement("p");
warningText.className = "warning-text";
warningText.textContent = " ";
container.appendChild(warningText);

// Button
const gradeBtnConverter = document.createElement("button");
gradeBtnConverter.className = "grade-btn";
gradeBtnConverter.textContent = "Calculate";
container.appendChild(gradeBtnConverter);

// Function
function MarkToGrade() {
  gradeFinal.textContent = "";
  warningText.textContent = "";
  gradeFinal.style.color = "black";

  try {
    let gradeValue = parseInt(gradeInput.value);

    if (gradeInput.value.trim() === "") {
      warningText.textContent = "Please enter a grade!";
      return;
    }

    if (isNaN(gradeValue)) {
      warningText.textContent = "Please enter a valid grade!";
      return;
    }

    if (gradeValue < 0 || gradeValue > 100) {
      warningText.textContent = "Grade cannot be less than 0 or more than 100";
      gradeFinal.style.color = "red";
      return;
    }

    if (gradeValue >= 90) {
      gradeFinal.textContent = "A";
      gradeFinal.style.color = "green";
    } else if (gradeValue >= 80) {
      gradeFinal.textContent = "B";
      gradeFinal.style.color = "green";
    } else if (gradeValue >= 70) {
      gradeFinal.textContent = "C";
      gradeFinal.style.color = "orange";
    } else if (gradeValue >= 60) {
      gradeFinal.textContent = "D";
      gradeFinal.style.color = "orange";
    } else if (gradeValue >= 50) {
      gradeFinal.textContent = "E";
      gradeFinal.style.color = "orangered";
    } else {
      gradeFinal.textContent = "Failed";
      gradeFinal.style.color = "red";
    }

  } catch (error) {
    warningText.textContent = "Error!";
  }
}

// Events
gradeBtnConverter.addEventListener("click", MarkToGrade);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    MarkToGrade();
  }
});


const footer = document.querySelector("footer");

const footerText = document.createElement("p");
footerText.innerHTML = `&copy; ${new Date().getFullYear()} Leiziane Trevisan Dardin. All rights reserved.`;

footer.appendChild(footerText);      


