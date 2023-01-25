const app = document.getElementById('root');

// document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const logo = document.createElement('img');
logo.src = 'logo.png';

app.appendChild(logo);
app.appendChild(container);

//API
var XMLHttpRequest = require('xhr2');
var request = new XMLHttpRequest();
// var request2 = new XMLHttpRequest();

//https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
//https://pokeapi.co/api/v2/pokemon/

request.open(
  'GET',
  'https://pokeapi.co/api/v2/pokemon/',
  //   'https://pokeapi.co/api/v2/pokemon/23/',
  true
);

request.onload = function () {
  //   const pokiImgData = JSON.parse(this.response);
  const pokiData = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    pokiData.results.forEach((elemenet) => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = elemenet.name;
      h1.setAttribute('class', 'title');

      const p = document.createElement('p');
      elemenet.url = elemenet.url.substring(0, 300);
      p.textContent = `${elemenet.url}...`;
      // p.setAttribute('class', 'url');

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });

    // const p = pokiImgData.sprites;
    // let test = Object.keys(p);
    // console.log(test);
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Error! You could not catch them all';
    app.appendChild(errorMessage);
  }
};

request.send();
