function addTask(){
    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle){
        const template = document.querySelector(".template");

        newTask = template.cloneNode(true);
        
        newTask.querySelector(".task-title").textContent = taskTitle;

        newTask.classList.remove("template");

        newTask.classList.remove("hide");

        list = document.querySelector(".task-list")
        list.appendChild(newTask)

        const remove = newTask.querySelector(".close-btn").addEventListener("click", function(){
            removeTask(this);
        })

        const mark = newTask.querySelector(".done-btn").addEventListener("click", function(){
            markTask(this);
        })
        
        document.querySelector("#task-title").value = "";
    }
}

function removeTask(task){
    console.log(task);
    task.parentNode.remove(true);
}

function markTask(task) {
    const completeTask = task.parentNode
    completeTask.classList.toggle("done")
}

const addBtn = document.querySelector("#task-submit")

addBtn.addEventListener("click", function(e){
    e.preventDefault();

    addTask()
})


const closeBtn = document.querySelector(".close-btn")

closeBtn.addEventListener("click", function(e){
    e.preventDefault();

    closeTask()
})