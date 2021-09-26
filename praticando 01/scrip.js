function carregar(){
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if (hora < 12){
         msg.innerHTML += '.' + ' ' + 'Bom dia!'
         img.src = 'manha.jpg'
         document.body.style.background = '#836FFF'
    }

    else if (hora >=12 && hora<18){
        msg.innerHTML += '.'+' ' +  'Boa tarde!'
        img.src = 'tarde.jpg'
        document.body.style.background = '#FFA500'
    }

    else {
        msg.innerHTML += '.'+' ' +  'Boa noite!'
        img.src = 'noite.jpg'
        document.body.style.background = '#696969'
    }
}