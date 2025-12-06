const itemsArea = document.getElementById("itemsArea");
const dropArea = document.getElementById("dropArea");
const trashBox = document.getElementById("trashBox");

let dragged = null;

// Enable drag for all items
function enableDrag(item) {
  item.addEventListener("dragstart", () => {
    dragged = item;
  });

  item.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  // Reordering inside sidebar
  item.addEventListener("drop", () => {
    if (dragged !== item && item.parentElement === itemsArea) {
      itemsArea.insertBefore(dragged, item);
    }
  });
}

// Apply to existing items
document.querySelectorAll(".drag-item").forEach(enableDrag);

// Drop into drop area
dropArea.addEventListener("dragover", (e) => e.preventDefault());

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.appendChild(dragged);
});

// Trash functionality
trashBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  trashBox.classList.add("dragover");
});

trashBox.addEventListener("dragleave", () => {
  trashBox.classList.remove("dragover");
});

trashBox.addEventListener("drop", (e) => {
  e.preventDefault();
  trashBox.classList.remove("dragover");

  if (dragged) {
    dragged.remove(); // DELETE the item
  }
});




// Modal functions
function showModal(text) {
  document.getElementById("modalText").innerText = text;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Click event for all items
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("drag-item")) {
    showModal("Item ID: " + e.target.id);
  }
});