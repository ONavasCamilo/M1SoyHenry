function multiplicar(a, b){
    return a * b
}

const multiplicaPorSeisDesdeSegundoParametro = multiplicar.bind(this, null, 6)

console.log(multiplicaPorSeisDesdeSegundoParametro());