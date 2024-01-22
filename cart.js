const product = [
    {
      id: 0,
      image: 'https://images.bewakoof.com/t640/men-s-pomegrante-solid-t-shirt-502760-1674553431-1.jpg',
      title: 'mens maroon over size t-shirts',
      price: 54,
    },
    {
      id: 1,
      image: 'https://images.bewakoof.com/t640/men-black-white-plain-combo-pack-t-shirt-2-580316-1676363996-1.jpg',
      title: 'pack of two men black & white tshirts',
      price: 60,
    },
    {
      id: 2,
      image: 'https://images.bewakoof.com/t640/men-s-blue-house-of-the-dragon-blood-graphic-printed-oversized-t-shirt-539999-1680170074-1.jpg',
      title: 'dragon-blood-hod-oversized-fit-t-shirt',
      price: 23,
    },
    {
      id: 3,
      image: 'https://images.bewakoof.com/t640/men-s-purple-extraordinary-typography-oversized-t-shirt-582785-1702907972-1.jpg',
      title: 'men-printed-oversized-t-shirt-40es',
      price: 90,
    },
    {
      id: 3,
      image: 'https://images.bewakoof.com/t640/men-s-red-moon-rider-graphic-printed-oversized-t-shirt-502017-1701423884-1.jpg',
      title: 'mens-bold-red-moon-rider-printed-t-shirtnes',
      price: 85,
    },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/men-s-black-johnny-bravo-graphic-printed-oversized-t-shirt-599557-1687766100-1.jpg',
    title: 'mens-black-johnny-bravo-graphic-printed-oversized-t-shirt-men',
    price: 100,
  },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/campus-sutra-men-s-blue-regular-fit-jeans-452077-1656145274-1.JPG',
    title: 'campus-sutra-men-blue-solid-regular-fit-jeans36hones',
    price: 105,
  },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/men-s-black-washed-slim-fit-jeans-582144-1677677375-1.JPG',
    title: 'mens-black-washed-slim-fit-jeansand7930312',
    price: 110,
  },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/men-s-blue-washed-distressed-slim-fit-jeans-ogmjsl230378-605036-1690451222-1.JPG',
    title: 'mens-blue-washed-distressed-slim-fit-jeans-ogmjsl230378',
    price: 130,
  },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/men-s-blue-washed-distressed-cargo-jeans-625738-1698995786-1.jpg',
    title: 'mens-blue-washed-distressed-cargo-jeans-men',
    price: 103,
  },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/men-s-black-slim-fit-jeans-523614-1658746642-1.JPG',
    title: 'old-grey-mens-black-slim-fit-jeans-men',
    price: 92,
  },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/men-s-black-washed-jeans-1-585518-1680176259-1.jpg',
    title: 'mens-black-washed-jeans-1',
    price: 80,
  },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/men-s-grey-distressed-loose-fit-jeans-629169-1703589950-1.jpg',
    title: 'mens-grey-distressed-loose-fit-jeans',
    price: 111,
  },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/women-s-pink-solid-regular-windcheater-jacket-601592-1696587924-1.jpg',
    title: 'womens-pink-solid-regular-jackets',
    price: 142,
  },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/women-s-black-oversized-jackets-624623-1700114137-1.jpg',
    title: 'womens-black-oversized-jackets',
    price: 130,
  },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/women-s-sage-relaxed-fit-puffer-jacket-498987-1704808603-1.jpg',
    title: 'womens-sage-solid-puffer-jackets',
    price: 110,
  },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/women-s-tan-printed-superloose-jackets-601803-1700114385-1.jpg',
    title: 'womens-tan-printed-superloose-jackets',
    price: 155,
  },
  {
    id: 3,
    image: 'https://images.bewakoof.com/t640/women-s-blue-floral-printed-denim-jacket-628639-1701778122-1.jpg',
    title: 'womens-blue-floral-printed-denim-jacket',
    price: 120,
  },
  {
    id: 3,
    image: '',
    title: 'https://www.bewakoof.com/p/womens-lilac-solid-regular-jackets',
    price: 100,
  },
  {
    id: 3,
    image: 'image/aa-1.jpg',
    title: 'Head Phones',
    price: 100,
  },
  {
    id: 3,
    image: 'image/aa-1.jpg',
    title: 'Head Phones',
    price: 100,
  },
  {
    id: 3,
    image: 'image/aa-1.jpg',
    title: 'Head Phones',
    price: 100,
  } 
  ];
  const categories = [...new Set(product.map((item) => { return item }))]
  let i = 0;
  document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
              <div class='img-box'>
                  <img class='images' src=${image}></img>
              </div>
          <div class='bottom'>
          <p>${title}</p>
          <h2>$ ${price}.00</h2>` +
      "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
      `</div>
          </div>`
    )
  }).join('')
  
  var cart = [];
  
  function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
  }
  function delElement(a) {
    cart.splice(a, 1);
    displaycart();
  }
  
  function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
      document.getElementById("cartItem").innerHTML = cart.map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class='cart-item'>
                  <div class='row-img'>
                      <img class='rowimg' src=${image}>
                  </div>
                  <p style='font-size:12px;'>${title}</p>
                  <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
        );
      }).join('');
    }
  
  
  }