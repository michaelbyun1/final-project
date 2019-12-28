const products = [
  {
    name: `To Dine in Hell`,
    img: `img/to-dine-in-hell-wingz.jpg`,
    description: `Feel brave and bold enough to try our hottest plate of wingz known to mankind? Our To Dine in Hell Wingz features a special blend of Carolina Reaper peppers and secret spices to concoct the spiciest wingz you'll ever taste (sliced jalapeno peppers for presentation). 2.2 million SHU. Don't say we didn't warn you.`,
    priceRegular: 15.99,
    priceSale: 13.49,
    size: `1/2 pound`,
    spice: `Legendary`,
    rating: 4.5,
  }, {
    name: `Krazy Krazy`,
    img: `img/krazy-krazy-wingz.jpg`,
    description: `Taking it down only a slight notch, our Krazy Krazy Wingz is sure to put you in the hospital. Using our special blend of Naga Vipers (1,349,000 SHU) and Ghost Peppers (1,041,427 SHU), we are proud to present the most delicious method of torture.`,
    priceRegular: 14.99,
    priceSale: 13.99,
    size: `1/2 pound`,
    spice: `Legendary`,
    rating: 4.0,
  }, {
    name: `Spicy Jalapeno`,
    img: `img/spicy-jalapeno-wingz.jpg`,
    description: `Love spice but not quite fond of a 1-way trip to the ER? We got a perfect alternative in our Spicy Jalapeno Wingz. Treat yourself to a batch of our most highly rated wingz and you'll quickly find out why it's so loved.`,
    priceRegular: 9.99,
    priceSale: 7.49,
    size: `1/2 pound`,
    spice: `Spicy`,
    rating: 4.6,
  }, {
    name: `Caribbean Jack`,
    img: `img/caribbean-jack-wingz.jpg`,
    description: `A smooth, creamy palette but with a Caribbean kick. We cooked up a unique flavour in the lab using a special blend of herbs and spices you're guaranteed to love.`,
    priceRegular: 9.99,
    priceSale: 7.49,
    size: `1/2 pound`,
    spice: `Spicy`,
    rating: 4.4,
  }, {
    name: `Thai Sweet Chili Heat`,
    img: `img/thai-sweet-chili-heat-wingz.jpg`,
    description: `A sweet and fruity base topped with freshly minced garlic and freshly chopped chives and cilantro. Go ahead and order as much as you like. We know you're going to want more.`,
    priceRegular: 9.49,
    priceSale: 7.49,
    size: `1/2 pound`,
    spice: `Mild`,
    rating: 4.4,
  }, {
    name: `Blue Cheese Hot`,
    img: `img/blue-cheese-hot-wingz.jpg`,
    description: `Wingz doused in our buffalo sauce with a side of our spicy blue cheese dip.`,
    priceRegular: 9.49,
    priceSale: 7.49,
    size: `1/2 pound`,
    spice: `Spicy`,
    rating: 4.5,
  }, {
    name: `Strawberry Chipotle Jerk`,
    img: `img/strawberry-chipotle-wingz.jpg`,
    description: `Our twist on chipotle-style wingz with fresh strawberries and a side of avocado cheese dip.`,
    priceRegular: 11.49,
    priceSale: 8.49,
    size: `1/2 pound`,
    spice: `Mild`,
    rating: 4.4,
  }, {
    name: `Creamy Dill Pickle`,
    img: `img/creamy-dill-pickle-wingz.jpg`,
    description: `Our freshest wingz with a hint of creamy dill pickle. What could be better?`,
    priceRegular: 9.49,
    priceSale: 7.49,
    size: `1/2 pound`,
    spice: `Soft`,
    rating: 4.4,
  }, {
    name: `Butter Garlic`,
    img: `img/butter-garlic-wingz.jpg`,
    description: `Butter and garlic! Just like it says!`,
    priceRegular: 9.49,
    priceSale: 7.49,
    size: `1/2 pound`,
    spice: `Soft`,
    rating: 3.9,
  }, {
    name: `French Toast`,
    img: `img/thai-sweet-chili-heat-wingz.jpg`,
    description: `The taste of sweet maple syrup french toast in the morning! But in wingz form!`,
    priceRegular: 9.49,
    priceSale: 7.49,
    size: `1/2 pound`,
    spice: `Soft`,
    rating: 4.5,
  }, {
    name: `Salt & Pepper`,
    img: `img/salt-and-pepper-wingz.jpg`,
    description: `Salt and pepper! It is what it is!`,
    priceRegular: 7.49,
    priceSale: 6.49,
    size: `1/2 pound`,
    spice: `Soft`,
    rating: 3.8,
  }, {
    name: `Peanut Butter`,
    img: `img/peanut-butter-wingz.jpg`,
    description: `A batch of our wingz with our special peanut butter sauce.`,
    priceRegular: 10.49,
    priceSale: 8.49,
    size: `1/2 pound`,
    spice: `Soft`,
    rating: 4.6,
  }, {
    name: `Peanut Butter and Jelly`,
    img: `img/peanut-butter-and-jelly-wingz.jpg`,
    description: `Peanut butter and jelly! It's a classic!`,
    priceRegular: 11.49,
    priceSale: 9.49,
    size: `1/2 pound`,
    spice: `Soft`,
    rating: 4.8,
  }, {
    name: `Raspberry Spice`,
    img: `img/raspberry-spice-wingz.jpg`,
    description: `A sweet combo of raspberries and Sriracha!`,
    priceRegular: 9.49,
    priceSale: null,
    size: `1/2 pound`,
    spice: `Mild`,
    rating: 4.4,
  }, {
    name: `Brown Sugar Hot`,
    img: `img/brown-sugar-hot-wingz.jpg`,
    description: `A mix of brown sugar and our special hot sauce. A winner combo.`,
    priceRegular: 9.49,
    priceSale: null,
    size: `1/2 pound`,
    spice: `Mild`,
    rating: 4.5,
  }, {
    name: `Pizza`,
    img: `img/pizza-wingz.jpg`,
    description: `Pizza-flavoured wingz! What could go wrong?`,
    priceRegular: 10.49,
    priceSale: null,
    size: `1/2 pound`,
    spice: `Soft`,
    rating: 4.6,
  }, {
    name: `Fried Chicken`,
    img: `img/fried-chicken-wingz.jpg`,
    description: `Chicken wingz in fried format!`,
    priceRegular: 10.49,
    priceSale: null,
    size: `1/2 pound`,
    spice: `Soft`,
    rating: 4.8,
  }, {
    name: `Pineapple Glaze`,
    img: `img/pineapple-glaze-wingz.jpg`,
    description: `A sweet pineapple glaze over our famous wingz! Don't knock it until you try it!`,
    priceRegular: 9.49,
    priceSale: null,
    size: `1/2 pound`,
    spice: `Soft`,
    rating: 3.5,
  }, {
    name: `Lemon Pepper`,
    img: `img/lemon-pepper-wingz.jpg`,
    description: `Lemon with a kick of pepper. Need we say more?`,
    priceRegular: 8.49,
    priceSale: null,
    size: `1/2 pound`,
    spice: `Mild`,
    rating: 4.1,
  }, {
    name: `Cilantro Lime`,
    img: `img/cilantro-lime-wingz.jpg`,
    description: `Lime with a kick of cilantro. Sometimes, less is more.`,
    priceRegular: 8.49,
    priceSale: null,
    size: `1/2 pound`,
    spice: `Mild`,
    rating: 4.3,
  }
];

