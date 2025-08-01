// const box=document.querySelector('#box');
const box=document.getElementById('box');
setInterval(function (){
let date = new Date();
// console.log(date.toLocaleTimeString());
box.innerHTML=date.toLocaleTimeString();
},1000)
