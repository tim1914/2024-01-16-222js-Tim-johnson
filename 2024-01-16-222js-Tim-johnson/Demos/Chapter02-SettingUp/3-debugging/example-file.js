//set a breakpoint on line 5, use step over, then step into to 
//see difference of either
// STEP OVER - not going into the execution of printLetters 
// STEP INTO - going into printLetters
   const printLetters = function() {
    console.log("abc");
   };
   let x = 3;
   console.log('x', x);
   printLetters();
   console.log("*******");
   printLetters();
   