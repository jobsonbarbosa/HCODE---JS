/* SWIT CASE -----
let cor = "amrelo"

switch(cor){
    case "verde":
        console.log("Passe!");
        break;
    case "amarelo":
        console.log("Espere!");
        break;
    case "vermelho":
        console.log("Pare!");
        break;
    default:
        console.log("Cor incorreta!");
}
*/

/* FOR ------
let num = 7;

for(i = 0; i <= 10; i++){
    console.log(`${i} X ${num} = ${i * num}`);
}

*/


function somar(num1, num2, operador){
    
    return eval(`${num1} ${operador} ${num2}`);
}

let resultado = somar(7, 5, "-");

console.log(resultado);
