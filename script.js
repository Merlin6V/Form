let data = [
    {name:"Merlin",age:28},
    {name:"vignesh",age:30}
];

function displayData() {
    const dataRows = document.getElementById("dataRows");
    dataRows.innerHTML="";

    data.forEach((item,  index) => {
   const row=`
   <tr>
    <td>${item.name}</td>
        <td>${item.age}</td>
        <td>
            <button type="button" class = "btn btn-info" data-index="${index}">Edit</button>
            <button type="button" class = "btn btn-danger delete-btn" data-index="${index}">Delete</button>
        </td>
   
   </tr> 
   `;
   dataRows.insertAdjacentHTML ("beforeend",row);
    });
}

function handleform(event){
event.preventDefault();

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

const name = nameInput.value.trim();
const age = parseInt(ageInput.value);

data.push({name,age});
nameInput.value="";
ageInput.value="";

displayData();

}
function handleDeleteClick(event){
    const index = event.target.getAttribute("data-index");
    data.splice(index,1);
    displayData();
}

function handleEditClick(event){
    const index = event.target.getAttribute("data-index");
    const record = data[index];

    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    nameInput.value=record.name;
    ageInput.value=record.age;

    data.splice(index,1);
    displayData();
    
} 


document
.getElementById("crudForm")
.addEventListener("submit",handleform); 

document.getElementById("dataRows").addEventListener("click", (event) => {
    // alert(event.target.classList);
if(event.target.classList.contains("btn-danger")){
handleDeleteClick(event);
}else if(event.target.classList.contains ("btn-info")) {
    handleEditClick(event);
}
});

displayData();