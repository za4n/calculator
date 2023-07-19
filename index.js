

function getPrevious(string,operator){
 let a = string.split(operator);
 return a[0];
}
const result = document.querySelector('.result');
const calc = document.querySelector('.calculationPanel');
let queue = [];
document.body.addEventListener('click',function(e){
if(e.target.matches('.AC')){
reset();
}
 else if(e.target.matches('#multiply') || e.target.matches('#plus') || e.target.matches('#minus') || e.target.matches('#divide')){
let n = calculation(result,queue);
 queue.push(e.target.innerText);
 calc.innerHTML = `${n}${queue[0]}`;
}
else if(e.target.matches('.equal')){
  let n = calculation(result,queue);
reset();
result.innerHTML = n;
}
else if(e.target.matches('span')){
    result.append(`${e.target.innerText}`);
}});

function calculation(result,queue){
  let n = result.innerText;
   result.innerHTML = null;
   if(queue.length != 0){
 let oldopertor = queue.pop();
 let p = Number(getPrevious(calc.innerHTML,oldopertor));
 switch(oldopertor){
    case '+':
   n = (p + Number(n));
   break;
   case '-':
   n = (p - Number(n));
   break;
   case '*':
   n = (p * Number(n));
   break;
   case '/':
   n = (p / Number(n));
   break;
 }
}
return n;
}

function reset(){
    queue = [];
   result.innerHTML = null;
   calc.innerHTML = null; 
   
}