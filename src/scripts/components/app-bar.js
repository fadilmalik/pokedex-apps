/*
    Coded By @fadilmalik_
    https://github.com/fadilmalik
*/

class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Lato";
        }

        :host {
          display: block;
          width: 100%;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }

        h1 {
          text-align: center;
          font-size: 54px;
          padding: 16px;
          color: #fff ;
        }
      </style>

      <h1>PokeDex</h1>
    `;
  }
}

customElements.define('app-bar', AppBar);
