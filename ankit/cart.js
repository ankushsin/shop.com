import navbar from '../components/navbar.js';

let navbar_div= document.getElementById('navbar')
navbar_div.innerHTML=navbar();


let card_check=document.getElementById("cart-check");

let card_details=document.getElementById("card-details");

let label=document.getElementById("label");
let data=JSON.parse(localStorage.getItem("cart"))||[];   //productId must be there
        // console.log("data111:",data)
        let total=data.reduce(function(acc,ele,i){
            return acc+Number(ele.price)
        },0)
        console.log(total)

let totalItem=data.length;

let subtotal=0;

document.querySelector("#total>p+span").innerText = totalItem; 

console.log("totalItem:",totalItem)
let appenddata=()=>{
    
    console.log("data:",data)

    if(data.length!=0){

        console.log("data:",data.length);

        data.forEach((el,ind)=>{

            // card_details.innerHTML=null;

            subtotal+= +el.price;

            

            let div=document.createElement("div");

            let div2=document.createElement("div");

            let image=document.createElement("img");
            image.src=el.img || el.image;
            image.style.width="15%";

            let name=document.createElement("h3");
            name.innerText=el.Name || el.title;

            let price=document.createElement("h2");
            price.innerText=`$ ${el.price}`;
            
            let div4=document.createElement("div"); 

            let count = document.createElement("span");
            count.innerText = 1;

            let btn1 = document.createElement("button");
            btn1.innerText = "+";
            btn1.onclick=()=>{
                count.innerText++;
                totalItem++
                price.innerText = elem.price*count.innerText;
                document.querySelector("#total>p+span").innerText = totalItem;
                subtotal += +elem.price
                document.querySelector("#sub+span").innerText =  subtotal;
            }

            let btn2 = document.createElement("button")
            btn2.innerText = "-";
            // btn2.addEventListener("click",decrement)
            btn2.onclick=()=>{
                count.innerText--;
        
                totalItem--
                price.innerText = elem.price*count.innerText;
                document.querySelector("#total>p+span").innerText =  totalItem;
                subtotal -= +elem.price
                document.querySelector("#sub+span").innerText =  subtotal;
                if(count.innerText==0){
                    alert("No such item left in cart")
                    removing()
                }
            }

            let cashback=document.createElement("p");
            cashback.innerText=`$ ${el.price*.05} Cashback`;

            // let item=document.createElement("p");
            // item.innerText=`Item#:${el.productID}`;

            
            

            let div3=document.createElement("div");

            let save=document.createElement("button");
            save.innerText="Save for Later";
            save.className="save"

            let btn=document.createElement("button");
            btn.innerText="Remove";
            btn.addEventListener("click",function(){
                removing(ind,data);
            })
            btn.className="btn"

            div4.append(btn2,count,btn1);
            div4.className="indec"

            div3.append(save,btn);
            

            div2.append(name,cashback,price);

            div.append(image,div2,div3);
            card_details.append(div,div4);
          
        })

    }
    else{
        card_details.innerHTML=``;
        card_check.innerHTML=`
        <p class="redline">You do not have anything in your shopping cart.</p>
        <p class="red2"> You should <a href="home.html"> <u class="underline"> continue shopping </u> </a> and add something to your cart!</p>
        <p class="red2"> You can also <a href="signin.html"><u class="underline"> Sign in / Create an account</u></a> to earn up to 50% Cashback on eligible purchases.</p>
        <p class="red2">SHOP.COM makes online shopping easy by allowing shoppers to shop across million of products, hundreds of stores and thousands of name brands with the convenience of OneCart®, our universal shopping cart.</p>
        `
    }
}

appenddata()



// console.log("subtotal:",subtotal)

document.querySelector("#sub+span").innerText=subtotal;


function removing(ind,data){
    data.splice(ind,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    appenddata()

}

// function removing(index){

//     let data=JSON.parse(localStorage.getItem("data"))||[];
  

//             data.splice(index,1)
//             localStorage.setItem("data",JSON.stringify(data))
//             window.location.reload()

// }


document.querySelector("#checkinout").addEventListener("click",checkinout);

function checkinout(){
  localStorage.setItem("subtotal",subtotal);
  localStorage.setItem("totalItem",totalItem)
  window.location.href="payment.html"
}

document.querySelector("#apply").addEventListener("click",Shipping);
function Shipping(){
  if(document.querySelector("#zip2").value == "shop.com"){
    alert("Successfully applied code")
    subtotal = subtotal-Math.ceil(subtotal*3/10)
    }
    else{
        alert("Wrong ZipCode")
      }
    // console.log("zip:",subtotal)
    document.querySelector("#sub+span").innerText = subtotal;
}

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
 import footer from '../components/footer.js';

let v = document.getElementById('footer')

v.innerHTML=footer();