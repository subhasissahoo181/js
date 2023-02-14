// function validate(){
//     let  num1 = parseInt(document.getElementById('num1').value);
//     let  num2 = parseInt(document.getElementById('num2').value);

//     let sum = num1 + num2;
//     let result = document.getElementById("res")
//     result.innerHTML = "sum is "+(num1 + num2);
//     // return false;
//     // document.write(result);
//     // document.write(sum)
//     document.getElementById('spanResult').textContent = result;


// }


// ---------------------------------------------

// function validate(){
//     var  num1 = parseInt(document.getElementById('num1').value);

//     if(num1 %2 ==0){
//         var result = document.getElementById("res").innerHTML = "even ";
//         document.write(result);
//     }
//     else{
//         var result = document.getElementById("res").innerHTML = "odd ";
//         document.write(result);
//     }
// }

// -----------------------------------------
// function validate(){
//     var  num1 = parseInt(document.getElementById('num1').value);
//     if(num1 < 0){
//         return "number has to be positive."
//     }
    
//     //base case
//     if(num1 == 0 || num1 == 1){
//         return 1;
//     //recursive case
//     }else{
//         return num1 * factorial(num1-1);
//     }
//     var result = document.getElementById("res").innerHTML = "num1 ";
//         document.write(result);
// }
// num1 = Number(document.getElementById('num1').value)
//     fac = 1
//     defa = 0


// ==============================
// function validate(myString) {
//     return /\d/.test(myString);
//   }


//   =======================
document.addEventListener("click", calc);

function calc(evt) {
  console.clear();
  if (evt.target.dataset.method) {
    const theMethod = evt.target.dataset.method;
    const value = +document.querySelector("#num").value;
    switch(theMethod) {
      case "log": {
        return console.log(Math[theMethod](value));
      }
      case "sqrt": {
        return console.log(Math[theMethod](value));
      }
      default: return true;
    }
  }
}
give us a number <input id="num" type="number" value="100"> 
<button data-method="log">log</button>
<button data-method="sqrt">square root</button>