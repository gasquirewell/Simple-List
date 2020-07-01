//get the values from the input
const inputTask = document.getElementById("input-task");
const list= document.getElementById("task-list");
var taskId= 0;
function register(){
    console.log(inputTask.value);
    taskId+=1;

    //dispaly the task

    const newItem = document.createElement("li");
    newItem.innerHTML = `${inputTask.value} <button onclick= "removeTask(${taskId});"> Delete </button>`;
    list.appendChild(newItem);

    newItem.setAttribute('class','list-group-item');
    newItem.setAttribute('id',taskId);
    clear();
}


//clear the input
function clear(){
    inputTask.value="";
}

//remove a task
function removeTask(id){
var deleted = document.getElementById(id);
deleted.remove();
}
