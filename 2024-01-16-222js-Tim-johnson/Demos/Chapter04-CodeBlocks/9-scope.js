/* eslint-disable no-unused-vars */
let name1 = 'Alice';
let name2 = 'Bob';
// notAllowed = true;  // uncomment and code will throw error
console.log('Global ' + name1);
console.log('Global ' + name2);

{
    let name3 = 'Clare';
    let name4 = 'Danny';
    console.log('Local ' + name3);
    console.log('Local ' + name4);
}
//console.log( 'Global ' + name3 ) ;
//console.log( 'Global ' + name4 ) ; 
// out of scope for name3 and name4 - throws ReferenceError

function printName1() {
    let name5 = 'Emma';
    let name6 = 'Frank';
    function printName2() {
        let name7 = 'Greta';
        let name8 = 'Harold';
        console.log('Inner ' + name5);
        console.log('Inner ' + name6);
    }
    printName2();
    // console.log( 'Inner ' + name7 ) ;  // uncommment to see error
    // console.log( 'Inner ' + name8 ) ;  // uncommment to see error
}
printName1();
