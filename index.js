// Higher-Order Functions
const calcular = (fn, valorA, valorB) => fn(valorA, valorB);

const somar = (valorA, valorB) => (valorA += valorB);
const subtrair = (valorA, valorB) => valorA - valorB;

console.log(calcular(subtrair, 0, 0));

// Currying
const mensagem = textoInicial => {
  return (complemento = seuNome => {
    return textoInicial + " " + seuNome;
  });
};

// const mensagem = textoInicial => seuNome => textoInicial + " " + seuNome;

const msg = mensagem("Bem vindo:");
console.log(msg("Matheus"));

// Compose

/**
 * OBJETIVO: passar um texto para uma função por exemplo: 
 * aaaaaah
 * e retorna AAAAAAH!
 */

const compose = (fn1, fn2) => {
    return (x) => {
        return fn1(fn2(x))
    }
}

// const compose = (fn1, fn2) => (x) => fn1(fn2(x))

const upercase = (texto) => texto.toUpperCase();
const final = (texto) => texto + ' !';

const response = compose(upercase, final);

console.log(response('ahhhh'))