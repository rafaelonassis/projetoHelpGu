let myTitle = []
let myDescription = []
let tasksFromLocalStorage = JSON.parse(localStorage.getItem("myTitle", "myDescription"))
const saveBtn = document.getElementById("save-btn")
const titleInput = document.getElementById("input-el")
const descriptionInput = document.getElementById("input-el2")  
const clearBtn = document.getElementById("clear-btn")

titleEl = document.getElementById("title-task")  
DescriptionEl = document.getElementById("description-task")

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("add-btn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.addEventListener("click", function() {
  modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function() {
  modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event){
  if (event.target == modal) {
    modal.style.display = "none";
  }
} )
// fim do modal

//função para adicionar tarefas

if(tasksFromLocalStorage){
  myTitle = tasksFromLocalStorage
  myDescription = tasksFromLocalStorage
  render(myTitle, myDescription)

}




saveBtn.addEventListener("click", function() { 
  if(/[a-zA-Z]/.test(titleInput.value) && /[a-zA-Z]/.test(descriptionInput.value)) {
    myTitle.push(titleInput.value)
    myDescription.push(descriptionInput.value)
    titleInput.value = ""
    descriptionInput.value = ""
    render(myTitle, myDescription)
    localStorage.setItem("myTitle", JSON.stringify(myTitle))   
    localStorage.setItem("myDescription", JSON.stringify(myDescription))   
    modal.style.display = "none";
  } else {
    alert("Os campos de título e descrição devem conter pelo menos uma letra.")
  }
})

clearBtn.addEventListener("click", function() {
  localStorage.clear()
  myTitle = []
  myDescription = []
  render(myTitle, myDescription)
})



// Quando a página é carregada, recupere os dados do localStorage e atualize as variáveis myTitle e myDescription
window.onload = function() {
  let storedTitle = localStorage.getItem("myTitle")
  let storedDescription = localStorage.getItem("myDescription")
  if (storedTitle && storedDescription) {
    myTitle = JSON.parse(storedTitle)
    myDescription = JSON.parse(storedDescription)
    render(myTitle, myDescription)
  }
}

function render(tasks, description) {
  let listItems = ""
  for(i = 0; i<tasks.length, i<description.length; i++){
    listItems += `
    <div class="task">
    <p>
      <b>
      ${tasks[i]}
      </b>
   </p>
    <p>
      ${description[i]}
    </p>
    </div>`
  }
  titleEl.innerHTML = listItems


}

