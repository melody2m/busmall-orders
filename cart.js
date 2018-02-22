'use strict';

Prod.allProds = [];
var slideCount = 0;
var foundNumbers = [];
var titleData = [];
var clickData = [];
var clickRetrieve = [];

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

function populateCart(){

    var productId = JSON.parse(localStorage.getItem('product'));
    var storedQuantity = JSON.parse(localStorage.getItem('quantity'));

    console.log( productId + storedQuantity)
    if (productId){
        for(var i = 0; i < Prod.allProds.length; i++){
            if (productId === Prod.allProds[i].name){
                productCart.textContent = Prod.allProds[i].name;
                productImage.src = Prod.allProds[i].filepath;
                productImage.title = Prod.allProds[i].filepath;
                quantityCart.textContent = "x" + storedQuantity;
            }
        }
    }
}

populateCart();

clearButton.addEventListener('submit', clearCart);

function clearCart(){
    localStorage.clear();
}
