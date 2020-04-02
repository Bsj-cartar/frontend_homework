let str = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";
let str2 = "";
for(let i = 0; i < str.length; i++) {
    if( str[i]!=' ')
        str2 = str2 + str[i];
        
}
console.log(str2);