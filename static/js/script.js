// Custom JS Here
const exampleModal = document.getElementById('itemInfoModal')

if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    const menuItem = event.relatedTarget
    const menuItemName = menuItem.querySelector(".item-name").innerText
    const menuItemPrice = menuItem.querySelector(".item-price").innerText
    const menuItemDescription = menuItem.getAttribute('data-item-description')

    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalPrice = exampleModal.querySelector('.modal-price')
    const modalDescription = exampleModal.querySelector('.modal-description')

    modalTitle.innerText = menuItemName
    modalPrice.innerText = menuItemPrice
    modalDescription.innerText = menuItemDescription
  })
}