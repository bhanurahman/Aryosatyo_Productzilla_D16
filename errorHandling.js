try{
    setName('Ilham')
    setName(123456)
    // throw new Error('Ada ERROR HEY');
    // console.log('hello');
    // console.log('1');
    // console.log(hello); // penyebab error
    // console.log('2');

} catch(e){
    console.log('ada error guys');
    console.log('e.message', e.message);
    console.log('e.name', e.name);
    console.log('e.stack', e.stack);
}
// console.log('bootcamp');
// console.log('dengan');
// console.log('MSIB');


function setName(name){
    if (typeof name != 'string'){
        throw new Error('Nama Harus String')
    }
    console.log('hello', name);
}