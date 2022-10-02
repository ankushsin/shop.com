
   import navbar from '../components/navbar.js';


   let nabvar_div = document.getElementById('navbar')
   nabvar_div.innerHTML= navbar()
   
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
    

    
    document.querySelector("#cart").addEventListener("click",function(){
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let clicked_item = JSON.parse(localStorage.getItem('clicked_item'))||[];
       cart.push(clicked_item)
            localStorage.setItem('cart', JSON.stringify(cart))
       alert("Add to Cart Successfull")
    })


    document.querySelector(".close").addEventListener("click",function(){
        document.querySelector(".bg_modal").style.display = 'none';
    })
    document.getElementById("navsign-in").addEventListener("click",function(){
        document.querySelector("#nav_signin_right").style.display = 'flex';
    });
    document.querySelector(".close_signin").addEventListener("click",function(){
        document.querySelector("#nav_signin_right").style.display = 'none';
    })
    
    let userDetails= JSON.parse(localStorage.getItem('userDetails'))||[]
    let n = document.getElementById('n')
    n.innerText=userDetails.name || 'Sign In';


    let search_bt = document.getElementById('search_btn')


 search_bt.onclick=(()=>{
    console.log("gaga")
    let searchbar = document.getElementById('searchbar').value;
    console.log(searchbar)
   localStorage.setItem('search_item', JSON.stringify(searchbar))
   window.location.href='./allproducts.html'

 })
    
 let addcart = document.getElementById('addcart')
 addcart.onclick=(()=>{
    console.log("gaga")
   window.location.href='./cart.html'

 })

 import footer from '../components/footer.js';

let v = document.getElementById('footer')

v.innerHTML=footer();