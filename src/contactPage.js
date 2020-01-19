const content = document.querySelector('#content');

const displayContact = () => {
  const hero = document.createElement('section');
  hero.classList.add('hero');

  // create hero text
  const h1 = document.createElement('h1');
  h1.innerText = `Contact Us`;
  const h3 = document.createElement('h3')
  h3.innerText = `The Best Cuisine in America.`;
  const p = document.createElement('p');
  p.innerText = `Give us a call at (555) 555-5555 today!`;

  hero.appendChild(h1);
  hero.appendChild(h3);
  hero.appendChild(p);

  content.appendChild(hero);
};

export { displayContact };