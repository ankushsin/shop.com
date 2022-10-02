
    let descobj = JSON.parse(localStorage.getItem("clicked_item"));  //productId must be there
    


    let price = document.querySelector("#right>div>h4");
    let img = document.querySelector("#left>img");
    let desc = document.querySelector("#right>h4");
    let name = document.querySelector("#right>h2");
    let stackedprice = document.querySelector("#right>div>h4+h4");
    let rating = document.querySelector("#right>div>p");
    
    display(descobj)


    function display(elem){
    
    img.setAttribute("src",elem.img||elem.image);

    // desc.innerText = elem.description
    
    name.innerText = elem.Name || elem.title;
    
    price.innerText += elem.price
    
    
    // stackedprice.innerText += elem.stackedPrice 
    
    rating.innerText = elem.rating.rate||elem.rating ; 
    

    // img.addEventListener("mouseover",mouseOn)
    // function mouseOn(){
    //     img.style.cursor = "pointer"
    //     img.setAttribute("src",elem.hoverUrl)
    // }

    // img.addEventListener("mouseout",mouseoff)
    // function mouseoff(){
    //     img.setAttribute("src",elem.imageUrl)
    // }
}
console.log(price)

let countd = document.querySelector("button+span")

function increment(){
        countd.innerText++;
        price.innerText = descobj.price*countd.innerText;
    }

    function decrement(){
      if(countd.innerText<1){
            alert("No such item in cart")
        }
        else{
          countd.innerText--;
        price.innerText = descobj.price*countd.innerText
        }
       ;
        
    }
    let data=JSON.parse(localStorage.getItem("data"))||[];
    document.querySelector("#cart").addEventListener("click",function(){
        if(check()){
            alert("Already Added In Your Cart")
        }else{
            data.push(descobj)
        localStorage.setItem("data",JSON.stringify(data))   //productId must be there
        window.location.href="cart.html"
        }
        
    })

    function check(){
        for(let i=0; i<data.length; i++){
            if(data[i].productID == descobj.productID){
                return true;
            }
        }
        return false;
    } 
