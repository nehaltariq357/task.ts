// write a javascript function that accepts a number as a parameter and check whether it is prime or not using recursion. 


const primeNumbers= (num:number)=>{

  if(num<2){
    return false
  }
for(let i = 2 ; i < num ; i++){
if(num % i === 0){
  return false
}
}

 return true
}

console.log(primeNumbers(1))