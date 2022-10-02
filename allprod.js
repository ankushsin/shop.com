

import {navbar} from "./components/navbar.js";



document.getElementById("navbar").innerHTML = navbar();
document.getElementById("nav_sidebutton").addEventListener("click",function(){
    document.querySelector(".bg_modal").style.display = 'flex';
});

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".bg_modal").style.display = 'none';
})
document.getElementById("navsign-in").addEventListener("click",function(){
    document.querySelector("#nav_signin_right").style.display = 'flex';
});
document.querySelector(".close_signin").addEventListener("click",function(){
    document.querySelector("#nav_signin_right").style.display = 'none';
})

let cart = JSON.parse(localStorage.getItem("cart")) || [];













let data;



async function getData () {
    try{
    let api = await fetch(`https://fakestoreapi.com/products`);
    data = await api.json();
    append(data);
    console.log("Data")
    console.log(data);
    }
    catch(err){
        console.log(err);
        let div = document.querySelector("#product__div");
        let h1 = document.createElement("h1");
        h1.textContent = "Some error from server"
        div.append(h1);
    
    }
}

getData();


function append(data){

    let container = document.querySelector("#product__div");

    container.innerHTML = null;

    data.map((el) =>{
        //Creating html element
        let mainDiv = document.createElement("div");
        let imageDiv = document.createElement("div");
        let contentDiv = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h3");
        // let categoryP = document.createElement("p");
        let priceP = document.createElement("h4");
        let discount = document.createElement("p");
        // let buttonDiv = document.createElement("div");
       
        // let cartButton = document.createElement("button");


        //Sttributes or value
        image.src = el.image
        image.classList.add("prodimg");
        // categoryP.innerText = el.category
        priceP.innerText = "$"+" "+el.price
        title.innerText = el.title
        discount.innerText = "Free shipping with $50.00 orders"
        discount.style.color = "blue";
       
        // cartButton.innerText = "Add to Cart"

        // cartButton.style.backgroundColor = "white"
        // cartButton.style.borderRadius = "20px"; 
        
        mainDiv.style.border = "1px solid white"
        mainDiv.style.paddingBottom = "1rem"

   
        // cartButton.addEventListener("click" , () =>{
        //     handleAddToCart(el);
        // } )


        imageDiv.append(image);
        // buttonDiv.append(cartButton);
        contentDiv.append(title , priceP ,discount);
        mainDiv.append(imageDiv , contentDiv);
        mainDiv.addEventListener("click",function(){
            addtocart(el);
        })

        //Append
        container.append(mainDiv);
    })


}

let addtocart = (el) =>{
    localStorage.setItem("the_shop_user_cart",JSON.stringify(el))
    window.location.href="#"
   
}









// function handleAddToCart (data) {
//     console.log(data)


//     let flag = false;
//     //before pushiong we need to check if it already present 
//     cart.map((el) =>{
//         if(el.id == data.id){
//             flag = true;
//         }
//     })

//     if(flag){
//         alert("Item is already added in the cart")
//         return;
//     }


//     data.qty = 1;
//     cart.push(data);

//     localStorage.setItem("cart" , JSON.stringify(cart));
   
//     alert("Item added to cart")

// }

let filter = document.getElementById("filtertheproductitems");

filter.addEventListener("change",function(){
    if(filter.value === "All"){
        append(data);
    }else{
      let filtered = data.filter(function(el){
        return el.category===filter.value
      })
      append(filtered);
    }

  })


