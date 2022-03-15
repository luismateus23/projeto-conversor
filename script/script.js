function converter(){
    var valor1 = document.getElementById('number1')
    var valor = Number(valor1.value)    
    var sel = document.getElementById('selec')
    var sele = String(sel.value)
    var res = document.getElementById('res')

    if(valor == ""){
        window.alert('Nenhum valor informado! Por favor, informe um valor válido!')
    }else{

    switch(sele){
        case 'Dolar':
            var resultado = valor / 5.16 
            res.innerHTML =  resultado.toLocaleString('pt-BR', {style: 'currency',  currency:'USD'})
            break

        case 'Euro':
            var resultado = valor / 5.66
            res.innerHTML =  resultado.toLocaleString('pt-BR', {style: 'currency',  currency:'EUR'})
            break

        case 'Bitcoin':
            var resultado = valor / 204003.84
            res.innerHTML = `BTC ${resultado.toFixed(10)}`
            break

        case 'Ethereum':
            var resultado = valor / 13553.99
            res.innerHTML = `ETH ${resultado.toFixed(8)}`
            break
    }
}






}