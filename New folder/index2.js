let a;
let b;
let c
document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = (a * b) / 2 

    document.getElementById("output").innerHTML = "L = " + c +"cm2";
}