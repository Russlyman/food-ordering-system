document.addEventListener('DOMContentLoaded', function () {
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
        item = item.firstElementChild;
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
        category.parentElement.classList.add('d-none');
      } else {
        category.parentElement.classList.remove('d-none');
      }
    }
  }
});
