// Custom JS Here
document.addEventListener('DOMContentLoaded', function () {
  const exampleModal = document.getElementById('itemInfoModal');
  const exampleModalBody = document.getElementById('itemInfoModalBody');
  const quantityForm = document.getElementById('quantityForm');

  let menuItemPrice = 0;
  const modalTotal = document.querySelector('.modal-total');
  const modalQuantity = document.querySelector('.modal-quantity');

  // Calculates item total after considering quantity.
  function calcTotal() {
    // Bring quantity back into acceptable range.
    if (modalQuantity.value < 1) {
      modalQuantity.value = 1;
    } else if (modalQuantity.value > 10) {
      modalQuantity.value = 10;
    }

    // 2dp please :)
    modalTotal.innerText = (menuItemPrice * modalQuantity.value).toFixed(2);
  }

  // Recalculate item total when user changes quantity.
  modalQuantity.addEventListener('change', calcTotal);

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
      const menuItemQuantity = menuItem.getAttribute('data-item-quantity');
      const menuItemId = menuItem.getAttribute('data-item-id');

      // Getting the elements on the modal.
      const modalTitle = exampleModal.querySelector('.modal-title');
      const modalPrice = exampleModal.querySelector('.modal-price');
      const modalDescription = exampleModal.querySelector('.modal-description');
      const modalDescriptionWrapper = exampleModal.querySelector(
        '.modal-description-wrapper'
      );

      // Hide item description if these is none.
      if (menuItemDescription) {
        modalDescriptionWrapper.classList.remove('d-none');
      } else {
        modalDescriptionWrapper.classList.add('d-none');
      }

      // Set item details on the modal.
      modalTitle.innerText = menuItemName;
      modalPrice.innerText = menuItemPrice;
      modalDescription.innerText = menuItemDescription;

      // Set item quantity.
      // 0 quantity means user hasn't added item to basket, change to 1 as they anticipate adding this item.
      modalQuantity.value =
        menuItemQuantity === '0'
          ? '1'
          : menuItemQuantity;
      
      // Update the total cost of an item after considering quantity.
      calcTotal();

      // Change form action to item specific value.
      quantityForm.setAttribute('action', `basket_quantity/${menuItemId}`);
    });
  }

  const allItems = document.querySelectorAll('.menu-item');
  const allCategories = document.querySelectorAll('.menu-category');
  const searchBox = document.querySelector('.search-box');

  // Run the search function when stuff is entered in search box.
  searchBox.addEventListener('input', searchItems);

  function searchItems(e) {
    // Normalise search query.
    const searchQuery = e.target.value.toLowerCase().replaceAll(' ', '');

    for (let category of allCategories) {
      // Count items that are showing in this category.
      let showingItems = 0;
      for (let item of category.children) {
        // Normalise item name.
        item = item.firstElementChild
        const searchItemName = item
          .getAttribute('data-item-name')
          .toLowerCase()
          .replaceAll(' ', '');

        // Hide of show item if it matches search criteria.
        if (searchItemName.includes(searchQuery)) {
          item.parentElement.classList.remove('d-none');
          showingItems++;
        } else {
          item.parentElement.classList.add('d-none');
        }
      }

      // Hide or show this category depending on if it has items.
      if (showingItems === 0) {
        category.parentElement.classList.add('d-none')
      } else {
        category.parentElement.classList.remove('d-none')
      }
    }
  }
});
