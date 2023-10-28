// home page
let p1 = document.getElementById("p1");
let generateShop1 = () => {
  return (p1.innerHTML = shopItemsData.slice(0,shopItemsData.length/2)
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => String(x.id) === id) || [];
      return `<div class="pro">
                <img src=${img} alt="">
                <div class="des">
                    <span>${desc}</span>
                    <h5>${name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>${price}</h4>
                </div>
                    <div class="buttons">
                        <i  onclick="decrement1(${id})" class="fas fa-square-minus"></i>
                        <span id=${id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</span>
                        <i onclick="increment1(${id})" class="fas fa-square-plus"></i>
                    </div>
            </div>
        `;
    })
    .join(" "));
};
generateShop1();



let increment1 = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem) ;
  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update1(selectedItem);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement1 = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update1(selectedItem);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update1 = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  document.getElementById(id).innerHTML = search.item;
  calculation1();
};

let calculation1 = () => {
  let cartIcon = document.getElementById("cartamount");
  basket1 = JSON.parse(localStorage.getItem("data")) || [];
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation1();


let p2 = document.getElementById("p2");
let generateShop2 = () => {
  return (p2.innerHTML = shopItemsData
    .slice(shopItemsData.length / 2,shopItemsData.length)
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => String(x.id) === id) || [];
      return `<div class="pro">
                <img src=${img} alt="">
                <div class="des">
                    <span>${desc}</span>
                    <h5>${name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>${price}</h4>
                </div>
                    <div class="buttons">
                        <i  onclick="decrement1(${id})" class="fas fa-square-minus"></i>
                        <span id=${id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</span>
                        <i onclick="increment1(${id})" class="fas fa-square-plus"></i>
                    </div>
            </div>
        `;
    })
    .join(" "));
};
generateShop2();


