// Custom JS Here
const exampleModal = document.getElementById('itemInfoModal')
const exampleModalBody = document.getElementById('itemInfoModalBody')

if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    const menuItem = event.relatedTarget
    const menuItemName = menuItem.querySelector(".item-name").innerText
    const menuItemPrice = menuItem.querySelector(".item-price").innerText
    const menuItemDescription = menuItem.getAttribute('data-item-description')

    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalPrice = exampleModal.querySelector('.modal-price')
    const modalDescription = exampleModal.querySelector('.modal-description')
    const modalDescriptionWrapper = exampleModal.querySelector('.modal-description-wrapper')

    // Hide description if these is none
    if (menuItemDescription) {
      modalDescriptionWrapper.classList.remove("d-none")
    } else {
      modalDescriptionWrapper.classList.add("d-none")
    }

    modalTitle.innerText = menuItemName
    modalPrice.innerText = menuItemPrice
    modalDescription.innerText = menuItemDescription
  })
}