const showAlert = (product) => {
  alert(`This is my ${product}`);
};
async function getData() {
  let products = [];
  await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log((products = json)));

  console.log(products);

  $(document).ready(function () {
    products.forEach(function (e, i) {
      $("#products").append(`<article class="col-12 col-md-6 col-lg-4 mb-2">
        <div class="card">
  <img src="${e.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${e.title}</h5>
    <p class="card-text">${e.description}</p>
    <button onclick='showAlert("${e.title}")' id="addToCart" href="#" class="btn btn-primary">Add to cart</button>
  </div>
</div>
</article>`);
    });
  });
}

getData();
