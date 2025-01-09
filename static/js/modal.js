// Custom JS Here
document.addEventListener('DOMContentLoaded', function () {
  const exampleModal = document.getElementById('itemInfoModal');
  const modal = new bootstrap.Modal('#itemInfoModal');
  const quantityForm = document.getElementById('quantityForm');

  // Getting the elements on the modal.
  const modalTitle = exampleModal.querySelector('.modal-title');
  const modalPrice = exampleModal.querySelector('.modal-price');
  const modalImage = exampleModal.querySelector('.modal-image');
  const modalDescription = exampleModal.querySelector('.modal-description');
  const modalDescriptionWrapper = exampleModal.querySelector(
    '.modal-description-wrapper'
  );

  let menuItemPrice = 0;
  let menuItemQuantity = 0;
  const modalSubmit = document.querySelector('.modal-submit');
  const modalQuantity = document.querySelector('.modal-quantity');

  // Calculates item total after considering quantity.
  function calcTotal() {
    // Bring quantity back into acceptable range.
    if (modalQuantity.value <= 0 && menuItemQuantity > 0) {
      modalQuantity.value = 0;
    } else if (modalQuantity.value < 1) {
      modalQuantity.value = 1;
    } else if (modalQuantity.value > 10) {
      modalQuantity.value = 10;
    }

    // 2dp please :)
    const quantityPrice = (menuItemPrice * modalQuantity.value).toFixed(2);

    // Remove all classes before we get started.
    modalSubmit.classList.remove('btn-danger');
    modalSubmit.classList.remove('btn-primary');
    modalSubmit.classList.remove('btn-warning');
    modalSubmit.classList.remove('btn-success');

    // Change button text and style depending on quantity set.
    if (modalQuantity.value == 0) {
      modalSubmit.innerText = 'Remove from basket';
      modalSubmit.classList.add('btn-danger');
    } else if (menuItemQuantity == modalQuantity.value) {
      modalSubmit.innerText = 'Close';
      modalSubmit.classList.add('btn-primary');
    } else if (menuItemQuantity > 0) {
      modalSubmit.innerText = `£${quantityPrice} - Change quantity`;
      modalSubmit.classList.add('btn-warning');
    } else {
      modalSubmit.innerText = `£${quantityPrice} - Add to basket`;
      modalSubmit.classList.add('btn-success');
    }
  }

  // Recalculate item total when user changes quantity.
  modalQuantity.addEventListener('change', calcTotal);

  function handleSubmit(e) {
    // Do not submit form if quantity is the same as quantity in basket.
    if (menuItemQuantity == modalQuantity.value) {
      e.preventDefault();
      modal.hide();
    }
  }

  // Handle form submits.
  quantityForm.addEventListener('submit', handleSubmit);

  if (exampleModal) {
    // When the modal is opened do this...
    exampleModal.addEventListener('show.bs.modal', event => {
      // Getting attributes from the item that triggered the modal.
      const menuItem = event.relatedTarget;
      const menuItemName = menuItem.getAttribute('data-item-name');
      menuItemPrice = menuItem.getAttribute('data-item-price');
      const menuItemDescription = menuItem.getAttribute(
        'data-item-description'
      );
      menuItemQuantity = menuItem.getAttribute('data-item-quantity');
      const menuItemId = menuItem.getAttribute('data-item-id');
      const menuItemImage = menuItem.getAttribute('data-item-image');

      // Set description if exists.
      if (menuItemDescription) {
        modalDescription.innerText = menuItemDescription;
        modalDescriptionWrapper.classList.remove('d-none');
      } else {
        modalDescriptionWrapper.classList.add('d-none');
      }

      // Set item details on the modal.
      modalTitle.innerText = menuItemName;
      modalPrice.innerText = menuItemPrice;

      // Set image if present.
      if (menuItemImage.includes('placeholder')) {
        modalImage.classList.add('d-none');
      } else {
        modalImage.setAttribute('src', menuItemImage);
        modalImage.setAttribute('alt', `Photo of ${menuItemName}`);
        modalImage.classList.remove('d-none');
      }

      // Set item quantity.
      // 0 quantity means user hasn't added item to basket, change to 1 as they anticipate adding this item.
      modalQuantity.value = menuItemQuantity === '0' ? '1' : menuItemQuantity;

      // Update the total cost of an item after considering quantity.
      calcTotal();

      // Items that are already in the basket can be set to a quantity of 0 to remove them.
      if (menuItemQuantity > 0) {
        modalQuantity.setAttribute('min', '0');
      } else {
        modalQuantity.setAttribute('min', '1');
      }

      // Change form action to item specific value.
      quantityForm.setAttribute('action', `basket_quantity/${menuItemId}`);
    });
  }
});
