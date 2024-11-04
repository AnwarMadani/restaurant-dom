import "./styles.css";
import locationImage from './img/restaurant-location.png';

let current = home;
const homeBtn = document.getElementById('home');
const contactBtn = document.getElementById('contact');
const menuBtn = document.getElementById('menu');
const container = document.getElementById('container');

homeBtn.addEventListener("click", loadHome);
contactBtn.addEventListener("click", loadContact);
menuBtn.addEventListener("click", loadMenu);

function loadHome(){
    if(current === 'home') return;
    cleanContainer();
    const description = document.createElement('div');
    const descriptionText = document.createElement('h2');
    descriptionText.textContent = 'Made with passion since 1902';
    description.appendChild(descriptionText);

    const hours = document.createElement('div');
    const hoursText = document.createElement('h2');
    hoursText.textContent = "Hours";
    const hoursList = document.createElement('ul');
    const monday = document.createElement('li');
    monday.textContent = "Monday: 6am - 6pm";
    hoursList.appendChild(monday);
    const tuesday = document.createElement('li');
    tuesday.textContent = "Tuesday: 6am - 6pm";
    hoursList.appendChild(tuesday);
    const wednesday = document.createElement('li');
    wednesday.textContent = "Wednesday: 6am - 6pm";
    hoursList.appendChild(wednesday);
    const thursday = document.createElement('li');
    thursday.textContent = "Thursday: 6am - 6pm";
    hoursList.appendChild(thursday);
    const friday = document.createElement('li');
    monday.textContent = "Friday: 6am - 6pm";
    hoursList.appendChild(friday);
    const saturday = document.createElement('li');
    saturday.textContent = "Saturday: 6am - 6pm";
    hoursList.appendChild(saturday);
    const sunday = document.createElement('li');
    sunday.textContent = "Sunday: 6am - 6pm";
    hoursList.appendChild(sunday);
    hours.appendChild(hoursText);
    hours.appendChild(hoursList);


    const invite = document.createElement('div');
    const inviteText = document.createElement('h2');
    inviteText.textContent = 'Order online or visit us!';
    invite.appendChild(inviteText);

    
    container.appendChild(description);
    container.appendChild(hours);
    container.appendChild(invite);
    current = 'home';
}

function cleanContainer(){
    container.innerHTML = '';
}

function loadContact(){
    if(current === 'contact') return;
    cleanContainer();
    
    const phoneNumberDiv = document.createElement('div')
    const phoneNumberText = document.createElement('h2');
    phoneNumberText.textContent = 'You can easily call us at:';
    const phoneNumber = document.createElement('h2');
    phoneNumber.textContent = '📞 123 456 789';
    phoneNumberDiv.appendChild(phoneNumberText);
    phoneNumberDiv.appendChild(phoneNumber);

    const addressDiv = document.createElement('div');
    const addressText = document.createElement('h2');
    addressText.textContent = 'You can find us at:'
    const address = document.createElement('h2');
    address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';
    addressDiv.appendChild(addressText);
    addressDiv.appendChild(address);

    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    image.src = locationImage;
    image.style.width = '90%';
    imageDiv.appendChild(image);

    container.appendChild(phoneNumberDiv);
    container.appendChild(addressDiv);
    container.appendChild(imageDiv);

    current = 'contact';
}

function loadMenu(){
    if(current === 'menu') return;
    cleanContainer();

    const recipeOne = document.createElement('div');
    const recipeOneTitle = document.createElement('h2');
    recipeOneTitle.textContent = 'Recipe Name';
    const recipeOneDescription = document.createElement('p');
    recipeOneDescription.textContent = 'tomato, potato, tomato again';
    recipeOne.appendChild(recipeOneTitle);
    recipeOne.appendChild(recipeOneDescription);

    const recipeTwo = document.createElement('div');
    const recipeTwoTitle = document.createElement('h2');
    recipeTwoTitle.textContent = 'Recipe Name';
    const recipeTwoDescription = document.createElement('p');
    recipeTwoDescription.textContent = 'tomato, potato, tomato again';
    recipeTwo.appendChild(recipeTwoTitle);
    recipeTwo.appendChild(recipeTwoDescription);

    container.appendChild(recipeOne);
    container.appendChild(recipeTwo);

    current = 'menu';
}

loadHome();