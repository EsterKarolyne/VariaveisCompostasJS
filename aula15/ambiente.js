
 /*jeito 1
let num = [1,8,4,6]

console.log(num.length)
console.log(num.sort())
console.log(num[3])*/

/*jeito 2
let valores = [1,3,2,4,5,6,9]

for(let pos=0; pos < valores.length; pos++){
    console.log([pos])
}
*/

//jeito 3
/*let valores = [1,3,2,4,5,6,9]

for(let pos in valores){
    console.log(valores[pos])
}
*/

//indicar a posição

/*let valores = [1,3,2,4,5,6,9]
    let pos = valores.indexOf(9)
    console.log(`${pos}`)*/


// funcões

function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(3,6))
//

let v = function(x){
    return x*2
}

console.log(v(5))
//

function fatorial(n){
    let fat = 1

    for(let c = n; c>1; c--){
        fat*=c
    }
    return fat
}
console.log(fatorial(5))