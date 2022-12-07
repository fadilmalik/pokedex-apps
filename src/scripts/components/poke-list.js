/*
    Coded By @fadilmalik_
    https://github.com/fadilmalik
*/

/* eslint-disable no-underscore-dangle */
import './poke-unit';

class PokeList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set list(list) {
    this._list = list;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
                :host {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    grid-gap: 20px;
                    padding-inline-start: 0;
                }
            </style>
        `;
    this._list.forEach((unit) => {
      const pokeUnitElement = document.createElement('poke-unit');
      pokeUnitElement.unit = unit;

      this.shadowDOM.appendChild(pokeUnitElement);
    });
  }
}

customElements.define('poke-list', PokeList);
