'use strict';

function BinarioADecimal(num) {
   let arrBinario = num.split('').reverse()
   let suma = 0
   for (let i = 0; i < arrBinario.length; i++) {
       suma += 2 ** i * arrBinario[i]
   }
   return suma
}

function DecimalABinario(num) {
   let binario = ''
   while (num > 0) {//mientras el num sea mayor a 0
      let residuo = num % 2//guardamos el residuo
      binario = residuo.toString() + binario//concatenamos al inicio nuevo residuo + binario
      num = Math.floor(num / 2)
   }
   return binario
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
