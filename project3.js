const forms= document.querySelector('form');
forms.addEventlistener('submit', function(e){
e.preventDefault();
    const height=parseInt (document.queryselector('#height').value);
         const weight=parseInt (document.queryselector('#weight').value);
    const result=document.querySelector('#results');
if(height=="" || height<0 || isNaN(height) ){
  result.innerHTML=`Please enter a valid height ${height}`
} else if( weight==="" || weight<0 || isNaN(weight)) { 
     result.innerHTML=`Please enter a valid weight ${weight}`
}else{
const bmi= (weight/((height*height)/10000)).toFixed(2); 
result.innerHTML=`<span>${bmi}</span>`
 }
})