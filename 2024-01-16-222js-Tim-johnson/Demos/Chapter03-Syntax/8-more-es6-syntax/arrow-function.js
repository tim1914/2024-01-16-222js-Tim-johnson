const values = [1,2,3,4,5];

const anonymousItems = values.map(function(value){
    return "Item: " + value;
});

console.log(anonymousItems);

const arrowItems = values.map((value)=>{
    return "Item: " + value;
});

console.log(arrowItems);

//if only 1 param, dont need parenthesis
//if only one statement, dont need curly braces
//if only a return statement, do not need return keyword
const arrowItemsShorter = values.map(value => "Item: " + value);

console.log(arrowItemsShorter);