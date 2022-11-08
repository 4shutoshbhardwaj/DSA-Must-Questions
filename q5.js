// Check For Anagram

console.log(CFA("ABBCA","AACBB"));

function CFA(str1,str2){
    str1.sort();
    str2.sort();
    let i=0;
    while(i<str1.length){
        if(str1[i]!==str2[i]){
            return false;
        }
    }
    return true;
}