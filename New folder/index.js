let a;
let b;
let c;


document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = document.getElementById("cTextBox").value;
    c = Number(c)

    d = a + b + c
    document.getElementById("output").innerHTML = "K = " + d;
}