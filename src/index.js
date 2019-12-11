document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form)
  const userInput = formData.get("new-task-description")
  const newLi = document.createElement("li")
  newLi.innerText = userInput
  const deleteButton = document.createElement("BUTTON")
  deleteButton.innerText = "X"
  deleteButton.className = "deletebutton"
  newLi.appendChild(deleteButton)
  newLi.querySelector("button").addEventListener("click", function (e) {
    e.currentTarget.parentNode.remove()
  })
  const ul = document.querySelector('ul')
  ul.appendChild(newLi)
})
});