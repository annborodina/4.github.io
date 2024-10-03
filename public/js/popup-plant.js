document.addEventListener('DOMContentLoaded', function () {
  const plants = document.querySelectorAll('.plant');

  const modalTitle = document.querySelector('.modal .name');
  const modalPrice = document.querySelector('.modal .price .number');
  const modalSale = document.querySelector('.modal .price .sale');
  const modalDiscount = document.querySelector('.modal .badge');
  const modalImage = document.querySelector('.modal .plant-image img');

  plants.forEach(plant => {
      plant.addEventListener('click', function () {
          const name = this.getAttribute('data-name');
          const price = this.getAttribute('data-price');
          const sale = this.getAttribute('data-sale');
          const discount = this.getAttribute('data-discount');
          const img = this.getAttribute('data-img');

          modalTitle.innerText = name;
          modalPrice.innerText = `$${price}`;
          modalSale.innerText = `$${sale}`;
          modalDiscount.innerText = discount;
          modalImage.src = img;

          const plantModal = new bootstrap.Modal(document.getElementById('plantModal'));
          plantModal.show();
      });
  });
});

var productCard = document.getElementById('product-1');

productCard.addEventListener('click', function () {
    var plantModal = new bootstrap.Modal(document.getElementById('plantModal'));

    plantModal.show();
});