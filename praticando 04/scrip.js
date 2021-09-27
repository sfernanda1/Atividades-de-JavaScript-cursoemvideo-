function tab (){
    var num = document.getElementById ('num')
    var tab = document.getElementById ('seltab')
    if (num.value.length==0) {  
        window.alert ('Por favor, digite um número!') 
    } else {
        var n = Number(num.value)  
        var c = 1
        while (c <= 10) {
            var item = document.createElement ('option')
            item.text = `${n} x ${c} = ${n*c} ` //o que vai estar dentro da option
            tab.appendChild (item) //adicionar elemento filho
            c++
        }
    }
    

}