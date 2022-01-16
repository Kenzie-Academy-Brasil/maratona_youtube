

// VARIAVEIS COM LET 
let nomePessoa = "Hudson Carolino"
let idade = 25

// VARIAVEIS COM CONST  
const nome = "Maria"

// TIPOS DE DADOS
// "Hudson Carolino" => STRING
// TIPO DE DADO INTEIRO => let numero = 12

// BOOLEAN
//(true => verdadeiro) e (false => falso)

//MAIS SOBRE STRINGS
// let primeiroNome = "Hudson "
// let sobrenome    = "Carolino"

// let numero1 = "1"
// let numero2 =  5

// console.log(primeiroNome + sobrenome)
// console.log(numero1 + numero2)
//


//OPERADORES BÁSICOS
let numero1 = "1"
let numero2 =  5

//console.log(numero1+numero2)

// (+) SOMA
// (*) MULTIPLICAÇÃO
// (/) DIVISÃO 
// (-) SUBTRAÇÃO
// (+=) MAIS IGUAL 
// (-=) MENOS IGUAL

// let contador  = 0;

// console.log(contador)
// contador += 1

// console.log(contador)
// contador += 1

// console.log(contador)
// contador += 1

// console.log(contador)
// contador += 1

// console.log(contador)
// contador += 1

//ESTRUTURAS CONDICIONAIS 
// OPERADORES DE COMPARAÇÃO E / RELACIONAIS
// VERIFICAÇÃO IGUALDADE  (1 == 1) => TRUE 
// VERIFICAÇÃO IGUALDADE/TIPO DE DADO  (1 === "1") => FALSE 
//VERIFICAÇÃO  MAIOR  (1 > 10) => FALSE 
//VERIFICAÇÃO  MENOR  (1 < 10) => TRUE 

//OPERADORES LÓGICOAS 

// (1 == 1 && 2 == 2) => TRUE 
// (1 == 1 && 4 == 2) => FALSE 

// let hudson  = "Hudson"
// let idadeHudson = 25

// (hudson == "Hudson" && idadeHudson == 25)
//
// (1 == 1 || 4 == 2) => TRUE  
// 1 !== 2 => TRUE
// 1 !== 1 => FALSE
//-----------------------//

//CONDICIONAIS 

//SE (TRUE) FAÇA ALGUMA COISA | FAÇA OUTRA COISA

// if(10 >= 10){
//     console.log("Verdadeiro")
// }else{
//     console.log("False")
// }

//FUNÇÕES 

//DECLARANDO FUNÇÃO 
// function retornarNomeCompleto(){

//     let nome = "Hudson"
//     let sobreNome = "Carolino"
//     let idade = 25
//     let profissao = "Desenvolvedor"
    
//     console.log(`Meu nome é: ${nome}`)
//     console.log(`Meu sobrenome é: ${sobreNome}`)
//     console.log(`Minha idade: ${idade}`)
//     console.log(`Minha profissão: ${profissao}`)

// }
// //ESTOU CHAMANDO MINHA FUNÇÃO 
// retornarNomeCompleto()
function soma(numero1, numero2){ // RECEBER PARAMETROS
   
    let resultado  = numero1 + numero2
    
    return resultado
}
let resultadoFuncaoSoma = soma(5, 10)//ARGUMENTOS

//Estrutura de repetição 

//let listaNomes  = "Hudson, Maria, Daniel, Nicholas"

//ARRAY SEM DADOS 
//let listaNomes = ["Hudson", "Maria", "Wallace", "Aline", "Pedro", "Daniel", "Amanda"]
//console.log(listaNomes) 

//ALTERANDO VALOR DE UMA POSIÇÃO
// listaNomes[0] = "Larissa"
// console.log(listaNomes)
// listaNomes.push("Jardel")
// console.log(listaNomes)

const hudson = {
    nome: "Hudson",
    telefone: "00 000000",
    empresa: "Kenzie Academy",
    email: "exemplo@gmail.com"
}

const maria = {
    nome: "Maria",
    telefone: "00 000000",
    empresa: "Kenzie Academy",
    email: "maria@gmail.com"
}

const arrayPessoas = []
arrayPessoas.push(hudson)
arrayPessoas.push(maria)

// console.log(arrayPessoas)

