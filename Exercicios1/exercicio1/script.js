function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var timeMinuto = data.getMinutes()
    msg.innerHTML = `Agora é ${hora}:${timeMinuto}. `


    if(hora >= 6 && hora < 9){
        img.src = 'img/manha1.png'
        document.body.style.background = '#a7b3bb'
        msg.innerHTML += `Bom dia!`
    }
    else if(hora >= 9 && hora < 12){
        img.src = 'img/manha2.png'
        document.body.style.background = '#76c5f8'
        msg.innerHTML += `Bom dia!`
    }
    else if(hora >= 12 && hora < 15){
        img.src = 'img/tarde1.png'
        document.body.style.background = '#b1d5f0'
        msg.innerHTML += `Boa tarde!`
    }
    else if(hora >= 15 && hora < 18){
        img.src = 'img/tarde2.png'
        document.body.style.background = '#ca9274'
        msg.innerHTML += `Boa tarde!`
    }
    else if(hora >= 18 && hora < 23){
        img.src = 'img/noite1.png'
        document.body.style.background = '#6f3066'
        msg.innerHTML += `Boa noite!`
    }
    else{
        img.src = 'img/noite2.png'
        document.body.style.background = '#031c3a'
        msg.innerHTML += `Boa noite!`
    }
}
