    // Javascript program for Convert the given number into a roman numeral
    // Roman numerals are a numeral system that originated in ancient Rome and remained the usual way of writing numbers throughout Europe well into the Late Middle Ages. Numbers in this system are represented by combinations of letters from the Latin alphabet.

    function inputFromUserFunction()
    {
        // Take input from Input Text field store into variable inputFromUser
       var inputFromUser = parseInt(document.getElementById("result").value);
   
       function convertToRoman(num) {

           // Make array of roman numeral and number
           var romanNumber = [
             ["M", 1000],
             ["CM", 900],
             ["D", 500],
             ["CD",400],
             ["C", 100],
             ["XC", 90],
             ["L", 50],
             ["XL", 40],
             ["X", 10],
             ["IX", 9],
             ["V", 5],
             ["IV", 4],
             ["I" , 1]
         ];
         
           // check number is zero return undefined or empty string
           if(num === 0){
             return "";
           };
         
           // use for loop to iterate romanNumber
           for(var i = 0; i< romanNumber.length; i++){
             if(num >= romanNumber[i][1]){
             // returns one letter and then function calls itself to return the next letter if condtion satisfied.
               return romanNumber[i][0] + convertToRoman(num - romanNumber[i][1]);
             }
           }
          }
       // call function and give argument as inputFromUser and store into variable output
       var output = convertToRoman(inputFromUser);
       console.log(output); // output store in web-browser console
       return document.getElementById("result").value = output; // output display in text-field in webpage
       
    }

   

    
