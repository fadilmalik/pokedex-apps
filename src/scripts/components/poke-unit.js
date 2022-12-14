/*
    Coded By @fadilmalik_
    https://github.com/fadilmalik
*/

/* eslint-disable no-underscore-dangle */
class PokeUnit extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set unit(unit) {
    this._unit = unit;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
                .card {
                    list-style: none;
                    padding: 40px;
                    color: #222;
                    text-align: center;
                    border-radius: 20px;
                    position: relative;
                }
                
                .card::after {
                    content: "";
                    display: block;
                    width: 50%;
                    height: 45%;
                    border-radius: 100%;
                    background-color: #fff;
                    opacity: 0.7;
                    position: absolute;
                    top: 15%;
                    left: 25%;
                }
                
                .steel {
                    background-color: #f4f4f4;
                }
                
                .fire {
                    background-color: #fddfdf;
                }
                
                .grass {
                    background-color: #defde0;
                }
                
                .electric {
                    background-color: #fcf7de;
                }
                
                .water,
                .ice {
                    background-color: #def3fd;
                }
                
                .ground {
                    background-color: #f4e7da;
                }
                
                .rock {
                    background-color: #b2b2b2;
                }
                
                .fairy {
                    background-color: #fceaff;
                }
                
                .poison {
                    background-color: #98d7a5;
                }
                
                .bug {
                    background-color: #f8d5a3;
                }
                
                .dragon {
                    background-color: #97b3e6;
                }
                
                .psychic {
                    background-color: #eaeda1;
                }
                
                .flying {
                    background-color: #f5f5f5;
                }
                
                .fighting {
                    background-color: #e6e0d4;
                }

                .ghost, .dark {
                    background-color: #d989b5;
                }
                
                .normal {
                    background-color: #f5f5f5;
                }
                
                .card-title {
                    text-transform: capitalize;
                    margin-bottom: 0px;
                    font-size: 32px;
                    font-weight: normal;
                    position: relative;
                    z-index: 2;
                }
                
                .card-subtitle {
                    margin-top: 5px;
                    color: #666;
                    font-weight: lighter;
                    position: relative;
                    z-index: 2;
                }
                
                .card-image {
                    height: 180px;
                    position: relative;
                    z-index: 2;
                }

                .card:hover {
                    animation: bounce 0.5s linear;
                }
                
                @keyframes bounce {
                    20% {
                        transform: translateY(-6px);
                    }
                    40% {
                        transform: translateY(0px);
                    }
                
                    80% {
                        transform: translateY(-2px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
            </style>

            <div class="card ${this._unit.types[0]}">
                <img class="card-image lozad" alt="${this._unit.name}" 
                src="${this._unit.imgUrl}" />
                <h2 class="card-title">
                    #${this._unit.id} ${this._unit.name}
                </h2>
                <p class="card-subtitle">
                    ${this._unit.types.join(' | ')}
                </p>
            </div>
        `;
  }
}

customElements.define('poke-unit', PokeUnit);
