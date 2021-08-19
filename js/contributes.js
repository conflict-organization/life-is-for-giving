/* eslint-disable no-undef */
/* eslint-disable quotes */
'use strict';
var resetButton = document.getElementById('resetSection3')
console.log(Donate.allDonates);
var getMain = document.getElementById("contributes-main3");
function renderDataFromLocalStorage() {
  getFromLocalStorage();
  for (var x = 0; x < Donate.allDonates.length; x++) {
    var div1 = document.createElement("div");
    getMain.appendChild(div1);
    var imageContainer = document.createElement("img");
    imageContainer.src = `img/${Donate.allDonates[x].itemName}.png`;
    div1.appendChild(imageContainer);
    console.log(imageContainer.src);
    var makeSection = document.createElement("section");
div1.appendChild(makeSection)
    var paragraph1 = document.createElement("p");
    paragraph1.textContent = `Quantity: ${Donate.allDonates[x].numberQuantity}`;
    makeSection.appendChild(paragraph1);
    var paragraph2 = document.createElement("p");
    paragraph2.textContent = `quality: ${Donate.allDonates[x].qualityType}`;
    makeSection.appendChild(paragraph2);
    var paragraph3 = document.createElement("p");
    paragraph3.textContent = `city Name: ${Donate.allDonates[x].cityName}`;
    makeSection.appendChild(paragraph3);
    var removeButton = document.createElement('a');
    removeButton.setAttribute('id', x);
    div1.appendChild(removeButton);
    removeButton.textContent = "Remove";
    var span = document.createElement('span');
    removeButton.appendChild(span);
    var span = document.createElement('span');
    removeButton.appendChild(span);
    var span = document.createElement('span');
    removeButton.appendChild(span);
    var span = document.createElement('span');
    removeButton.appendChild(span);
    var contributesTitle = document.getElementById('contributeTitle3');
    if (localStorage) {
      document.getElementById("removemessage").innerHTML = `<section id="contributes_befor-submit3">
      <h2>Thanks for giving</h2>
      <div>
          <p>
             If you want to donate more just click on the button
          </p>
      </div>
      <a href="donation.html"><button class="button"><span><i class="far fa-heart"></i> Donate </span></button></a>
      </section>`;
      contributesTitle.innerHTML = "This Is Your Contributes:";
      resetButton.innerHTML = `<div id="resetDiv3">
      <p>If you want to reset your contributes</p>
      <a  onclick="resetLocalStorage()">
      Press here 
     <span></span>
     <span></span>
     <span></span>
     <span></span>
 </a>
  </div>`;
    }
  }
}
console.log("leng", Donate.allDonates.length);
renderDataFromLocalStorage();
function removeData () {
  getMain.innerHTML = '';
}
getMain.addEventListener('click', (event)=>{
  console.log(event.target);
  var deleteId; 
  if (event.target.textContent === 'Remove'){
    deleteId = event.target.id;
    Donate.allDonates.splice(deleteId,1);
    sendToLocalStorage();
    removeData();
    renderDataFromLocalStorage();
  }
});
function resetLocalStorage() {
  localStorage.clear();
  location.reload();
}
