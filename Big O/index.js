const arr = [1,2,3,4,5]

function printAllPairs(arr){
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length; j++) {
           if (arr[i] === arr[j]) {
               continue;
           }
           console.log(`{${arr[i]}, ${arr[j]}}`);           
       }        
    }
}

function printAllPairsEs6(arr){
    arr.forEach(first => {
       arr.forEach(second => {
           if(first !== second){
               console.log(`{${first}, ${second}}`); 
           }
       }) 
    });
}

printAllPairs(arr) // O(n^2)