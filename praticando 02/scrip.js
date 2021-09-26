function calcular(){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var imagem = document.getElementById ('imagem')
    var idade = ano-Number (fano.value)
    var res = document.getElementById ('res')
    var fsex = document.getElementsByName ('radsex')

    if (fano.value.length==0 || fano.value >ano){
        window.alert ('[ERRO] Verifique os dados e tente novamente.')

    } else if(idade <12 ){
        if (fsex[0].checked){ 
            res.innerHTML = `Você é um menino de ${idade} anos ` 
            imagem.src = 'fotos/menino.jpg'

        } else{
            res.innerHTML= `Você é um menina de ${idade} anos ` 
            imagem.src = 'fotos/menina.jpg'
        }

    } else if (idade>= 12 && idade<18){
        if (fsex[0].checked){
            res.innerHTML = `Você é um adolescente de ${idade} anos`
            imagem.src = 'fotos/garoto.jpg'
        
        } else{
            res.innerHTML = `Você é uma adolescente de ${idade} anos`
            imagem.src = 'fotos/garota.jpg'
         } 

    } else if (idade>=18 && idade<65){
        if(fsex[0].checked){
            res.innerHTML = `Você é um homem de ${idade} anos`
            imagem.src = 'fotos/homem.jpg'   
        } else{
            res.innerHTML = `Você é uma mulher de ${idade} anos`
            imagem.src = 'fotos/mulher.jpg'   
        }

     } else {
        if(fsex[0].checked){
            res.innerHTML = `Você é um senhor de ${idade} anos`
            imagem.src = 'fotos/idoso.jpg' 
        } else{
            res.innerHTML = `Você é um senhor de ${idade} anos`
            imagem.src = 'fotos/idosa.jpg' 
        }
    }
}