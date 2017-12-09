
var btn = document.querySelector('input');
btn.addEventListener('keypress', buscaFilme);

function buscaFilme(e) {

    if (event.which == 13 || event.keyCode == 13) {
        var inputBusca = document.querySelector('input');
        var filme = inputBusca.value;
        var oReq = new XMLHttpRequest();
        oReq.onload = reqListener;
        oReq.open("get", "http://www.omdbapi.com/?s=" + filme + "&apikey=db2117d0");
        oReq.send(); return false;
    }
    return true;
}

function reqListener() {
    var data = JSON.parse(this.responseText);
    var filme = data.Search
    var resultadoHTML = '';
    for (var i = 0; i < filme.length; i++) {
        resultadoHTML = resultadoHTML + '<li class="lista-filmes"><img class="poster" src=' + filme[i].Poster + '>' + '<h4 class="title">' + filme[i].Title + '</h4></li>'
    }
    resultado.innerHTML = resultadoHTML;
    console.log(filme);    
}
