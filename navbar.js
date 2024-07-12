document.addEventListener("DOMContentLoaded", (event) => {
  const products = [
    {
      title: "Produk 1",
      price: "Rp 100,000",
      description: "Deskripsi Produk 1",
      image: "images/product1.jpg",
      rating: "⭐⭐⭐⭐⭐",
      reviews: "(20)",
    },
    {
      title: "Produk 2",
      price: "Rp 200,000",
      description: "Deskripsi Produk 2",
      image: "images/product2.jpg",
      rating: "⭐⭐⭐⭐",
      reviews: "(15)",
    },
    {
      title: "Produk 3",
      price: "Rp 300,000",
      description: "Deskripsi Produk 3",
      image: "images/product3.jpg",
      rating: "⭐⭐⭐⭐⭐",
      reviews: "(30)",
    },
    {
      title: "Produk 4",
      price: "Rp 400,000",
      description: "Deskripsi Produk 4",
      image: "images/product4.jpg",
      rating: "⭐⭐⭐",
      reviews: "(10)",
    },
    {
      title: "Produk 5",
      price: "Rp 500,000",
      description: "Deskripsi Produk 5",
      image: "images/product5.jpg",
      rating: "⭐⭐⭐⭐⭐",
      reviews: "(50)",
    },
  ];

  const productsContainer = document.getElementById("products-container");

  products.forEach((product) => {
    const productCard = `
      <div class="col-md-3">
        <div class="card mb-4">
          <img class="card-img-top" src="${product.image}" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.price}</p>
            <p class="card-text">${product.description}</p>
            <div class="d-flex align-items-center mb-2">
              <span class="text-warning">${product.rating}</span>
              <span class="text-muted ml-2">${product.reviews}</span>
            </div>
            <a href="#" class="btn btn-primary rounded-pill">Lihat</a>
          </div>
        </div>
      </div>
    `;
    productsContainer.innerHTML += productCard;
  });
});
