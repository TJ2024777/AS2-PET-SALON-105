function displayCards(){
    // declare the variables//
    let card="";
    const petDiv=document.getElementById("petDiv");
    // travel the array of pets//
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        // create the html template//
        card+=`
        <div class="petCard">
        <h4>${pet.name}<h4>
        <p>${pet.age}<p>
        <p>${pet.gender}<p>
        <p>${pet.service}<p>
        </div>
        `;
        console.log(card);
    }
     petDiv.innerHTML=card;
    //insert the tmp into html
}