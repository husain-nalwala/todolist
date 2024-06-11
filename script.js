const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


//No element selector for button, only function called from html <button onclick="fn()"> Add </button>;
function addtask(){
    
    if(inputBox.value === ''){
        alert('Input cannot be empty!');
    }
    else{
        let li = document.createElement("li"); 
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value=''; //Clear input field after 
    saveData();
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === "LI"){ //if clicked element is an <li> tag element
        e.target.classList.toggle("checked"); 
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}  // fn to set key : value pair storing tasks as a value of 'data' string in localStorage.

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
} // fn to display stored key:value data i.e the tasks stored in localStorage on browser reload/ new session.

showData(); 