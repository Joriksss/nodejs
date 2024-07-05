document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.catalog-category-btn');
    const catalogItems = document.querySelectorAll('.catalog-item');

    categoryButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
    const category = this.getAttribute('data-category');

    categoryButtons.forEach(function(b) {
        b.classList.remove('active');
    });
    this.classList.add('active');

    catalogItems.forEach(function(item) {
        if (category === 'all' || item.getAttribute('data-category').includes(category)) {
            item.style.display = 'flex';
        }else {
            item.style.display = 'none';
        }
      });
    });
  });
});