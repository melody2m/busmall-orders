'use strict';

Prod.allProds = [];

function Prod(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    Prod.allProds.push(this);
} 

new Prod('bag', 'img/bag.jpg');
new Prod('banana', 'img/banana.jpg');
new Prod('bathroom', 'img/bathroom.jpg');
new Prod('boots', 'img/boots.jpg');
new Prod('breakfast', 'img/breakfast.jpg');
new Prod('bubblegum', 'img/bubblegum.jpg');
new Prod('chair', 'img/chair.jpg');
new Prod('cthulhu', 'img/cthulhu.jpg');
new Prod('dog-duck', 'img/dog-duck.jpg');
new Prod('dragon', 'img/dragon.jpg');
new Prod('pen', 'img/pen.jpg');
new Prod('pet-sweep', 'img/pet-sweep.jpg');
new Prod('scissors', 'img/scissors.jpg');
new Prod('shark', 'img/shark.jpg');
new Prod('sweep', 'img/sweep.png');
new Prod('tauntaun', 'img/tauntaun.jpg');
new Prod('unicorn', 'img/unicorn.jpg');
new Prod('usb', 'img/usb.gif');
new Prod('water-can', 'img/water-can.jpg');
new Prod('wine-glass', 'img/wine-glass.jpg');

function populateForm(){
    var formParent = document.getElementById('parent');
    for (var i=0; i < Prod.allProds.length; i++){
        var formOption = document.createElement('option');
        formOption.value = Prod.allProds[i].name;
        formOption.textContent = Prod.allProds[i].name;
        formParent.appendChild(formOption);
    }
}

populateForm();

shoppingForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(){
    event.preventDefault();
    var product = event.target.parent.value;
    var quantity = event.target.quantity.value;

    event.target.parent.value = null;
    event.target.quantity.value = null;

    localStorage.setItem('product', JSON.stringify(product));
    localStorage.setItem('quantity', JSON.stringify(quantity));
}


