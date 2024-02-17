const inputBox = document.getElementById("inputData");
const btn = document.getElementById("addData");
const mainUl = document.getElementById("newTask");

btn.addEventListener("click", function () {
  if (inputBox.value == "") {
    alert("Task input cannot be empty");
  } else {
    let newList = document.createElement("li");
    newList.innerHTML = inputBox.value;
    mainUl.appendChild(newList);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    newList.appendChild(span);
  }

  inputBox.value = "";
  saveData();
});

mainUl.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      span.addEventListener("click", function () {
        document.removeChild(newList);
        
      });
    }
  saveData();},
  false
);

function saveData() {
  localStorage.setItem("data", mainUl.innerHTML);
}

function showTask() {
  mainUl.innerHTML = localStorage.getItem("data");
}
showTask();
