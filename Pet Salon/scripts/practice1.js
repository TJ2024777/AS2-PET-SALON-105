var globalVariable= "I'm in a global scope";
function myfunction() {
}

function myfunction() {
    var localvariable= "I'm in a local scope";
    console.log(localvariable);
}

//object literal

let student1={
    name:"Kevin",
    email:"Kevin@gmail.com",
    grade101:3.5,
    grade102:3.9
}
let student2={
    name:"Terry",
    email:"Terry@gmail.com",
    grade101:3.8,
    grade102:3.7
}
let student3={
    name:"Brandon",
    email:"Brandon@gmail.com",
    grade101:3.5,
    grade102:4.0
}

console.log(student1)
console.log(student2)
console.log(student3)

//Arrays []

let myArray=[10,false,"Richard",student2];
console.log(myArray[2]);//Richard

let petSalon ={
    name:"The Fashion Pet",
    Phone:"666-666-6666",
    hours:{
        open:"9:00am",
        close:"9:00pm"

    }
    pets:[
        {
        name:"Scooby",
        Age:99,
        gender:"Male"
        service:"Grooming"
        }
    ]
}
function displayNames(){
    let names="";
    //suggestion: use a loop
    for(let i=0;i<3;i++){
        names+=`<p> ${petSalon.pets[i].name} </p>`;
        console.log(names);
    }

    


<table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody id="petTable">
                <tr>
                    <td>Test</td>
                    <td>99</td>
                </tr>
            </tbody>
        </table>
<div class="info">
            <p>Total = <span id="total">1000</span></p>
        </div>    