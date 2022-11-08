// Binary Representaion of a Number

BRN(200);

function BRN(n){
    var str="";
    while(n>0){
        str+=Math.floor(n%2);
        n=n/2;
    }
    str=str.slice(0,32);
    str=str.split("").reverse().join("");
    console.log(str);
}