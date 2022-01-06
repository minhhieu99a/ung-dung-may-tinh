function Cong(){
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    let c = a+b ;
    document.getElementById("hienthi").innerText="Result Addtion" + ' ' + c;
}function Tru(){
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    let c = a-b ;
    document.getElementById("hienthi").innerText="Result Subtraction" + ' ' + c;
}function Nhan(){
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    let c = a*b ;
    document.getElementById("hienthi").innerText="Result Multiplication" +' ' + c;
}function Chia(){
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    let c = a/b ;
    document.getElementById("hienthi").innerText="Result Division"+ ' ' + c;
}