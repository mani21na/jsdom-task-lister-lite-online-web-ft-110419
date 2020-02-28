document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("submit").addEventListener("click", function(event) {
    // get the info from the textbox and create a new li
    let listItem = document.createElement("li")
    let toDo = document.getElementById("new-task-description").value
    let toDoContent = document.createTextNode(toDo)

    // set priority
    let priority = document.getElementsByName("new-task-priority")
    for(let i = 0; i < priority.length; i++) {
      if (priority[i].checked) {
        listItem.classList.add(priority[i].value)
      }
    }

    // adding and handling 'done' button
    let finished = document.createElement("input")
    finished.value = "Done"
    finished.type = "submit"
    finished.id = "done"

    finished.addEventListener("click", function(event) {
      this.parentElement.remove()
      event.preventDefault()
    })

    // add the new task to the tasks ul
    listItem.appendChild(toDoContent)
    listItem.appendChild(finished)
    document.getElementById("tasks").appendChild(listItem)

    // clear the text from the textbox
    document.getElementById("new-task-description").value = ""
    event.preventDefault()
  }, false)
});
