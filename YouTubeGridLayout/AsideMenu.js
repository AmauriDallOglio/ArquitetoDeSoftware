class AsideMenu extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("aside");

        const menuList = document.createElement("ul");

        const menuItems = [
            { src: "/YouTubeGridLayout/Imagem/icon1.jpg", alt: "Início", text: "Início" },
            { src: "/YouTubeGridLayout/Imagem/icon2.jpg", alt: "Explorar", text: "Explorar" },
            { src: "/YouTubeGridLayout/Imagem/icon3.jpg", alt: "Inscrições", text: "Inscrições" },
            { src: "/YouTubeGridLayout/Imagem/icon4.jpg", alt: "YouTube Music", text: "YouTube Music" },
            { src: "/YouTubeGridLayout/Imagem/icon5.jpg", alt: "Vídeos que gostei", text: "Vídeos que gostei" },
            { src: "/YouTubeGridLayout/Imagem/icon6.jpg", alt: "Assistir mais tarde", text: "Assistir mais tarde" },
            { src: "/YouTubeGridLayout/Imagem/icon7.jpg", alt: "Downloads", text: "Downloads" },
            { src: "/YouTubeGridLayout/Imagem/icon8.jpg", alt: "Filmes", text: "Filmes" },
            { src: "/YouTubeGridLayout/Imagem/icon9.jpg", alt: "Aprender", text: "Aprender" },
            { src: "/YouTubeGridLayout/Imagem/icon10.jpg", alt: "Esportes", text: "Esportes" },
        ];

        menuItems.forEach(item => {
            const listItem = document.createElement("li");

            const icon = document.createElement("img");
            icon.src = item.src;
            icon.alt = item.alt;

            listItem.appendChild(icon);
            listItem.appendChild(document.createTextNode(item.text));
            menuList.appendChild(listItem);
        });

        componentRoot.appendChild(menuList);
        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
           
            aside{
                background-color: #ffffff;
                grid-area: aside;
                text-align: left;
                padding: 20px 0px 0px 20px;
                font-size: 17px;
            }
            ul{
                margin: 0;
                padding: 0;
            }
            li{
                margin-bottom: 8px;
                display: flex;
                align-items: center;
                justify-content: left;
                padding: 10px; /* Adiciona padding ao main */
            }
            li img {
                width: 30px; /* Ajuste a largura conforme necessário */
                height: auto; /* Mantém a proporção da imagem */
                margin-right: 10px; /* Espaço entre a imagem e o texto */
            }
            li a {
                color: black;
            }


        `;
        return style;
    }
}

customElements.define("aside-menu", AsideMenu);

/*
  <aside>
        
        <ul>
            <li> 
                <img src="/YouTubeGridLayout/Imagem/icon1.jpg" alt="">
                Início
            </li>
            <li>
                <img src="/YouTubeGridLayout/Imagem/icon2.jpg" alt="">
                Explorar
            </li>
            <li> 
                <img src="/YouTubeGridLayout/Imagem/icon3.jpg" alt="">
                Incrições
            </li>
            <li>
                <img src="/YouTubeGridLayout/Imagem/icon4.jpg" alt="">
                YouTube Music
            </li>
            <li>
                <img src="/YouTubeGridLayout/Imagem/icon5.jpg" alt="">
                Vídeos que gostei
            </li>
            <li>
                <img src="/YouTubeGridLayout/Imagem/icon6.jpg" alt="">
                Assitir mais tarde
            </li>
            <li>
                <img src="/YouTubeGridLayout/Imagem/icon7.jpg" alt="">
                Downloads
            </li>
            <li>
                <img src="/YouTubeGridLayout/Imagem/icon8.jpg" alt="">
                Filmes
            </li>
            <li>
                <img src="/YouTubeGridLayout/Imagem/icon9.jpg" alt="">
                Aprender
            </li>     
            <li>
                <img src="/YouTubeGridLayout/Imagem/icon10.jpg" alt="">
                Esportes
            </li>
        </ul>
    </aside>

*/