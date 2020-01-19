const content = document.querySelector('#content');

const displayHome = () => {
  const hero = document.createElement('section');
  hero.classList.add('hero');

  // create hero text
  const h1 = document.createElement('h1');
  h1.innerText = `Momo's Famous Cuisine`;
  const h3 = document.createElement('h3')
  h3.innerText = `The Best Cuisine in America.`;

  hero.appendChild(h1);
  hero.appendChild(h3);

  content.appendChild(hero);
};

export { displayHome };