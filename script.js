var regras = document.getElementsByClassName("regras")[0];

function mostraregras() {
    regras.style.display = "flex";
}

function fecharregras() {
    regras.style.display = "none";
}

var jogo = document.getElementsByClassName("jogo")[0];

var selecao = document.getElementsByClassName("gameplay")[0];

var teste = document.getElementsByClassName("teste")[0];

var teste1 = document.getElementsByClassName("teste1")[0];

var resultado = document.getElementsByClassName("result")[0];

var pontuacao = document.getElementsByClassName("pontuacao")[0];

var playAgain = document.getElementsByClassName("fim")[0];

var buttonRegras = document.getElementsByClassName("regras-button")[0];


var fogo = document.getElementsByClassName("fogo")[0];

var agua = document.getElementsByClassName("agua")[0];

var planta = document.getElementsByClassName("planta")[0];

var terra = document.getElementsByClassName("terra")[0];

var raio = document.getElementsByClassName("raio")[0];

/* ARRAY */

var refs = [fogo, agua, planta, terra, raio];

/* SCORE */

var score = 0;

/* JOGAR */

function jogar(num) {

    limparEfeitos();

    jogo.style.cssText = "animation: opacidade 0.5s linear; animation-direction:reverse;";

    setTimeout(() => {

        jogo.style.display = "none";

    }, 500);

    setTimeout(() => {

        selecao.style.display = "flex";

    }, 500);

    selecao.style.cssText = "animation: opacidade 1s linear;";

    buttonRegras.style.display = "none";

    switch(num){

        case fogo:

            teste.innerHTML = fogo.outerHTML;

            teste.value = fogo.value;

        break;

        case agua:

            teste.innerHTML = agua.outerHTML;

            teste.value = agua.value;

        break;

        case planta:

            teste.innerHTML = planta.outerHTML;

            teste.value = planta.value;

        break;

        case terra:

            teste.innerHTML = terra.outerHTML;

            teste.value = terra.value;

        break;

        case raio:

            teste.innerHTML = raio.outerHTML;

            teste.value = raio.value;

        break;

    }

    var random = Math.floor(Math.random() * 5);

    var house = refs[random];

    teste1.innerHTML = house.outerHTML;

    teste1.value = house.value;

    setTimeout(() => {

        Resolucao();

    }, 700);

}

function Resolucao() {
    if(teste.value == "agua" && teste1.value == "fogo"){

        resultado.innerHTML = "VOCÊ GANHOU<br>Água apagou o Fogo!";

        ganhou();

    }

    else if(teste.value == "agua" && teste1.value == "terra"){

        resultado.innerHTML = "VOCÊ GANHOU<br>Água penetrou a Terra!";

        ganhou();

    }

    else if(teste.value == "agua" && teste1.value == "planta"){

        resultado.innerHTML = "VOCÊ PERDEU<br>Água foi absorvida pela Planta!";

        perdeu();

    }

    else if(teste.value == "agua" && teste1.value == "raio"){

        resultado.innerHTML = "VOCÊ PERDEU<br>Água foi eletrificada pelo Raio!";

        perdeu();

    }

    else if(teste.value == "fogo" && teste1.value == "planta"){

        resultado.innerHTML = "VOCÊ GANHOU<br>Fogo queimou a Planta!";

        ganhou();

    }

    else if(teste.value == "fogo" && teste1.value == "terra"){

        resultado.innerHTML = "VOCÊ GANHOU<br>Fogo derreteu a Terra!";

        ganhou();

    }

    else if(teste.value == "fogo" && teste1.value == "agua"){

        resultado.innerHTML = "VOCÊ PERDEU<br>Fogo foi apagado pela Água!";

        perdeu();

    }

    else if(teste.value == "fogo" && teste1.value == "raio"){

        resultado.innerHTML = "VOCÊ PERDEU<br>Fogo foi destruído pelo Raio!";

        perdeu();

    }
    else if(teste.value == "planta" && teste1.value == "agua"){

        resultado.innerHTML = "VOCÊ GANHOU<br>Planta absorveu a Água!";

        ganhou();

    }

    else if(teste.value == "planta" && teste1.value == "terra"){

        resultado.innerHTML = "VOCÊ GANHOU<br>Planta dominou a Terra!";

        ganhou();

    }

    else if(teste.value == "planta" && teste1.value == "fogo"){

        resultado.innerHTML = "VOCÊ PERDEU<br>Planta foi queimada pelo Fogo!";

        perdeu();

    }

    else if(teste.value == "planta" && teste1.value == "raio"){

        resultado.innerHTML = "VOCÊ PERDEU<br>Planta foi incendiada pelo Raio!";

        perdeu();

    }
    else if(teste.value == "raio" && teste1.value == "agua"){
       resultado.innerHTML = "VOCÊ GANHOU<br>Raio destruiu a Água!";

        ganhou();
    }
    else if(teste.value == "raio" && teste1.value == "fogo"){
        resultado.innerHTML = "VOCÊ GANHOU<br>Raio destruiu o Fogo!";
        ganhou();
    }
    else if(teste.value == "raio" && teste1.value == "terra"){
        resultado.innerHTML = "VOCÊ PERDEU<br>Raio foi bloqueado pela Terra!";
        perdeu();
    }
    else if(teste.value == "raio" && teste1.value == "planta"){
        resultado.innerHTML = "VOCÊ PERDEU<br>Raio foi enfraquecido pela Planta!";
        perdeu();
    }
    else if(teste.value == "terra" && teste1.value == "raio"){
        resultado.innerHTML = "VOCÊ GANHOU<br>Terra bloqueou o Raio!";
        ganhou();
    }
    else if(teste.value == "terra" && teste1.value == "fogo"){
        resultado.innerHTML = "VOCÊ GANHOU<br>Terra sufocou o Fogo!";
        ganhou();
    }
    else if(teste.value == "terra" && teste1.value == "agua"){
        resultado.innerHTML = "VOCÊ PERDEU<br>Terra foi penetrada pela Água!";
        perdeu();
    }
    else if(teste.value == "terra" && teste1.value == "planta"){
        resultado.innerHTML = "VOCÊ PERDEU<br>Terra foi dominada pela Planta!";
        perdeu();
    }
    else{
        resultado.innerHTML = "EMPATE!";
        teste.firstChild.classList.add("vencedor");
        teste1.firstChild.classList.add("vencedor");
    }
    playAgain.style.display = "flex";
}

function ganhou(){
    score += 1;
    pontuacao.innerHTML = score;
    destacarVencedor(teste.firstChild);
}
function perdeu(){
    destacarVencedor(teste1.firstChild);
}
function destacarVencedor(elemento){
    elemento.classList.add("vencedor");
}
function limparEfeitos(){
    var elementos = document.querySelectorAll(".elemento");
    elementos.forEach((item) => {
        item.classList.remove("vencedor");
    });
}
function reset(){
    jogo.style.display = "flex";
    selecao.style.display = "none";
    resultado.innerHTML = "";
    playAgain.style.display = "none";
    teste.innerHTML = "";
    teste1.innerHTML = "";
    buttonRegras.style.display = "block";
    limparEfeitos();
}