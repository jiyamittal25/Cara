const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

let carttotal = document.getElementById("carttotal");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let calculation = () => {
  let cartIcon = document.getElementById("cartamount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();

let shopItemsData = [
  {
    id: "1",
    name: "Cartoon Astronaut Comfort Fit T-Shirts",
    price: 1000,
    desc: "adidas",
    img: "../images/Products/f1.jpg",
  },
  {
    id: "2",
    name: "Men Comfort Fit Solid Cotton T-Shirts",
    price: 1200,
    desc: "DAMENSCH",
    img: "../images/Products/f2.jpg",
  },
  {
    id: "3",
    name: "Men 100% Cotton Comfort Fit Tshirt",
    price: 800,
    desc: "U.S. POLO ASSN.",
    img: "../images/Products/f3.jpg",
  },
  {
    id: "4",
    name: "Men's Regular Fit Polo Comfort FitShirt",
    price: 750,
    desc: "Van Heusen",
    img: "../images/Products/f4.jpg",
  },
  {
    id: "5",
    name: "Men Comfort Fit Polo Half Sleeve T-Shirt",
    price: 1200,
    desc: "Red Tape",
    img: "../images/Products/f5.jpg",
  },
  {
    id: "6",
    name: "Polo Neck Half Sleeve Striped Print Casual Men Tshirt",
    price: 1400,
    desc: "EYEBOGLER",
    img: "../images/Products/f6.jpg",
  },
  {
    id: "7",
    name: "Women Mid Rise Patch Work Straight Linen Palazzos",
    price: 500,
    desc: "GO COLORS",
    img: "../images/Products/f7.jpg",
  },
  {
    id: "8",
    name: "Cotton Patch Work Straight Top for Women",
    price: 1300,
    desc: "Leriya Fashion",
    img: "../images/Products/f8.jpg",
  },
  {
    id: "9",
    name: "Men Black Solid Casual Straight Shirt",
    price: 1400,
    desc: "max",
    img: "../images/Products/n1.jpg",
  },
  {
    id: "10",
    name: "Cut-out Comfort Fit Work Casual shirt",
    price: 1400,
    desc: "Leriya Fashion",
    img: "../images/Products/n2.jpg",
  },
  {
    id: "11",
    name: "Men White Slim Fit Casual Straight Shirt",
    price: 2200,
    desc: "HIGHLANDER",
    img: "../images/Products/n3.jpg",
  },
  {
    id: "12",
    name: "Striped Contrast Collar Polo T-shirt",
    price: 2000,
    desc: "CULT.SPORT",
    img: "../images/Products/n4.jpg",
  },
  {
    id: "13",
    name: "Men Pure Cotton Slim Fit Conversational Printed Casual Shirt",
    price: 900,
    desc: "NIRVAAN",
    img: "../images/Products/n5.jpg",
  },
  {
    id: "14",
    name: "Denim Shorts with Inner Elastic in Stretchable Denim Fabric Regular Fit",
    price: 1800,
    desc: "Chopper Club",
    img: "../images/Products/n6.jpg",
  },
  {
    id: "15",
    name: "Men Classic Slim Fit Printed Casual Shirt",
    price: 1700,
    desc: "NIRVAAN",
    img: "../images/Products/n7.jpg",
  },
  {
    id: "16",
    name: "Crinkled loungewear Cotton Casual shirt",
    price: 1600,
    desc: "Loungewear",
    img: "../images/Products/n8.jpg",
  },
];
