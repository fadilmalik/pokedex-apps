/*
    Coded By @fadilmalik_
    https://github.com/fadilmalik
*/

import '../components/poke-list';
import DataSource from '../data/data-source';

const main = async () => {
  const navPrevElement = document.querySelector('#nav-prev');
  const navNextElement = document.querySelector('#nav-next');
  const pokeListElement = document.querySelector('poke-list');

  let from = 1;
  let to = 12;

  let results = await DataSource.fetchPokemon();
  pokeListElement.list = results;

  navPrevElement.addEventListener('click', async () => {
    if (from === 1) return false;
    results = await DataSource.fetchPokemon(from -= 12, to -= 12);
    pokeListElement.list = results;
    return true;
  });

  navNextElement.addEventListener('click', async () => {
    if (to > 1154) return false;
    results = await DataSource.fetchPokemon(from += 12, to += 12);
    pokeListElement.list = results;
    return true;
  });
};

export default main;
