console.log('hello');
console.log('1');
if (!hello){
    throw new Error('hello is undefined')
}
console.log(hello);
console.log('2');

console.log('--------------------------------------------------------');

function add (a,b){
    const tambah = 0;
    tambah = a + b;
    return tambah;
}
function average (a,b){
    return add(a,b);
}
function main (){
    const x = average(10,20)
    console.log(x);
}

main()


