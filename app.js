const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const API_KEY = '735d8b486c7c643fa7ae07a0b02c796e';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';
const Details = 'Https://www.themoviedb.org/movie/';
function carregaFilmes (){
    let xhr = new XMLHttpRequest ();

    xhr.open ('GET', TMDB_ENDPOINT + '/movie/popular?language=pt-BR&api_key=' + API_KEY);
    xhr.onload = exibeFilmes;
    xhr.send();
}


function pesquisaFilmes (){
    let xhr = new XMLHttpRequest ();

    let query = document.getElementById ('inputPesquisa').value;

    xhr.open ('GET', TMDB_ENDPOINT + '/search/movie?language=pt-BR&api_key=' + API_KEY + '&query=' + query);
    xhr.onload = exibeFilmes;
    xhr.send();
}
function abrirFilme(movie){
    let id = filmes.results[i];
    window.open('https://api.themoviedb.org/movie/'+ id);
}

function exibeFilmes (evt) {
    let textoHTML = '';

    let filmes = JSON.parse (evt.target.responseText);


    for (let i = 0; i < filmes.results.length; i++) {
        let titulo = filmes.results[i].title;
        let data = new Date(filmes.results[i].release_date);
        let imagem = IMG_PREFIX + filmes.results[i].poster_path;
        let id = Details + filmes.results[i].id + filmes.results[i].original_title;

        textoHTML += `<div class="card col-6 col-xs-12 col-sm-4 col-md-3 co-lg-2">
            <img src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${data.toLocaleDateString('pt-BR')}</p>
                <a href="${id}" target="_blank" class="btn btn-primary">Abrir Filme</a>
            </div>
        </div>`
    }

    document.getElementById('tela').innerHTML = textoHTML;

}


