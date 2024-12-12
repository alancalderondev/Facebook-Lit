import { LitElement, css, html } from "lit";

class HeaderComponent extends LitElement {
    static styles = css`
        :host{
            display: flex;
            background-color: #252728;
            height: 100px;
        }
        ul{
            display: flex;
            width: 100%;
            align-items: center;
            margin-bottom: 0px;
        }
        li{
            list-style: none;
            cursor: pointer;
            width: 100%;
            text-align: center;
            padding: 15px;
            transition: margin 0.3s ease;
        }
        svg{
            width: 25px;
            height: 25px;
            fill: #b0b3b8;
            transition: margin 0.3s ease;

        }
        .active{
            fill: #0866ff;

        }
    `;

    static properties = {
        data: { type: Array },
        //active: { type: Boolean }
    }

    constructor() {
        super();
        this.data = [];
        //this.active = false;
    }

    render() {
        if (this.data.length > 0) {
            return html`
                <ul>
                    ${this.data.map((item, index) =>
                html`
                            <li @click="${() => this.changeColor(index)}">
                                <svg class="${item.active ? 'active' : ''}" xmlns=${item.xmlns} viewBox=${item.viewBox}><path d=${item.path} ></svg>
                            </li>
                            `
            )}
                </ul>
            `;
        } else {
            return html`<h2>No lista</h2>`
        }

    }

    changeColor(index) {
        this.data = this.data.map((item, i) => {
            return { ...item, active: i === index };
        });
        this.requestUpdate();
    }
}

customElements.define('header-component', HeaderComponent);