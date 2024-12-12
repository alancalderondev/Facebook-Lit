import {html, css, LitElement} from 'lit';

class Section extends LitElement{

    static styles = css`
        a{
            text-decoration: none;
            display:flex;
            align-items:center;
        }
        ul{
            list-style: none;
            padding: 0;
        }
        img{
            max-width: 30px;
            max-height: 30px;
            margin-right: 10px;
            display: inline-block;
        }
        li{
            margin-bottom: 15px
        }
        .elementos{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        p{
            font-weight: bold;
        }
    `;

    static properties = {
        data: {type: Array}
    }
    
    constructor(){
        super();
        this.data = [];//Aseguramos que data esta inicializado
    }
    //RENDERIZAR
    render(){
        //Verifico que mi arreglo no este vacio
        if(this.data.length >0){
            //Aqui proceso lo del DATA recorriendolo con el MAP
            return html`
                <ul>
                    <!--Recorremos nuestro Arreglo con .map -->
                    ${this.data.map(datos =>
                        html`
                        <li>
                            <div class="elementos">
                                <a href="#">
                                    <img src="${datos.src}"/>
                                    <p>${datos.name}</p>
                                </a>
                            </div>
                        </li>
                        `
                    )}
                </ul>
            `;
        }else{
            return html`
                <p>No hay elementos en el arreglo</p>
            `;
        }
    }
}

customElements.define('seccion-principal',Section);