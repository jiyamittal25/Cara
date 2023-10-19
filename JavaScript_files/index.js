// shop page
let shop = document.getElementById("products");
let generateShop=()=>{
    return (shop.innerHTML=shopItemsData
        .map((x)=>{
            let {id,name,price,desc,img}=x;
            let search=basket.find((x)=>String(x.id) === id) || [];
            console.log(search);
        // return `<div class="pro" onclick="window.location.href='sproduct.html';">
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
                    <i  onclick="decrement(${id})" class="fas fa-square-minus color"></i>
                    <span id=${id} class="quantity">${search.item === undefined?0:search.item}</span>
                    <i onclick="increment(${id})" class="fas fa-square-plus color"></i>
                </div>
            </div>
        `;
    }).join(" "));
};
generateShop();



let increment=(id)=>{
    let selectedItem=id;
    let search=basket.find((x)=> x.id===selectedItem);
    if(search===undefined){
        basket.push({
          id: selectedItem,
          item: 1,
        });
    }
    else{
        search.item+=1;
    }
    update(selectedItem);
    localStorage.setItem("data", JSON.stringify(basket));
}

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);

  if(search===undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem);
  basket = basket.filter((x) => x.item !== 0);
  (search.price)
  localStorage.setItem("data", JSON.stringify(basket));
};

let update=(id)=>{
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);
    document.getElementById(id).innerHTML=search.item;
    calculation();
}

calculation();