let data=[{
    id:"1",
    name:"Casual Tshirt",
    image:"images/photo-1521572163474-6864f9cf17ab.avif",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing.",
    price:"100",
},
{
    id:"2",
    name:"half Tshirt",
    image:"images/photo-1578021127722-1f1ff95b429e.avif",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing.",
    price:"200",
},
{
    id:"3",
    name:"normal Tshirt",
    image:"images/photo-1618354691373-d851c5c3a990.avif",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing.",
    price:"300",
      },
    {
        id:"4",
        name:"office Tshirt",
        image:"images/photo-1621951753015-740c699ab970.avif",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing.",
        price:"400",
    },
       
];

console.log("data.id:",data[2].id)


let label=document.getElementById("label");

let shoppingCart=document.getElementById("shopping-cart");


let bag=JSON.parse(localStorage.getItem("localdata"))||[];
console.log("bag:",bag)
let basket=JSON.parse(localStorage.getItem("basket"))||[];

let calculation=()=>{
 
    let cart_amount=document.getElementById("cart_amount");
 
    let m=bag.map((x)=>x.item).reduce((x,y)=>x+y,0)
 
    cart_amount.innerHTML=m;

}

calculation();



let appenddata=()=>{

    if(bag.length!=0){
        console.log(bag)

       
        console.log("data:",data)
        return (shoppingCart.innerHTML=bag.map((x)=>{
            console.log("x:",x)

            let { id,item }=x;

            let search= data.find((m) => m.id === id)||[];
            
            console.log("search:",search)
            
            return`
            <div class="cart-item">
            <img width="200" src=${search.image} alt="" />
            <div class="details">
                <div class="title-price-x">
                    <h4 class="title-price">
                    <p>${search.name}</p>
                    <p class="cart-item-price">$ ${search.price}</p>
                    </h4>
                    <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                </div>
                <div class="buttons">
                                <i onclick="decreament(${id})" class="bi bi-dash-lg"></i>
                                <div id=${id} class="quantity">${item}</div>
                                <i onclick="increament(${id})" class="bi bi-plus-lg"></i>
                </div>
                <h3>$ ${item*search.price}</h3>
            </div>
            </div>
            `;
        }).join(""));
        
    }
    else{
        shoppingCart.innerHTML=``
        label.innerHTML=`
        <h2>Cart Is Empty</h2>
        <a href="index.html">
        <button class="homebtn">Back To Home</button> 
        </a>

        `
    }
}

appenddata();

let increament=(id,image,name,price)=>{
    let selectedItem=id
    // console.log("id:",selectedItem) 

    let search=bag.find((x)=> x.id===selectedItem);
    console.log("search:",search)
    if(search===undefined){
        bag.push({
            id:selectedItem,
            item:1,
        })
        
    }else{
        search.item++;
    }
    localStorage.setItem("localdata",JSON.stringify(bag));
    appenddata();
    // console.log("bag:",bag)
    update(selectedItem);

};

let decreament=(id)=>{
    let selectedItem=id
    // console.log("id:",selectedItem) 

    let search=bag.find((x)=> x.id===selectedItem);
    if(search===undefined){
        return;
    }
    else if(search.item===0){
        alert("No more Item related to this")
    }else{
        search.item--;
    }
    
    update(selectedItem);
    bag=bag.filter((x)=>x.item!==0);  //to remove 0 item elements from local storage
    appenddata();
    
    localStorage.setItem("localdata",JSON.stringify(bag));
    
};

let update=(id)=>{
    let search=bag.find((x)=> x.id===id);
    // console.log("search:",search.item)
    document.getElementById(id).innerHTML=search.item;
    calculation();
    totalamount();
};


let removeItem=(id)=>{
    let selectedItem=id;
    console.log("selectedItem:",selectedItem)
    bag=bag.filter((x)=>x.id!=selectedItem)
    localStorage.setItem("localdata",JSON.stringify(bag));
    appenddata();
    totalamount();
    calculation();
}

let totalamount=()=>{
    if(bag.length!=0){

        let amount=bag.map((x)=>{
            let {item,id}=x;
            let search=data.find((y)=>y.id==id)||[];
            return item*search.price;
        }).reduce((x,y)=>x+y,0);
        // console.log(amount)
        label.innerHTML=`<h2>Total value:-$ ${amount}</h2>
        <button class="checkout">Checkout</button>
        <button onclick="clearcart()" class="clearCart">Clear cart</button>`

    }
    else{
        return;
    }
}

totalamount();


let clearcart=()=>{
    bag=[];
    appenddata();
    calculation();
    localStorage.setItem("localdata",JSON.stringify(bag));
}