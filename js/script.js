//SELECIONANDO UM ELEMENTO DO MEU HTML, A LISTA DE DESTAQUES
let listaDestaque  = document.querySelector(".secaoVideosDestaques__lista")
let secaoTodosVideos  = document.querySelector(".secaoTodosVideos ul")
let listaReproducao  = document.querySelector(".secaoAdicionarAFila__lista")

//ARRAY DE VÍDEOS
const listaVideos = [
    {
        id: 0,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!",
        thumbnail: "./img/thumb1.webp"
    },
    {
        id: 1,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!",
        thumbnail: "./img/thumb2.webp"
    },
    {
        id: 2,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!",
        thumbnail: "./img/thumb1.webp"
    },
    {
        id: 3,
        titulo: "Conheça todo o universo da Kenzie Academy Brasil",
        visualizacoes: "2,7 mil",
        descricao: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dolore vel assumenda porro consequatur cum labore corporis dicta voluptatibus a et dignissimos, neque eligendi quas similique, culpa, error rerum saepe!",
        thumbnail: "./img/thumb2.webp"
    }
];

//FUNÇÃO QUE VAI LISTAR OS VÍDEO, UTILIZANDO UM LOOP FOR
function listarVideos(listaDestaque){
    for(let i = 0; i < listaVideos.length; i = i + 1){
        
        //ACESSANDO VALORES DO VÍDEO
        let titulo          = listaVideos[i].titulo
        let visualizacoes   = listaVideos[i].visualizacoes
        let descricao       = listaVideos[i].descricao
        let thumbnail       = listaVideos[i].thumbnail

        //PASSANDO PARA FUNÇÃO CRIAR O TEMPLATE
        criarTemplate(listaDestaque,titulo, visualizacoes, descricao, thumbnail)
    }
}

//LISTANDO VÍDEOS
listarVideos(listaDestaque)
listarVideos(secaoTodosVideos)

//FUNÇÃO QUE CRIA O TEMPLATE
function criarTemplate(listaDestaque, titulo, visualizacoes ,descricao, thumbnail){

    
    
    //CRIANDO UM ELEMENTO DO TIPO  HTML => LI
    let li  = document.createElement("li")
    
    //ESTOU ADICIONANDO TAGS E O CONTEÚDO PRA DENTRO DESSE LI
    li.innerHTML = `
        <figure>
            <img src="${thumbnail}" alt="{titulo}">
        </figure>

        <div>
            <h3>${titulo}</h3>
            <span>${visualizacoes}</span>
            <p>${descricao}</p>
            <button class="buttonAdicionarAFila">Adicionar a fila</button>
        </div>
    `
  
    //ESTOU ADICIONANDO O LI, PREECHIDO DENTRO DA MINHA LISTA LÁ NO HTML
    listaDestaque.appendChild(li)

}


// FUNÇÕES DE CLIQUE 
listaDestaque.addEventListener("click", adicionarAFila)

//FUNÇÃO QUE ADICIONA NA LISTA DE REPRODUÇÃO
function adicionarAFila(event){

    //PEGA O ELEMENTO CLICADO
    const button = event.target

    //PEGA O NOME DO ELEMENTO
    const buttonName = event.target.tagName

    //VERIFICAÇÃO SE É UM BOTÃO
    if(buttonName == "BUTTON"){

        //PEGA O PAI DO BOTÃO
        const li = button.closest("li")
        
        //FAZ UMA CÓPIA DESSE ELEMENTO
        const liCopy = li.cloneNode(true)

        //ADICIONA NA LISTA DE REPRODUÇÃO
        listaReproducao.appendChild(liCopy)
       
    }
}


// FUNÇÕES DE CLIQUE 
listaReproducao.addEventListener("click", removerdaAFila)

function removerdaAFila(event){

    //PEGA O ELEMENTO CLICADO
    const elemento = event.target

    //PEGA O NOME DO ELEMENTO
    const elementoName = event.target.tagName
   
    //VERIFICAÇÃO SE É UM BOTÃO
    if(elementoName !== "LI"){
        elemento.closest("li").remove()
    }else{

        elemento.remove()

    }

}