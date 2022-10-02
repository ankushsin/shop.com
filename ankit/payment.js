import navbar from '../components/navbar.js';


let navbar_div= document.getElementById('navbar')
navbar_div.innerHTML=navbar();

let totalItem = localStorage.getItem("totalItem")||[];
let subtotal = localStorage.getItem("subtotal") ||[];
document.querySelector("p").innerText +=  " "+totalItem;
document.querySelector("h3").innerText +=" "+"$"+subtotal;

let cardDetails = [
    {cardNum: "1234567", cvv: 456},
    {cardNum: "2345678", cvv: 367}
]

document.querySelector("form").addEventListener("submit",checkData)

function checkData(event){
    event.preventDefault()
    cardDetails.forEach(function(elem){
        if(elem.cardNum == document.querySelector("#cdNum").value){
            console.log(elem)
            if(elem.cvv == document.querySelector("#cvv").value){
                window.location.href="otp.html"
                
            }
            else{
                alert("wrong CVV")
            }
        }
    })
}
document.querySelector("form+button").addEventListener("click",cancel)

function cancel(){
    window.location.href = "cart.html"
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

import footer from '../components/footer.js';

let v = document.getElementById('footer')

v.innerHTML=footer();