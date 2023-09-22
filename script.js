const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");
const form = document.querySelector("form");
const error = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
  if (firstName.value === "" || lastName.value === "" || message.value === "") {
    showError();
    deleteFields();
  } else {
    deleteFields();
  }
  event.preventDefault();
});

function showError() {
  error.style.display = "block";
}

function deleteFields() {
  firstName.value = "";
  lastName.value = "";
  message.value = "";
}
function addCommentValue() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const message = document.getElementById("message");
  const commentList = document.getElementById("comment-list");

  const newDiv = document.createElement("div");
  const newH3 = document.createElement("h3");
  const newP = document.createElement("p");

  const newTextH3 = document.createTextNode(
    firstName.value + " " + lastName.value
  );
  const newCommentContent = document.createTextNode(message.value);

  newDiv.classList.add("text-sm");
  newH3.classList.add("font-medium", "text-gray-900");
  newP.classList.add(
    "prose",
    "prose-sm",
    "mt-4",
    "max-w-none",
    "text-gray-500"
  );

  newDiv.appendChild(newH3);
  newDiv.appendChild(newP);
  newH3.appendChild(newTextH3);
  newP.appendChild(newCommentContent);

  commentList.appendChild(newDiv);
}
