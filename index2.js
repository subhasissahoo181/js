function sum() {
   
    num1 = Number(document.getElementById('num1').value)
    num2 = Number(document.getElementById('num2').value)
    document.write(num1 + num2)
    // sum = num1+num2
    // document.getElementById("p1").innerHTML = sum;
    
}

function eoro(){
    num1 = Number(document.getElementById('num1').value)
    if (num1 % 2 == 0) {
        document.write("Even")
    }
    else{
        document.write("odd")
    }
}

function factorial(){
    num1 = Number(document.getElementById('num1').value)
    fac = 1
    defa = 0


    // if (num1 == 0 || num1 == 1) {
    //     document.write(defa)
    // }

    // else if(num1 > 1){
    //     for(let index = 1; index <= num1; index++) {
    //         fac = fac * i
            
    //     }
       

    // }

    console.log(fac)

    document.write(fac)

    

}

function len() {
   
    nm = document.getElementById('num1').value;
    num = Number(nm.length)
 
    document.getElementById("result").innerHTML = "Total char in name"+num;

   
}


function numcheck() {
    len = 0
    nm = document.getElementById('num1').value;
    for (let i = 0; i < nm.length; i++) {
        if (Number.isInteger(Number(nm.charAt(i))) == true) {
            document.write("Integer char spoted")
            break;
        }
        else{
            len = len+1;
        }
     
        
        
    }

    if (len == nm.length) {
        document.write("Integer char not spoted")
        
    }

   


   
}

function lendif() {
   
    fn = document.getElementById('num1').value;
    ln = document.getElementById('num2').value;
    num = Number(fn.length) - Number(ln.length)
 
    document.write("Difference: " + num)

   
}