const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];


navItems.forEach(function(currentValue){
  currentValue.style.color = 'green';
})

const nav = document.querySelector('nav');

const newATag = document.createElement('a');
newATag.textContent = 'HOME';
newATag.href = '#';
newATag.style.color = 'purple';
nav.prepend(newATag);

const newATag2 = document.createElement('a');
newATag2.textContent = 'Location';
newATag2.href = '#';
newATag2.style.color = 'purple';
nav.appendChild(newATag2);

let headImg = document.getElementById('cta-img');
headImg.setAttribute('src', siteContent['cta']['img-src']);

let ctaHeader = document.querySelector('h1');
ctaHeader.innerHTML = siteContent['cta']['button'];

let ctaBtnText = document.querySelector('.cta-text')
ctaBtnText.style.letterSpacing = 0;

let getStarted = document.querySelector('h1');
getStarted.textContent = 'Dom is Awesome';

let ctaBtn = document.querySelector('button');
ctaBtn.textContent = 'Get Started';


const txtCnt = document.querySelectorAll('.main-content .top-content h4');
txtCnt[0].textContent = siteContent['main-content']['features-h4'];

const parCon = document.querySelectorAll('.main-content .top-content p');
parCon[0].textContent = siteContent['main-content']['features-content'];

const about = document.querySelectorAll('.main-content .top-content h4');
about[1].textContent = siteContent['main-content'] ['about-h4'];

const aboutPar = document.querySelectorAll('.main-content .top-content p');
aboutPar[1].textContent = siteContent['main-content'] ['about-content'];

const midImg = document.getElementById('middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];
midImg.alt = 'code image';

const services = document.querySelectorAll('.main-content .bottom-content h4');
services[0].textContent = siteContent['main-content']['services-h4'];

const servicesText = document.querySelectorAll('.main-content .bottom-content p');
servicesText[0].textContent = siteContent['main-content']['services-content'];

const product = document.querySelectorAll('.main-content .bottom-content h4');
product[1].textContent = siteContent['main-content']['product-h4'];

const productText = document.querySelectorAll('.main-content .bottom-content p');
productText[1].textContent = siteContent['main-content']['product-content'];

const vision = document.querySelectorAll('.main-content .bottom-content h4');
vision[2].textContent = siteContent['main-content']['vision-h4'];

const visionText = document.querySelectorAll('.main-content .bottom-content p');
visionText[2].textContent = siteContent['main-content']['vision-content'];

const contactHead = document.querySelectorAll('.contact h4');
contactHead[0].textContent = siteContent['contact']['contact-h4'];

const contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

const footerInfo = document.querySelectorAll('footer p');
footerInfo[0].textContent = siteContent['footer']['copyright'];
