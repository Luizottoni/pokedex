/*
ao clicar no pokémon da lista que esconde e mostrar o cartão do pokémon o cartão correspondente ao que foi selecionado na listagem
pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do pokémon
precisamos criar duas variáveis ​​no JS pra trabalhar com os elementos da tela
Trabalhar com um evento de clique feito pelo usuário na listagem de pokémons
- remove a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
-remover a classe ativa que marca o pokémon selecionado
-adicionar a classe ativa no item da lista selecionada
*/


// precisamos criar duas variáveis ​​no JS pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //vamos trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

    pokemon.addEventListener('clique', () => {
        //remover a classe aberta só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')        
        cartaoPokemonAberto.classList.remover ('aberto')

        //ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.atributos.identificação.valor

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.adicionar ('aberto')

        //remove a classe ativa que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document . querySelector ('.ativo')
        pokemonAtivoNaListagem.classList.remover('ativo')

        //adicionar a classe ativa no item da lista selecionada
        const pokemonSelecionadoNaListagem = document.getElementById (idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add ('ativo')

    } )
} )