const content = document.querySelector('#content');

const displayAbout = () => {
  const hero = document.createElement('section');
  hero.classList.add('hero');

  // create hero text
  const h1 = document.createElement('h1');
  h1.innerText = `About Us`;
  const h3 = document.createElement('h3')
  h3.innerText = `The Best Cuisine in America.`;

  const p = document.createElement('p');
  p.innerText = `We are so passionate about making good food. That's why
  we created Momo's Cuisine. To bring that passion to your plate.`;

  hero.appendChild(h1);
  hero.appendChild(h3);
  
  hero.appendChild(p);
  content.appendChild(hero);
};

export { displayAbout };