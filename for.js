//FOR IN LOOP

let string = "YES"
for (letter in string) {
    //console.log(letter);  DEZE GEEFT 0 1 2
    //console.log(string[letter]) DEZE GEEFT Y E S
}

let array = ["Lalena","Andy","Plant"]
for (item in array) {
    //console.log(item); DEZE GEEFT 0 1 2
    //console.log(array[item]); DEZE GEEFT Lalena Andy Plant
}

let arrayNest = [
    {
        name: "LDR",
        age: "young",
        living: "yes"
    },
    {
        name: "Andy",
        age: "older",
        living: "yes"
    }
]

for (obj in arrayNest) {
    //console.log(arrayNest[obj]); GEEFT DE 2 OBJECTEN MET DE VOLLEDIGE INHOUD
    //arrayNest[obj].mail="vb@m.com" VOEGT MAIL TOE AAN BEIDE OBJECTEN
    //console.log(arrayNest); TOONT TOEVOEGING MAIL
    //console.log(arrayNest[obj].age); TOONT DE WAARDE VAN AGE VAN DE TWEE OBJECTEN
    //console.log(arrayNest[obj].age, arrayNest[obj].name); LEEFTIJD EN NAAM
}

let arrayArray = ["een","twee",
                    ["tweetwee","tweedrie"]
                ]

for (items in arrayArray) {
                    //console.log(arrayArray[items]); GEEFT ENKEL DE GENESTE ARRAY
                    //console.log([arrayArray]); GEEFT DRIE KEER DE ARRAY VOLLEDIG
                }

let number = [1,2,3,4,5,6,7,78,89,9,90,0,-1] // MET EEN GEWOON CIJFER WERKT HET NIET

for (let num in number) {
    //console.log(num); GEEFT INDEX
    //console.log(number[num]); GEEFT INHOUD
    //console.log(number[0]); GEEFT INDEX 0 DUS 1 MAAL INDEX-1
}

// FOR OF LOOP

let array2 = ["Lalena","Andy","Plant"]

for (let [index,name] of array2.entries()){
   // console.log(`Index:${index}\nName:${name}`);
}

for (let naam of array2) {
    //console.log(naam); GEEFT DE NAMEN
}

let string2 = "YES"

for (let [index,name] of string2){
    //console.log(`Index:${index}`); GEEFT DE WAARDE OP ELKE INDEX
}

let arrayNest2 = [
    {
        name: "LDR",
        age: "young",
        living: "yes"
    },
    {
        name: "Andy",
        age: "older",
        living: "yes"
    }
]

for (let person of arrayNest2) {
    //console.log(person); GEEFT BEIDE OBJECTEN
    //console.log(person.name); GEEFT NAMEN
    //person.sex="m/v" VOEGT SEX TOE
    //console.log(arrayNest2);
}

//FOR LOOP


// Solve each of the given problems, writing a loop the outputs the given output to the JavaScript console.

let numbers = [0,1,2,3,4,5,6,7,8,9,10];

/* 1

let solution = "";
for (i = 0; i < numbers.length; i++) {
  solution += (numbers[i] * 100) + " ";
}
console.log(solution);*/ 

//CORRECT 
//Output 1) 0 100 200 300 400 500 600 700 800 900 1000

/* 2

for (i = 0; i < numbers.length; i++) {
    let result = Math.pow(2, numbers[i]);
    console.log(result);
  }
CORRECT BUT OTHER IS SHORTER*/

/*for(let n of numbers){
    let x=  Math.pow(2,n)
   if(x==128){break}
}
//CORRECT 
//Output 2) 1 2 4 8 16 32 64 128*/

/* 3

let Solution = "";
for (i = 0; i <= numbers.length; i=i+2) {
  Solution += numbers[i] + " ";
}
  console.log(Solution);*/

/* ALSO WORKS

for (let n of numbers){
    if (n%2===0){
        console.log(n);
    }
}
*/
//CORRECT 
//Output 3) 0 2 4 6 8 10

/* 4 

for (let n of numbers){
    if (n%2!==0) {
        let result = n + (Math.ceil(n/2)+1);
        console.log(result);
    }
}

let oplossing = "";
for (let n of numbers){
    if (n%2!==0) {
        oplossing = oplossing + (n + (Math.ceil(n/2)+1)) + " ";
    }
}
 console.log(oplossing);

 for (let n of numbers){
    if (n%2!==0) {
        console.log((n + (Math.ceil(n/2)+1)))
    }
}
//CORRECT
//Output 4) 3 6 9 12 15 */

/* 5 */

//let numbers = [0,1,2,3,4,5,6,7,8,9,10];

/*var i;
var solution = "";
for (i = numbers.length-1; i >=0; i--) {
  solution += (numbers[i]) + " ";
}
console.log(solution);*/

//Output 5) 9 8 7 6 5 4 3 2 1 0