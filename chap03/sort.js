let arr = [];
for (let i = 0; i<100; i++) {
    let num = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    arr[i] = num;
}
arr.sort();
console.log(arr)