const nav = document.createElement("nav");
nav.id = "nav";

const navLinks = document.createElement("div");
navLinks.className = "nav-links";

const linkProfile = document.createElement("a");
linkProfile.href = '#Profile Page';
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

//// -------------------- PROFILE CONTENT --------------------

const main = document.querySelector("main");

// Title
const title = document.createElement("h1");
title.textContent = "My Profile";
title.className = "page-title";
main.appendChild(title);


const profileContainer = document.createElement("div");
profileContainer.className = "profile-container";
main.appendChild(profileContainer);


const profileImg = document.createElement("img");
profileImg.src = "./images/image.png";
profileImg.className = "profile-img";

setTimeout(() => {
  profileContainer.appendChild(profileImg);
}, 10000);


const paragraph1 = document.createElement("p");
paragraph1.textContent = "Hello, my name is Leiziane but you can call me Lizzy!";
paragraph1.className = "intro-text";

const paragraph2 = document.createElement("p");
paragraph2.textContent = "I am originally from Brazil, but I have been living in Canada for almost 12 years now. Currently I am a Software Development student at Bow Valley.";
paragraph2.className = "intro-text";

profileContainer.appendChild(paragraph1);
profileContainer.appendChild(paragraph2);

const footer = document.querySelector("footer");

const footerContent = document.createElement("p");
footer.innerHTML = `&copy; ${new Date().getFullYear()} Leiziane Trevisan Dardin. All rights reserved.`;

footer.appendChild(footerText);