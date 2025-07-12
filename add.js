let additem=document.querySelector('#addsitem')
let useritem=document.querySelector('.useritem')

function formshow(e){

    useritem.classList.toggle('active');
}

additem.addEventListener('click',formshow)


let userForm = document.querySelector('#userForm'); // your form
let spoilageTable = document.querySelector('#Spoilagetbl'); // your table

userForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload on Enter

    let item = document.querySelector('#item').value;
    let stock = document.querySelector('#stockbyuser').value;
    let sale = document.querySelector('#sale').value;
    let expiry = document.querySelector('#expiry').value;
    let riskscore = document.querySelector('#risk').value;
    let risk = document.querySelector('#risklevelbyuser').value;

    let newrow = spoilageTable.insertRow(-1); // correct API

    let cell1 = newrow.insertCell(0);
    let cell2 = newrow.insertCell(1);
    let cell3 = newrow.insertCell(2);
    let cell4 = newrow.insertCell(3);
    let cell5 = newrow.insertCell(4);
    let cell6 = newrow.insertCell(5);

    cell1.textContent = item;
    cell2.textContent = stock;
    cell3.textContent = sale;
    cell4.textContent = expiry;
    cell5.textContent = riskscore;
    cell6.textContent = risk;

    cell6.style.backgroundColor = "lightgreen";
    cell6.style.borderRadius = "10px";
    cell6.style.padding = "0.5rem";
    cell6.style.textAlign = "center";

    // Hide the form after submission
    useritem.classList.remove('active');

    // Clear form fields
    userForm.reset();
});



