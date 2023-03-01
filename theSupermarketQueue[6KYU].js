/*
There is a queue for the self-checkout tills at the supermarket. 
Your task is write a function to calculate the total time 
required for all the customers to check out!

input
customers: an array of positive integers representing the queue. 
Each integer represents a customer, and its value is the 
amount of time they require to check out.
n: a positive integer, the number of checkout tills.

output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, 
to ensure you understand the task correctly :)
*/

function queueTime(customers, n) {
   let tills = Array(n).fill(0); // Criando um array de n posições e enchendo eles com 0
   customers.forEach((customer) => { // percorrendo cada cliente do array clientes
     let nextTill = tills.indexOf(Math.min(...tills)) // Percorrendo as filas e vendo qual tem o menor número
     tills[nextTill] += customer; // Acessando a fila com o menor número e adicionando a ela o tempo do prox cliente
   });
   return Math.max(...tills); // retornando a fila com maior valor
 }

console.log(queueTime([],1));
console.log(queueTime([1,2,3,4],1));
console.log(queueTime([2,2,3,3,4,4],2));
console.log(queueTime([1,2,3,4,5],100));
console.log(queueTime([5,3,4],1));
console.log(queueTime([10,2,3,3],2));
console.log(queueTime([2,3,10,2],2));