// Custom JS Here
document.addEventListener('DOMContentLoaded', function () {
  const exampleModal = document.getElementById('itemInfoModal');
  const exampleModalBody = document.getElementById('itemInfoModalBody');

  const modalTotal = document.querySelector('.modal-total');
  let menuItemPrice = 0
  const modalQuantity = document.querySelector('.modal-quantity');
  
  function calcTotal() {
    if (modalQuantity.value < 1) {
      modalQuantity.value = 1;
    } else if (modalQuantity.value > 10) {
      modalQuantity.value = 10;
    }

    modalTotal.innerText = (menuItemPrice * modalQuantity.value).toFixed(2);
  }

  modalQuantity.addEventListener('change', calcTotal)

  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
      const menuItem = event.relatedTarget;
      const menuItemName = menuItem.getAttribute('data-item-name');
      menuItemPrice = menuItem.getAttribute('data-item-price');
      const menuItemDescription = menuItem.getAttribute('data-item-description');
      const menuItemQuantity = menuItem.getAttribute('data-item-quantity');

      const modalTitle = exampleModal.querySelector('.modal-title');
      const modalPrice = exampleModal.querySelector('.modal-price');

      const modalDescription = exampleModal.querySelector('.modal-description');
      const modalDescriptionWrapper = exampleModal.querySelector(
        '.modal-description-wrapper'
      );

      // Hide description if these is none
      if (menuItemDescription) {
        modalDescriptionWrapper.classList.remove('d-none');
      } else {
        modalDescriptionWrapper.classList.add('d-none');
      }

      modalTitle.innerText = menuItemName;
      modalPrice.innerText = menuItemPrice;
      modalDescription.innerText = menuItemDescription;
      modalQuantity.value = menuItemQuantity === "0" ? Number(menuItemQuantity + 1) : menuItemQuantity;
      calcTotal();
    });
  }
})