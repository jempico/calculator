function calculate () {
    var total = arguments[0];
    var operation = ["+", "-", "/", "*"];
    var action = "";
   for (let i=0; i<operation.length; i++) {
    for (let keys in arguments) {
        if (arguments[keys] == operation[i]) {
            action = operation[i];
        }
          }
   }
  
    if (action == "+") {
        for (let i=1; i<arguments.length -1; i++) {
            var sum = total + arguments[i];
            total = sum;
        } 
    }

    if (action == "-") {
        for (let i=1; i<arguments.length -1; i++) {
            var rest = total - arguments[i];
            total = rest;
        } 
    }

           console.log(total);

       }

   
   calculate(4,2,1,"+");
   
   