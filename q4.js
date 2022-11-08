// Binary Representaion to a Number

BRN("00000000000000000000000000000111");

function BRN(str){
    let inc=1;
    let val=0;
    for(let i=str.length-1;i>=0;i--){
        if(str[i]==1){
            val+=inc;
        }
        inc=inc*2;
    }
    console.log(val);
}