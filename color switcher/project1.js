const color=document.querySelectorAll('.color');
const body=document.querySelector('body')

color.forEach(function (color) {
    
    color.addEventListener('click',function(e) {
         // console.log(e);
         console.log(e.target);
         if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
         }
         if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
         }
         if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
         }
         if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id;
         }
    });
});