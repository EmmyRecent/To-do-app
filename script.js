const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// add task function
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    // this create elements with the li tag
    let li = document.createElement("li");
    // adds every li elements to te list container
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // adding the x icon
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    // displaying the span
    li.appendChild(span);
  }

  // returns and empty "" when ever a List is been added
  inputBox.value = "";
}

// click event on the lists
listContainer.addEventListener(
  "click",
  function (e) {
    // if the clicked target element is LI, it will add the class checked else if the clicked target element is span it would remove the elements
    // note: target element should be in capital letters
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
