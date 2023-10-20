let tablecontent = document.getElementById("table-content");
let cartadd = document.getElementById("cart-add");
let cart = document.getElementById("cart");


let generateCartItem = () => {
  if (basket.length != 0) {
    return (tablecontent.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === String(id)) || [];
        let {img,name,price}=search;
        return `
                <tr>
                    <td><a href="#"><i onclick="removeItem(${id})" class="fas fa-solid fa-trash"></i></a></td>
                    <td><img src=${img}></td>
                    <td>${name}</td>
                    <td>${price}</td>
                    <td>
                        <div class="buttons">
                            <i  onclick="decrement(${id})" class="fas fa-square-minus"></i>
                            <span id=${id} class="quantity">${item}</span>
                            <i onclick="increment(${id})" class="fas fa-square-plus"></i>
                        </div>
                    </td>
                    <td id="t-price1">${item * price}</td>
                </tr>
            `;
      })
      .join(""));
  } else {
    cart.innerHTML = ``;
    cartadd.innerHTML = `
        <div class="empty">
            <h2>Cart is Empty</h2>
            <a href="index.html">
                <button class="normal" id="HomeBtn">Back to home</button>
            </a>
        </div>
       `;
  }
};
generateCartItem();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  generateCartItem();
  totalAmount();
  update(selectedItem);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItem();
  totalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let removeItem =(id)=>{
    let selectedItem=id;
    basket=basket.filter((x)=>x.id !== selectedItem);
    generateCartItem();
    totalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
    calculation();
};

let totalAmount=()=>{
    if(basket.length!==0){
        let amount=basket.map((x)=>{
            let {item,id}=x;
            let search =shopItemsData.find((y)=> y.id===String(id)) || [];
            return item * search.price;
        }).reduce((x,y)=>x+y,0);
        var Shippingcharge=0;
        if(amount<1000){
            Shippingcharge=40;
        }

        carttotal.innerHTML = `
                <tr>
                    <td>Cart Subtotal</td>
                    <td>${amount}</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>${Shippingcharge}</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>${amount+Shippingcharge}</strong></td>
                </tr>
        `;
    }
    else return;
}
totalAmount();

function checkout(){
  let product_placed=document.getElementById("product_placed");
  product_placed.style.backgroundColor="blue";
  product_placed.style.display= "inline-block";
  product_placed.style.height= "auto";
  product_placed.style.padding= "20px";
  product_placed.style.textAlign= "center";
  product_placed.style.borderRadius= "4px";;
  product_placed.innerHTML = "YOUR ORDER HAS BEEN PLACED";
  alert("Your order has been Placed");
  console.log(product_placed);
}  