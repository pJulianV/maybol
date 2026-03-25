// Productos demo (puedes conectar a backend luego)
const products = [
  {id:1, title:'Inti Schokolade 70%', type:'Cacao', price:8, img:'maybolcacao/assets/inti.png'},
  {id:2, title:'AILLA Dunkelschokolade 65%', type:'Cacao', price:8, img:'maybolcacao/assets/ailla.png'},
  {id:3, title:'Ganze Kaffeebohnen Dunkel', type:'Coffee', price:10.49, img:'maybolcoffe/img/img5.avif'},
  {id:4, title:'Kaffee & Schokolade Set', type:'Coffee', price:21, img:'maybolcoffe/img/img3.avif'}
];

const productsList = document.getElementById('products-list');
const cartBtn = document.getElementById('cart-btn');
const cartPanel = document.getElementById('cart-panel');
const cartCount = document.getElementById('cart-count');
const cartItemsDiv = document.getElementById('cart-items');
const cartTotalDiv = document.getElementById('cart-total');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');

let cart = [];

function renderProducts() {
  productsList.innerHTML = '';
  products.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.title}">
      <div class="product-title">${prod.title}</div>
      <div class="product-type">${prod.type}</div>
      <div class="product-price">${prod.price.toFixed(2)} €</div>
      <button onclick="addToCart(${prod.id})">Añadir al carrito</button>
    `;
    productsList.appendChild(card);
  });
}

window.addToCart = function(id) {
  const prod = products.find(p => p.id === id);
  const idx = cart.findIndex(item => item.id === id);
  if(idx>-1) cart[idx].qty++;
  else cart.push({...prod, qty:1});
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.reduce((a,b)=>a+b.qty,0);
  cartItemsDiv.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span class="cart-item-title">${item.title}</span>
      <span>
        <button onclick="changeQty(${item.id},-1)">-</button>
        <span class="cart-item-qty">${item.qty}</span>
        <button onclick="changeQty(${item.id},1)">+</button>
        <button onclick="removeFromCart(${item.id})">🗑️</button>
      </span>
    `;
    cartItemsDiv.appendChild(div);
  });
  const total = cart.reduce((a,b)=>a+b.price*b.qty,0);
  cartTotalDiv.textContent = 'Total: ' + total.toFixed(2) + ' €';
}

window.changeQty = function(id,delta) {
  const idx = cart.findIndex(item => item.id === id);
  if(idx>-1){
    cart[idx].qty += delta;
    if(cart[idx].qty<=0) cart.splice(idx,1);
    updateCart();
  }
}
window.removeFromCart = function(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

cartBtn.onclick = ()=>{cartPanel.style.display='block';}
closeCartBtn.onclick = ()=>{cartPanel.style.display='none';}
checkoutBtn.onclick = ()=>{alert('Funcionalidad de checkout próximamente');}

renderProducts();
updateCart();
