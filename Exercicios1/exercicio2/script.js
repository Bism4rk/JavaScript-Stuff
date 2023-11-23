function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
       window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0  && idade < 5){
                img.setAttribute('src', 'bebem.png')
                // bebê
            }
            else if(idade < 17){
                img.setAttribute('src', 'criancam.png')

                // criança
            }
            else if(idade < 24){
                img.setAttribute('src', 'jovemm.png')
                // jovem
            }
            else if(idade < 50){
                img.setAttribute('src', 'adultom.png')
                // adulto
            }
            else{
                img.setAttribute('src', 'idosom.png')
                // idoso
            }
        }
        else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0  && idade < 5){
                img.setAttribute('src', 'bebef.png')
            }
            else if(idade < 17){
                img.setAttribute('src', 'criancaf.png')
            }
            else if(idade < 24){
                img.setAttribute('src', 'jovemf.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'adultof.png')
            }
            else{
                img.setAttribute('src', 'idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é um(a) ${genero} com ${idade} anos!`
        res.appendChild(img)

    }
}