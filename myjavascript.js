/* 1. Crea una funzione che controlli due numeri interi.
      Ritorna 'true' se uno dei due è 50 o se la somma dei due è 50 */

function checkNumbers (num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    } else {
        return false;
    }
}

let result1 = checkNumbers(25, 50);
console.log(result1); 
let result2 = checkNumbers(20, 30);
console.log(result2); 
let result3 = checkNumbers(10, 30);
console.log(result3);


/* 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. 
     Passa la stringa e la posizione come parametri e ritorni la stringa modificata */

function removeChar(str, position) {
    return str.slice(0, position) + str.slice(position + 1);
}
      
const newString = removeChar('Hello World!', 6); 
console.log(newString);


/* 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100.
     Ritorna 'true' se rispecchia queste condizioni, altrimenti ritona 'false' */ 

function checkIncluded(num1, num2) {
    if ((num1 >= 40 && num1 <= 60 || num2 >= 40 && num2 <= 60 ) ||
        (num1 >= 70 && num1 <= 100 || num2 >= 70 && num2 <=100)) {
            return true;
        }
        else {
            return false; }
}

console.log(checkIncluded(50, 70));
console.log(checkIncluded(30, 61));


/* 4. Crea una funzione che accetti un nome di città come parametro
     e ritorni il nome stesso se inizia con 'Los' o ' New', altrimenti ritorni 'false' */

     function checkCityName (cityName) {
        if (cityName.startsWith('Los')|| cityName.startsWith('New')) {
            return cityName;
        }
        else {
            return false;
        }
     }

    console.log(checkCityName('Los Angeles'));
    console.log(checkCityName('New York'));
    console.log(checkCityName ('Milano'));


/* 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
     L'array dev'essere passato come parametro */    

     function sumArray(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
     } 

     const myArray = [5, 39, 40, 52, 88, 16];
     console.log(sumArray(myArray));


/* 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3.
    Se non li contiene ritorna 'true', altrimenti ritorna 'false' */     

    function checkArray(arr) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === 1 || arr[i] === 3) {
            return false;
          }
        }
        return true;
      }
      
      const myArray1 = [5, 2, 4]; 
      const myArray2 = [5, 2, 1];
      
      console.log(checkArray(myArray1));
      console.log(checkArray(myArray2));  