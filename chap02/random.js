let min = 10;
let max = 20;
let i;
for(i=0; i<30; i++ ){
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(num);
}
