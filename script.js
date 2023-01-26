const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const logo = document.createElement('img');
logo.src = 'logo.png';

app.appendChild(logo);
app.appendChild(container);

const getData = async () => {
  const response = await fetch(API_URL);
  const pokiData = await response.json();
  console.log(pokiData);

  pokiData.results.forEach((elemenet) => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = elemenet.name;
    h1.setAttribute('class', 'title');

    const link = document.createElement('link');
    elemenet.url = elemenet.url.substring(0, 300);
    link.textContent = `${elemenet.url}...`;
    link.setAttribute('class', 'url');

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(link);
  });
};

getData();
