const openBtn = document.getElementById("open-btn");

openBtn.addEventListener("click", () => {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.innerHTML = "&times;";

  closeBtn.addEventListener("click", () => {
    closeModal(modal, modalContainer);
  });

  modal.appendChild(closeBtn);

  const modalContent = document.createElement("div");
  modalContent.innerHTML = `
    <h2>Modal Content</h2>
    <p>This is a modal with a blurred background.</p>
    <button class="btn btn-primary" id="alt-close">Close</button>
  `;
  modal.appendChild(modalContent);

  modalContainer.appendChild(modal);
  document.body.appendChild(modalContainer);

  const altclose = document.getElementById("alt-close");
  altclose.addEventListener("click", () => {
    closeModal(modal, modalContainer);
  });

  setTimeout(() => {
    modal.style.transform = "translateY(0)";
    modal.style.opacity = "1";
    modalContainer.style.display = "flex";
    setTimeout(() => {
      modalContainer.style.opacity = "1";
    }, 50);
  }, 0);
});

function closeModal(modal, modalContainer) {
  modal.style.transform = "translateY(-20px)";
  modal.style.opacity = "0";
  modalContainer.style.opacity = "0";
  setTimeout(() => {
    document.body.removeChild(modalContainer);
  }, 300);
}
