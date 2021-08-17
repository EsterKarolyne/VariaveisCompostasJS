let nome = window.document.getElementById('nome')
let lado = window.document.getElementById('lado')
let res = window.document.getElementById('res')


function Descobrir(){
    var lados = Number(lado.value) 
    if(lados < 3 || lados > 10){
        alert('Número inválido')

    }else{
        var resDiagonal = calcDiagonal(lados)
    console.log(resDiagonal)
    res.innerHTML = ''
    res.innerHTML += `Contém ${resDiagonal} diagonais. <br><br>`

    var resAngulo = calcAngulo(lados)
    console.log(resAngulo)

    res.innerHTML += `Seus ângulos internos somam ${resAngulo}° graus. <br> `
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(lados == 3){
        res.innerHTML += `<p>É um Triangulo.</p>`
        img.setAttribute('src', './files/triangulo.png')  
    } else if(lados == 4){
        res.innerHTML += `<p>É um Quadrado.</p>`
        img.setAttribute('src', './files/quadrado.png') 
    } else if (lados == 5){
        res.innerHTML += `<p>É um Pentágono.</p>`
        img.setAttribute('src', './files/pentágono.png') 
    } else if (lados == 6){
        res.innerHTML += `<p>É um Hexágono.</p>`
        img.setAttribute('src', './files/hexágono.png') 
    } else if (lados == 7){
        res.innerHTML += `<p>É um Heptágono.</p>`
        img.setAttribute('src', './files/heptágono.png') 
    } else if (lados == 8){
        res.innerHTML += `<p>É um Octógono.</p>`
        img.setAttribute('src', './files/octógono.png') 
    } else if (lados == 9){
        res.innerHTML += `<p>É um Eneágono.</p>`
        img.setAttribute('src', './files/Enenágono.jpg') 
    } else if (lados == 10){
        res.innerHTML += `<p>É um Decágono.</p>`
        img.setAttribute('src', './files/decágono.png') 

    }                                            
    res.appendChild(img)
    img.style.width = '385px'
        img.style.height = '390px' 

    }
          
}

function calcDiagonal(lado){
    var resultado = (lado*(lado-3))/2
    return resultado
}

function calcAngulo(lado){
    var resultado = (lado-2)*180
    return resultado 
}

