// home page
let p1 = document.getElementById("p1");
let basket1 = JSON.parse(localStorage.getItem("data")) || [];
let generateShop1 = () => {
  return (p1.innerHTML = shopItemsData.slice(0,shopItemsData.length/2)
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket1.find((x) => String(x.id) === id) || [];
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
  let search = basket1.find((x) => x.id === selectedItem);
  if (search === undefined) {
    basket1.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  // generateShop1();
  update1(selectedItem);
  localStorage.setItem("data", JSON.stringify(basket1));
};

let decrement1 = (id) => {
  let selectedItem = id;
  let search = basket1.find((x) => x.id === selectedItem);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update1(selectedItem);
  basket1 = basket1.filter((x) => x.item !== 0);
  // generateShop1();
  localStorage.setItem("data", JSON.stringify(basket1));
};

let update1 = (id) => {
  let selectedItem = id;
  let search = basket1.find((x) => x.id === selectedItem);
  document.getElementById(id).innerHTML = search.item;
  calculation1();
};

let calculation1 = () => {
  let cartIcon = document.getElementById("cartamount");
  cartIcon.innerHTML = basket1.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation1();


let p2 = document.getElementById("p2");
let basket2 = JSON.parse(localStorage.getItem("data")) || [];
let generateShop2 = () => {
  return (p2.innerHTML = shopItemsData
    .slice(shopItemsData.length / 2,shopItemsData.length)
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket2.find((x) => String(x.id) === id) || [];
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
                        <i  onclick="decrement2(${id})" class="fas fa-square-minus"></i>
                        <span id=${id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</span>
                        <i onclick="increment2(${id})" class="fas fa-square-plus"></i>
                    </div>
            </div>
        `;
    })
    .join(" "));
};
generateShop2();

let increment2 = (id) => {
  let selectedItem = id;
  let search = basket2.find((x) => x.id === selectedItem);
  if (search === undefined) {
    basket2.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update2(selectedItem);
  // generateShop2();
  localStorage.setItem("data", JSON.stringify(basket2));
  
};

let decrement2 = (id) => {
  let selectedItem = id;
  let search = basket2.find((x) => x.id === selectedItem);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update2(selectedItem);
  basket2 = basket2.filter((x) => x.item !== 0);
  // generateShop2();
  localStorage.setItem("data", JSON.stringify(basket2));
  
};

let update2 = (id) => {
  let selectedItem = id;
  let search = basket2.find((x) => x.id === selectedItem);
  document.getElementById(id).innerHTML = search.item;
  calculation2();
};

let calculation2 = () => {
  let cartIcon = document.getElementById("cartamount");
  cartIcon.innerHTML = basket2.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation2();


//features
let feature = document.getElementById("feature");
let feature_data = [
  {
    id: 1,
    img: "../images/f1.png",
    desc: "FREE SHIPING",
  },
  {
    id: 2,
    img: "../images/f2.png",
    desc: "ONLINE ORDER",
  },
  {
    id: 3,
    img: "../images/f3.png",
    desc: "SAVE MONEY",
  },
  {
    id: 4,
    img: "../images/f4.png",
    desc: "PROMOTIONS",
  },
  {
    id: 5,
    img: "../images/f5.png",
    desc: "HAPPY SELLS",
  },
  {
    id: 6,
    img: "../images/f6.png",
    desc: "F24/7 SUPPORT",
  },
];
function generatefeatures(){
  return (feature.innerHTML=feature_data.map((x)=>{
    let {img,desc}=x;
    return `
        <div class="fe-box">
            <img src=${img} alt="">
            <h6>${desc}</h6>
        </div>
    `;
  }).join(""));
}
generatefeatures();
