let foo = 12, boo =45;
function main(foo, boo){
    //Only change code belowe this line
    const a = foo;
    const b = boo;
    
    foo = b;
    boo = a;
    
    //Only change code belowe this line
    return {foo, boo};
}
console.log(main(foo, boo));
module.exsports = main;