// js/shop.js
let productsContainer = document.querySelector('.fashion_section_2 .row'); // مكان عرض المنتجات

fetch('products.json')
  .then(res => res.json())
  .then(products => {
    productsContainer.innerHTML = ''; // مسح أي منتجات موجودة مسبقاً
    products.forEach(product => {
      let productHTML = `
      <div class="col-lg-4 col-sm-4">
        <div class="box_main">
          <h4 class="shirt_text">${product.name}</h4>
          <p class="price_text">Price <span style="color: #262626;">$ ${product.price}</span></p>
          <div class="tshirt_img"><img src="${product.image}"></div>
          <div class="btn_main">
            <div class="buy_bt"><a href="#" data-id="${product.id}" class="add-to-cart">Add to Cart</a></div>
            <div class="seemore_bt"><a href="#">See More</a></div>
          </div>
        </div>
      </div>`;
      productsContainer.innerHTML += productHTML;
    });

    // إضافة حدث لكل زر "Add to Cart"
    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        let id = btn.getAttribute('data-id');
        addToCart(id);
      });
    });
  });

// سلة التسوق
let cart = [];

function addToCart(id) {
  fetch('products.json')
    .then(res => res.json())
    .then(products => {
      let product = products.find(p => p.id == id);
      cart.push(product);
      alert(product.name + ' added to cart!');
      console.log(cart); // يمكن استبداله بعرض السلة لاحقًا
    });
}
