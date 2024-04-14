console.log("Polytech Dijon !");
let area = "VIDE";
const width = 1920;
const height = 1080;
area = width * height;
console.log(area);
try{
    height = 1200;
    console.log(height);
} catch(exception){
    console.error(exception);
}

const empty_array =[];
empty_array.push(1);
empty_array.push("Sunset");
console.log(empty_array);

let notTrue = false;
let zero = 0;
if (notTrue === zero){
    console.log("Elles sont égales");
}else{console.log("Elles ne sont pas égales");}

const empty_array2 = [];
for(let i=0; i<30; i++){
    empty_array2.push(Math.random());
}
console.log(empty_array2);

function average(array=[]){
    let summ = 0;
    for(let i=0; i<empty_array2.length; i++){
        summ += array[i];
    }
    return summ / array.length;
}
console.log("La moyenne de l'array est: " + average(empty_array2));