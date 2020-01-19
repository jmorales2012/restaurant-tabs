import { displayHome } from './homePage.js';
import { displayAbout } from './aboutPage.js';
import { displayContact } from './contactPage.js';

const content = document.querySelector('#content');

const pages = {
  'Home': displayHome,
  'About': displayAbout,
  'Contact': displayContact
}

content.addEventListener('click', (e) => {
  if (e.target.classList.contains('navbar-link')) {
    displayNav();
    console.log(pages[e.target.id]());
  }
});

const displayNav = () => {
  content.innerHTML = '';
  const menu = document.createElement('div');
  const navbar = document.createElement('ul');
  menu.classList.add('menu');
  navbar.classList.add('navbar');

  let navbarLinks = ['Home', 'About', 'Contact'];
  for (let i = 0; i < navbarLinks.length; i++) {
    let link = document.createElement('li');
    link.innerHTML = `<a id="${navbarLinks[i]}" class="navbar-link">${navbarLinks[i]}</a>`;
    navbar.appendChild(link);
  }

  menu.appendChild(navbar);
  content.appendChild(menu);
}

displayNav();
displayHome();