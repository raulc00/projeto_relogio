function chama_funcao(){

    get_hora();
    trocar_mensagem();
    transicao_dia();
}


function get_hora(){

    const data = new Date();

    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();

    var tempo_atual = `${String(hora).padStart(2, '0')}:${String(minuto).padStart(2, '0')}:${String(segundo).padStart(2, '0')}`

    window.document.getElementById('tempo_dia').innerHTML = `A hora atual é: ${tempo_atual}`
}

function trocar_mensagem(){

    const hora = new Date().getHours();

    var mensagem = window.document.getElementById('p_msg')
    var imagem = window.document.getElementById('imagem_dia')
    // var cor_fundo = window.document.body.background

    if(hora >= 0 && hora < 6){

        mensagem.innerHTML = 'Madrugada...'
        imagem.src = 'assets/night.jpg'
    }
    else if(hora < 12){

        mensagem.innerHTML = 'Bom dia!'
        imagem.src = 'assets/manha.jpg'
    }
    else if(hora >= 12 && hora < 17){

        console.log("tarde");
        mensagem.innerHTML = 'Boa tarde!';
        imagem.src = 'assets/tarde.jpg'
    }
    else if(hora >= 17 && hora <= 23){

        console.log("noite");
        mensagem.innerHTML = 'Boa noite!'
        imagem.src = 'assets/night.jpg'
        // cor_fundo = '#1658DB'
        
    }

}

function transicao_dia(){

    const hora = new Date().getHours();

    var cor_fundo = window.document.body;

    if(hora >= 0 && hora < 6){

        console.log("madrugada");
        cor_fundo.style.background = '#083245'
    }

    else if(hora < 12){

        console.log("manha")
        cor_fundo.style.background = '#53a5c9'
    }
    else if(hora >= 12 && hora < 17){

        console.log("tarde");
        cor_fundo.style.background = '#AFEEEE';

    }
    else if(hora >= 17 && hora <= 23){

        console.log("noite");
        cor_fundo.style.background = '#095070'

    }



}

setInterval(get_hora, 1000);
setInterval(trocar_mensagem, 1000);
setInterval(transicao_dia, 1000);