function contar (){
var inicio = document.getElementById ('inic')
var fim = document.getElementById ('fm')
var pass = document.getElementById ('pass')
var res = document.getElementById ('res')

if(inicio.value.length == 0|| fim.value.length == 0 || pass.value.length == 0) {
     window.alert ('Faltam Dados!');
} else{
    res.innerHTML = 'contando:'
    var i = Number (inicio.value)
    var f= Number (fim.value)
    var p= Number (pass.value)

        for (var c = i; c <= f; c += p ){
        res.innerHTML += `${c} \u{27A1}`
        }

    }
}