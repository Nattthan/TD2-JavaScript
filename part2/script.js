function helloWorld(){
    document.body.innerHTML = "<h1>Hello World !</h1>";
}
helloWorld();

const link = document.querySelector("a");
const paragraph = document.querySelector("#content p");
const titles = document.querySelector("h1");


function changeHtml(){
    document.body.innerHTML = "<h1>Polytech Dijon</h1>";
    document.body.innerHTML += "<p>Un paragraphe avec <strong>un texte important</strong></p>";
    document.body.innerHTML += "<p>Un autre paragraphe avec <a href=https://esirem.u-bourgogne.fr>un lien</a></p>";
    document.querySelector("strong").style.color = "#4691ff";
    document.body.innerHTML += "<input type='text'>";
    document.body.innerHTML += "<button>Click me</button>";
}


function testValue(){
    let input = document.querySelector("input").value;
    if (isNaN(input)){
        document.querySelector("input").style.backgroundColor = "red";
    }
    else if (!isNaN(input) && input%2 === 0){
        document.querySelector("input").style.backgroundColor = "yellow";
    }
    else {document.querySelector("input").style.backgroundColor = "blue";}
}

function connectClickEvent (){
    let button = document.querySelector("button");
    button.addEventListener("click", testValue);
}
changeHtml();
connectClickEvent();

//Test de l'attribut "var"
function testVar() {
    var x = 1;
    if (true) {
        var x = 2;  // même variable !
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

//Test de l'attribut "let"
function testLet() {
    let x = 1;
    if (true) {
        let x = 2;  // différente variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

testVar();
testLet();

function addList(){
    document.body.list
}