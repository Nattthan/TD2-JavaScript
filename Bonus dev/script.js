document.body.innerHTML = `
<select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
</select>\n`;

document.body.innerHTML += "<button class='delete'>Supprimer</button>\n"
document.body.innerHTML += "<br><input type='text'>\n";
document.body.innerHTML += "<button class='add'>Ajouter</button>\n"

function addPoint() {
    let input = document.querySelector('input').value;
    document.querySelector('select').innerHTML += `<option>${input}</option>`;
    console.log("Ajout d'une option");
}

function deletePoint(){
    let select = document.querySelector('select');
    let selectedIndex = select.selectedIndex;
    select.options[selectedIndex].remove();
}

function connectClickEvent (){
    let button = document.querySelector('.add');
    let deletebutton = document.querySelector('.delete');
    button.addEventListener("click", addPoint);
    deletebutton.addEventListener("click", deletePoint);
}

connectClickEvent();