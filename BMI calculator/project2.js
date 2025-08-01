const form=document.querySelector('form');
//this usecase gives you empty value 
//const height=document.querySelector('#height').value
  form.addEventListener('submit',function(e) {
      e.preventDefault()

      const height=parseInt(document.querySelector('#height').value); //.value => takes input number that is height
      const weight=parseInt(document.querySelector('#weight').value);
      const result=document.querySelector('#result');
                
      if( height===''||height<0 || isNaN(height)){
        result.innerHTML=`please enter a valid height ${height}`;
      }else if(weight===''|| weight<0||isNaN(weight)){
        result.innerHTML=`please enter a valid weight ${weight}`;
      }else{
        const BMI=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${BMI}</span>`;
         }
  });
// const form = document.querySelector('form');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const heightInput = document.querySelector('#height').value.trim();
//     const weightInput = document.querySelector('#weight').value.trim();

//     // const height = parseInt(heightInput);
//     // const weight = parseInt(weightInput);
//     const result = document.querySelector('#result');

//     if (isNaN(height) || height <= 0) {
//         result.innerHTML = 'Please enter a valid height.';
//     } else if (isNaN(weight) || weight <= 0) {
//         result.innerHTML = 'Please enter a valid weight.';
//     } else {
//         const BMI = (weight / (height * height)) * 10000;
//         result.innerHTML = `Your BMI is <strong>${BMI.toFixed(2)}</strong>.`;
//     }
// });
