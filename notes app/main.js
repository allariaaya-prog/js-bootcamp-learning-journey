// Select Elements
const notesContainer = document.querySelector(".notes-cont");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}


// Create a new note
createBtn.addEventListener("click", () => {

    const inputBox = document.createElement("p");
    const img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "./imgs/delete.png";
    img.alt = "Delete";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    updateStorage();
});


// Delete a note
notesContainer.addEventListener("click", (e) => {

    if (e.target.tagName === "IMG") {

        e.target.parentElement.remove();

        updateStorage();
    }
});


// Save note changes
notesContainer.addEventListener("keyup", (e) => {

    if (e.target.classList.contains("input-box")) {
        updateStorage();
    }
});


// Prevent Enter from creating a new paragraph
document.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        e.preventDefault();
        document.execCommand("insertLineBreak");
    }
});


// Load saved notes when the page opens
showNotes();
