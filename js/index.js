const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

/******************* My Code *******************/
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll(".container > header > nav > a");
let firstNavLink = document.createElement("a");
firstNavLink.textContent = "Home";
firstNavLink.style.color = "green";
firstNavLink.style.cursor = "pointer";
let lastNavLink = document.createElement("a");
lastNavLink.textContent = "Meet The Team";
lastNavLink.style.color = "green";
lastNavLink.style.cursor = "pointer";

nav.prepend(firstNavLink);
nav.appendChild(lastNavLink);

for (let i = 0; i < navLinks.length; i++) {
  const element = navLinks[i];
  element.textContent = siteContent["nav"][`nav-item-${i + 1}`];
  element.style.color = "green";
}

let ctaH1 = document.querySelector(".cta-text > h1");
ctaH1.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta-text > button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let featuresTitle = document.querySelectorAll(
  ".top-content > .text-content > h4"
)[0];
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

let featuresText = document.querySelectorAll(
  ".top-content > .text-content > p"
)[0];
featuresText.textContent = siteContent["main-content"]["features-content"];

let aboutTitle = document.querySelectorAll(
  ".top-content > .text-content > h4"
)[1];
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

let aboutText = document.querySelectorAll(
  ".top-content > .text-content > p"
)[1];
aboutText.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

let servicesTitle = document.querySelectorAll(
  ".bottom-content > .text-content > h4"
)[0];
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

let servicesText = document.querySelectorAll(
  ".bottom-content > .text-content > p"
)[0];
servicesText.textContent = siteContent["main-content"]["services-content"];

let productTitle = document.querySelectorAll(
  ".bottom-content > .text-content > h4"
)[1];
productTitle.textContent = siteContent["main-content"]["product-h4"];

let productText = document.querySelectorAll(
  ".bottom-content > .text-content > p"
)[1];
productText.textContent = siteContent["main-content"]["product-content"];

let visionTitle = document.querySelectorAll(
  ".bottom-content > .text-content > h4"
)[2];
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

let visionText = document.querySelectorAll(
  ".bottom-content > .text-content > p"
)[2];
visionText.textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact > h4");
contact.textContent = siteContent["contact"]["contact-h4"];

let address = document.querySelectorAll(".contact > p")[0];
address.textContent = siteContent["contact"]["address"];

let phoneNumber = document.querySelectorAll(".contact > p")[1];
phoneNumber.textContent = siteContent["contact"]["phone"];

let email = document.querySelectorAll(".contact > p")[2];
email.textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer > p");
footer.textContent = siteContent["footer"]["copyright"];
