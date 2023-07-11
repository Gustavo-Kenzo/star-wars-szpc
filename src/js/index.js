// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem')
confirm


//passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        //OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        const personagemGrande = document.querySelector('.personagem-grande');
        console.log(personagemGrande);

        //passo 2 - alterar a imagem do personagem grande

        const idPersonagem = personagem.attributes.id.value;
        console.log(idPersonagem);
        personagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        //passo 3 - alterar o nome do personagem grande

        const nomePersonagemGrande = document.getElementById('nome-personagem');

        nomePersonagemGrande.innerText = personagem.getAttribute('data-name');

        //passo 4 - alterar a descrição do personagem grande

        const descricaoPersonagem=document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText=personagem.getAttribute('data-description');
    })
})