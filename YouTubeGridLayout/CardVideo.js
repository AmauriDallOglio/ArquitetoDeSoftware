class CardVideo extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const divCardVideo = document.createElement("div");
        divCardVideo.setAttribute("class", "cardVideo");

        const imagemCurso = document.createElement("img");
        imagemCurso.setAttribute("class", "cardVideo-imagemCurso");
        imagemCurso.src = this.getAttribute("fotoVideo") || "Não informado";
        imagemCurso.alt = "Imagem do Curso";


        const divCardVideoDetalhes = document.createElement("div");
        divCardVideoDetalhes.setAttribute("class", "cardVideo-detalhes");

        const imagemUsuario = document.createElement("img");
        imagemUsuario.setAttribute("class", "cardVideo-detalhes-imagemUsuario");
        imagemUsuario.src = this.getAttribute("fotoUsuario") || "Não informado";
        imagemUsuario.alt = "Imagem do Usuário";

        
        const divCardVideoDetalhesTextos = document.createElement("div");
        divCardVideoDetalhesTextos.setAttribute("class", "cardVideo-detalhes-textos");

        const titulo = document.createElement("p");
        titulo.setAttribute("class", "cardVideo-detalhes-titulo");
        titulo.textContent = this.getAttribute("cursoTitulo") || "Não informado";
 
        const visualizacao = document.createElement("p");
        visualizacao.setAttribute("class", "cardVideo-detalhes-visualizacao");
        visualizacao.textContent = this.getAttribute("descricaoVisualizacao") || "Não informado";
   
        const transmicao = document.createElement("p");
        transmicao.setAttribute("class", "cardVideo-detalhes-visualizacaoDias");
        transmicao.textContent = this.getAttribute("descricaoDiasTransmicao") || "Não informado";
 

        divCardVideoDetalhes.appendChild(imagemUsuario);
        divCardVideoDetalhesTextos.appendChild(titulo);
        divCardVideoDetalhesTextos.appendChild(visualizacao);
        divCardVideoDetalhesTextos.appendChild(transmicao);
        divCardVideoDetalhes.appendChild(divCardVideoDetalhesTextos);
        
        divCardVideo.appendChild(imagemCurso);
        divCardVideo.appendChild(divCardVideoDetalhes);

        return divCardVideo;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        
        .cardVideo {
            display: flex;
            flex-direction: column;
            width: 300px;
            overflow: hidden;
        }

        .cardVideo-imagemCurso {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }

        .cardVideo-detalhes {
            display: flex;
            padding: 10px;
        }

        .cardVideo-detalhes-imagemUsuario {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .cardVideo-detalhes-textos {
            display: flex;
            flex-direction: column;
            text-align: left;
        }

        .cardVideo-detalhes-titulo {
             
             margin: 0;
           font-weight: bold;
            font-size: 18px;
        }

        .cardVideo-detalhes-visualizacao, .cardVideo-detalhes-visualizacaoDias {
            margin: 5px 0 0;
            color: #555;
        }

        
        `;
        return style;
    }
}

customElements.define("card-video", CardVideo);


/*




        <card-video
            fotoVideo="/YouTubeGridLayout/Imagem/i4.jpg"
            fotoUsuario="/YouTubeGridLayout/Imagem/icon15.jpg"
            cursoTitulo="Geração Tech Unimed - BH - Ciência de Dados"
            views="1,7 mil visualizações"
            days="Transmitido há 2 dias">
        </card-video>
    
        <div class="cardVideo">
            <img class="cardVideo-imagemCurso" src="/YouTubeGridLayout/Imagem/i1.jpg" alt="">
            <div class="cardVideo-detalhes">
                <img class="cardVideo-detalhes-imagemUsuario" src="/YouTubeGridLayout/Imagem/icon15.jpg" alt="">
                <div class="cardVideo-detalhes-textos">
                    <p class="cardVideo-detalhes-titulo">Geração Tech Unimed - BH - Ciência de Dados</p>
                    <p class="cardVideo-detalhes-visualizacao">1,7 mil visualizações</p>
                    <p class="cardVideo-detalhes-visualizacaoDias">Transmitido há 2 dias</p>
                </div>
            </div>
        </div>



*/