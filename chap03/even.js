let arr = [];
for (let i = 0; i<10; i++) {
    let num = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    arr[i] = num;
}
console.log(arr);

for(let i =0; i<arr.length; i++) {
    if(arr[i] % 2 == 0) {
        arr.splice(i, 1);
        i--;
    }
        
}
console.log(arr);