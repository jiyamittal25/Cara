let blog_data = [
  {
    id: 1,
    name: "The Flounce Flourish",
    desc: "Whenever people that you know dress up in outfits that look like you could spend an entire week in them and not get tired, that means that their style is “comfortable”.",
    date: "13/01",
    img: "../images/Blog/b1.jpg",
  },
  {
    id: 2,
    name: "The IZ Amy Byer",
    desc: "If someone is always dressing up in different shades of pinks and wears clothing with patterns of stars, smiles and strawberries, then you can define their style as “cute”",
    date: "15/02",
    img: "../images/Blog/b2.jpg",
  },
  {
    id: 3,
    name: "The Tulle Town",
    desc: "When someone’s style of clothing involves incredibly comfortable clothes, then “breathable” is a very fitting word to use, as it means that they are very comfortable.",
    date: "06/05",
    img: "../images/Blog/b3.jpg",
  },
  {
    id: 4,
    name: "The Cotton-Jersey Zip-Up Hoodie",
    desc: "This is a fashion, beauty that focuses on latest Fashion Trends as well as improving your lifestyle. Hoodies are Oversized ,Flexible, Unique, Trendy and Adorable.",
    date: "26/09",
    img: "../images/Blog/b4.jpg",
  },
];

let blog=document.getElementById("blog");
function generateblog(){
    return (blog.innerHTML=blog_data.map((x)=>{
        let {id,name,desc,date,img}=x;
        return `
            <div class="blog-box">
                <div class="blog-img">
                    <img class="blog-img1" src="${img}">
                </div>
                <div class="blog-details">
                    <h4>${name}</h4>
                    <p>${desc}</p>
                </div>
                <h1>${date}</h1>
            </div>
        `;
    }).join(""));
};
generateblog();