var saleProducts = products.filter(function (el) {
  return (el.priceSale >= 1);
});

console.log(saleProducts);

var notOnSaleProducts = products.filter(function (el) {
  return (el.priceSale === null);
});

console.log(notOnSaleProducts);

function getListAsHtmlString(products) {
  return `<article class="products ${products.name}">
    <h4>${products.name}</h4>
    <img src="${products.img}" alt="Picture of ${products.name}" class="products-img>
    <ul class="products-info">
      <li>Product Description: <strong>${products.description}</strong></li>
      <li>Price Regular: <strong>${products.priceRegular}</strong></li>
      <li>Price Sale: <strong>${products.priceSale}</strong></li>
      <li>Size: <strong>${products.size}</strong></li>
      <li>Spice: <strong>${products.spice}</strong></li>
      <li>Rating: <strong>${products.rating}</strong></li>
    </ul>
  </article>`;
}


function renderProducts(arr) {
  const arrOfHtml = arr.map(getListAsHtmlString)
  const strOfHtml = arrOfHtml.join('\n')
  document.getElementById('products').innerHTML = strOfHtml;
}

renderProducts(products.slice(0, 5));

var filterForm = document.getElementById(`filter-form`);
var toggleButton = document.getElementById(`show-less`);

toggleButton.onclick = function () {

  if (filterForm.style.display == `none`) {
    filterForm.style.display = `block`;
  } else {
    filterForm.style.display = `none`;
  }
}

let itemsInCart = 0;

function updateCart(amtToAdd) {
  itemsInCart += amtToAdd ;
  document.getElementById(`shopCart`).innerHTML = `${itemsInCart}`;
}