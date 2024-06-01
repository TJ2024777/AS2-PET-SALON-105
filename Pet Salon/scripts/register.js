// Define salon object literal
let petSalon = {
    name: "Fashion Pet Salon",
    phone: "281-330-8004",
    hours: {
        open:"9:00 am",
        close:"9:30 pm",
    },
    pets:[
        {
            name:"Scooby",
            age:99,
            gender:"Male",
            service:"Grooming",
            breed:"Dog",
        },
        {
            name:"Scrappy",
            age:99,
            gender:"Male",
            service:"Grooming",
            breed:"Dog",
        },
        {
            name:"Wilson",
            age:99,
            gender:"Male",
            service:"Grooming",
            breed:"terrier",
        }
    ]
}
//contructor...
function Pet(name,age,gender,service,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.breed=breed;
}
function isValid(){
    let validation=true;

    if(aPet.name==""){//is empty?
        validation=false;
        document.getElementById("txtName").classList.add("alert-error");
    }
    if(aPet.service==""){
        validation=false;
        document.getElementById("txtService").classList.add("alert-error");
    }


    return validation;
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let newPet = new Pet(inputName,inputAge,inputGender,inputService,inputBreed);
    if(isValid(newPet)){
    petSalon.pets.push(newPet);
    displayCards();
}
}
function init(){
    let pet1 = new Pet("Scooby","79","Male","Grooming","Dog");
    let pet2 = new Pet("Scrappy","99","Male","Grooming","Dog");
    console.log(pet1);
    petSalon.pets.push(pet1);
    petSalon.pets.push(pet2);
    displayCards();
}

function displayNames(){
    for(let i=0;i<3;i++){
        names+=`<p> ${Petsalon.pets[i].name} </p>`;
        console.log(names);

}
document.getElementById("name").innerHTML=names;
}
function countPets(){
    console.log(petSalon.pets.length);
}

window.onload=init;